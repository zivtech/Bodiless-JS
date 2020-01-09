# Data and Page Generation

## Overview

Most components will consume and render some *data* (content and/or
configuration). For example, a link component might take a target href, some
link text, etc. and render a clickable link on the page. A "where to buy" component
might take a product ID and some credentials for an external service, and render
a list of online retailers. In an ordinary react app, such data might be passed
as props to the component. In Bodiless, components usually provide an interface to
edit the data they render, so the data are part of the application state.

Rather than requiring each component to manage its own state, Bodiless provides a
central store and serialization mechanism. Components are allocated a slot in
that central store where they can read and write the data they need. Each
component is responsible for the structure of its own data, while the store is
responsible for:
- serializing/deserializing data for all components to and from
JSON files on the edit server
- managing data which are shared among components,
- tracking changes globally (for example, to allow for undo/redo).

Note that the ability to edit content is limited to the edit environment. When
Bodiless renders the static site for production, the global store is effectively
immutable, and components simply consume the data therein.

## Flow

THe following diagram illustrates the flow of data in the edit environment.

![Data Flow](assets/data.jpg)

1. Component data are stored in json files on the (local or public) edit server.
   There is a single file for each component, and all data files for a given
   page are kept together in a single directory under `~/src/data/pages`.
   The name of each file corresponds to a key in the store which uniquely
   identifies the component to which the data belong.

2. The Gatsby development server -- or, more properly, the
   [Gatsby Filesystem Plugin](https://www.gatsbyjs.org/packages/gatsby-source-filesystem)
   -- watches the filesystem for changes in the data. When a change is detected,
   Gatsby executes a page query and sends the results over a websocket to
   the browser. There, they are provided as a "data" prop to the top level page
   component. For more information, see [the Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-four/).

3. The data provided by Gatsby consist of the contents of all json files in the
   directory which corresponds to the current page. These are processed into a
   key-value store (a JS map) keyed by the filename. The elements of this map
   are Mobx observables, so when they are updated they trigger any observer
   component to re-render. As a result, we explicity prevent update of the main
   page component, which would otherwise re-render itself and all children
   whenever a json file was modified. Note also that we compare the incoming
   data from Gatsby to the data already in the score, and only update if it has
   changed.

4. We refer to each element in the store as a "node", and each is represented by
   an instance of the `DefaultContentNode`
   class. A ContentNode is placed in a context which can be access by `useNode()`. The
   component can then read and write to the store via the node's data property.

5. The store also defines a Mobx _reaction_ which listens for changes. When a
   component updates its data. The reaction invokes a `BackendClient`
   to post the updated node to a ligthweight express server
   which in turn serialized the data to json.

6. The backend server is also responsible for managing the git repository which
   contains all code and content for the site, and exposes endpoints to commit
   changes and push them to an upstream remote _Note the client-side
   functionality to consume these endpoints is not yet implemented.

## Working with Data

### Creating Pages

By default, Gatsby creates a page for every component it finds in the `/src/pages/`
directory. Bodiless extends this to create pages recursively for every directory
located under `~/src/data/pages`. Thus, to create a new page,
simply create a new directory or subdirectory there. The URL path to your page
will be the same as its relative path under `~/src/data/pages`. For example, a
directory at `~/src/data/pages/foo/bar` will result in a page at
`http://mysite.com/foo/bar/`.

You can include an index.json file if you wish to specify
templates to use for the page level components of the given page and/or its subpages, eg:
```json
{
    "#template": "mytemplate",
    "#subpage_template": "mysubpagetemplate",
}
```
The templates should be specified as paths relative to `~/src/templates`
and should refer to a React page component, without the jsx extension.
If `#template` key is omitted in the page index.json, then Bodiless will use template specified
in `#subpage_template` of the closest ancestor of the page.
If closest ancestor does not have `#subpage_template`, then the default template (`~/src/templates/_default.jsx`)
will be used.

Alternatively, for one-off pages, you can include an "index.jsx" file containing
the page level component.

If you provide neither index.json nor a page component, 404 page will be returned.

This can/should be customized to fit the needs of your site.

### Page Data

In order to take advantage of the Bodiless data flow, your page-level component (or
template) should use `Page`, and
should export the default page query. the `default template`
is a good example and can be copied to form the basis of your pages.

Note that the Gatsby page query exported by the default template uses a GraphQL "fragment":

```javascript
export const query = graphql`
  query($slug: String!) {
    ...PageQuery,
    ...SiteQuery
  }
`;
```

The fragment is defined by Gatsby Theme Bodiless 
and queries the contents of all json files in the directory corresponding to the
page. This can be used as-is, or the page query could be extended in case the
page requries additional data.

### Component Data

Page provides a root node to the node context which initializes the store and
provides a base ContentNode instance in to the Context.
Components that need a node will require a `nodeKey` prop, which will provide each of them with a 
new ContentNode that is a child of the current one.

```javascript
export default (props: any) => (
  <Page {...props}>
    <Layout>
      <h1>Default Page</h1>
      <EditorFullFeatured nodeKey="editor" />
    </Layout>
  </Page>
);
 ```
 
 Note that the ContentNode instance does not store any data; it is simply an
 interface which points to a particular "slot" in the global store. The actual
 storage and retrieval of data are handled by the store's getter and setter
 methods which are injected into the ContentNode constructor (this happens
 within `GatsbyNodeProvider::getRootNode()`).

 While the store itself is a flat set of key-value pairs, the ContentNode interface
 provides a mechanism for creating a hierarchy of content nodes which mirrors
 the component hierarchy. The key names are actually built as *paths*, and `ContentNode`
 provides a `child()` method which will create a new node within the namespace of
 the parent. This allows compound components to name the nodes used by their children
 uniquely on the page by using the nodeKey prop:

 ```javascript
const Blurb =  ({ node }) => (
  <div>
    <header>
      <h1><Editable nodeKey="title" />
      <EditorFullFeatured nodeKey="subtitle" />
    </header>
    <EditorFullFeatured nodeKey="body" />
  </div>
);
```