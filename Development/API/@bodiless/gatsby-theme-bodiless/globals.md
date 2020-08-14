[@bodiless/gatsby-theme-bodiless](README.md) › [Globals](globals.md)

# @bodiless/gatsby-theme-bodiless

## Index

### Enumerations

* [ChangeState](enums/changestate.md)
* [ItemState](enums/itemstate.md)
* [ItemStateEvent](enums/itemstateevent.md)

### Classes

* [BackendClient](classes/backendclient.md)
* [GatsbyMobxStore](classes/gatsbymobxstore.md)
* [GatsbyMobxStoreItem](classes/gatsbymobxstoreitem.md)
* [GatsbyNodeProvider](classes/gatsbynodeprovider.md)

### Type aliases

* [BackendClientConf](globals.md#backendclientconf)
* [ChangeNotifier](globals.md#changenotifier)
* [Client](globals.md#client)
* [Commit](globals.md#commit)
* [ConflictsResponseType](globals.md#conflictsresponsetype)
* [ContentProps](globals.md#contentprops)
* [DataSource](globals.md#datasource)
* [FinalUI](globals.md#finalui)
* [GatsbyData](globals.md#gatsbydata)
* [GatsbyNode](globals.md#gatsbynode)
* [GatsbyPage](globals.md#gatsbypage)
* [GitBranchType](globals.md#gitbranchtype)
* [GitClient](globals.md#gitclient)
* [LocateFilesProps](globals.md#locatefilesprops)
* [PageData](globals.md#pagedata)
* [Props](globals.md#props)
* [PropsWithFormApi](globals.md#propswithformapi)
* [PropsWithGitClient](globals.md#propswithgitclient)
* [PropsWithNotify](globals.md#propswithnotify)
* [PullStatus](globals.md#pullstatus)
* [ResponseData](globals.md#responsedata)
* [State](globals.md#state)
* [Tree](globals.md#tree)
* [UI](globals.md#ui)

### Variables

* [DEFAULT_REQUEST_DELAY](globals.md#const-default_request_delay)
* [DefaultActiveMenuOptions](globals.md#const-defaultactivemenuoptions)
* [GatsbyPageContext](globals.md#const-gatsbypagecontext)
* [MAXIMUM_REQUEST_DELAY](globals.md#const-maximum_request_delay)
* [NewPageProvider](globals.md#const-newpageprovider)
* [Page](globals.md#const-page)
* [author](globals.md#const-author)
* [backendFilePath](globals.md#const-backendfilepath)
* [backendPort](globals.md#const-backendport)
* [backendStaticPath](globals.md#const-backendstaticpath)
* [canAlertOnLoad](globals.md#const-canalertonload)
* [canCommit](globals.md#const-cancommit)
* [cookies](globals.md#const-cookies)
* [defaultClient](globals.md#const-defaultclient)
* [dotenv](globals.md#const-dotenv)
* [nodeChildDelimiter](globals.md#const-nodechilddelimiter)
* [readFilePromise](globals.md#const-readfilepromise)
* [writeFilePromise](globals.md#const-writefilepromise)

### Functions

* [ChangeContent](globals.md#const-changecontent)
* [CommitsList](globals.md#const-commitslist)
* [FetchChanges](globals.md#const-fetchchanges)
* [GatsbyPageProvider](globals.md#const-gatsbypageprovider)
* [GitProvider](globals.md#const-gitprovider)
* [PullChanges](globals.md#const-pullchanges)
* [RemoteChanges](globals.md#const-remotechanges)
* [WrappedSpinner](globals.md#const-wrappedspinner)
* [addPageLeaver](globals.md#const-addpageleaver)
* [configureEnvFileFor](globals.md#const-configureenvfilefor)
* [createPageDataUrl](globals.md#const-createpagedataurl)
* [doFetch](globals.md#const-dofetch)
* [envToJson](globals.md#const-envtojson)
* [findGitFolder](globals.md#const-findgitfolder)
* [formGetCommitsList](globals.md#const-formgetcommitslist)
* [formGitCommit](globals.md#const-formgitcommit)
* [formGitPull](globals.md#const-formgitpull)
* [formGitReset](globals.md#const-formgitreset)
* [formPageAdd](globals.md#const-formpageadd)
* [getCurrentGitBranch](globals.md#const-getcurrentgitbranch)
* [getDefaults](globals.md#const-getdefaults)
* [getGitRepository](globals.md#const-getgitrepository)
* [getMenuOptions](globals.md#const-getmenuoptions)
* [getPackagesEnvConfig](globals.md#const-getpackagesenvconfig)
* [getSiteEnvConfig](globals.md#const-getsiteenvconfig)
* [getUI](globals.md#const-getui)
* [handle](globals.md#const-handle)
* [handleBranchResponse](globals.md#const-handlebranchresponse)
* [handleChangesResponse](globals.md#const-handlechangesresponse)
* [handleDetachedState](globals.md#const-handledetachedstate)
* [handleResponse](globals.md#const-handleresponse)
* [init](globals.md#const-init)
* [isChangeset](globals.md#const-ischangeset)
* [isResponseSuccessful](globals.md#const-isresponsesuccessful)
* [jsonToEnv](globals.md#const-jsontoenv)
* [loadPageDataJson](globals.md#const-loadpagedatajson)
* [locateFiles](globals.md#const-locatefiles)
* [renderSelectableList](globals.md#const-renderselectablelist)
* [stripSurroundingSlashes](globals.md#const-stripsurroundingslashes)
* [useGatsbyPageContext](globals.md#const-usegatsbypagecontext)
* [useGetMenuOptions](globals.md#const-usegetmenuoptions)
* [validNodeEnv](globals.md#const-validnodeenv)
* [verifyPage](globals.md#const-verifypage)
* [writeToFile](globals.md#const-writetofile)

### Object literals

* [defaultEnvConfig](globals.md#const-defaultenvconfig)
* [defaultEnvValues](globals.md#const-defaultenvvalues)
* [defaultGatsbyPage](globals.md#const-defaultgatsbypage)
* [defaultUI](globals.md#const-defaultui)
* [menuOptions](globals.md#const-menuoptions)

## Type aliases

###  BackendClientConf

Ƭ **BackendClientConf**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:20](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L20)*

#### Type declaration:

* **baseUrl**? : *undefined | string*

* **prefix**? : *undefined | string*

___

###  ChangeNotifier

Ƭ **ChangeNotifier**: *function*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx:220](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx#L220)*

#### Type declaration:

▸ (): *Promise‹void›*

___

###  Client

Ƭ **Client**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts:49](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts#L49)*

*Defined in [packages/gatsby-theme-bodiless/src/dist/NewPageProvider.tsx:30](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/NewPageProvider.tsx#L30)*

#### Type declaration:

* **savePage**(): *function*

  * (`path`: string, `template?`: undefined | string): *AxiosPromise‹any›*

___

###  Commit

Ƭ **Commit**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/CommitsList.tsx:19](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/CommitsList.tsx#L19)*

#### Type declaration:

* **author**: *string*

* **date**: *string*

* **hash**: *string*

* **title**: *string*

___

###  ConflictsResponseType

Ƭ **ConflictsResponseType**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/types.ts:27](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/types.ts#L27)*

#### Type declaration:

* **files**? : *string[]*

* **hasConflict**: *boolean*

___

###  ContentProps

Ƭ **ContentProps**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx:100](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx#L100)*

#### Type declaration:

* **errorMessage**? : *undefined | string*

* **masterStatus**: *[ChangeState](enums/changestate.md)*

* **status**: *[ChangeState](enums/changestate.md)*

___

###  DataSource

Ƭ **DataSource**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts:26](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts#L26)*

#### Type declaration:

* **slug**: *string*

___

###  FinalUI

Ƭ **FinalUI**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/Page.tsx:35](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/Page.tsx#L35)*

#### Type declaration:

* **ContextWrapper**: *ComponentType‹ContextWrapperProps›*

* **PageEditor**: *ComponentType*

___

###  GatsbyData

Ƭ **GatsbyData**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts:37](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts#L37)*

#### Type declaration:

* \[ **collection**: *string*\]: object

* **edges**: *[GatsbyNode](globals.md#gatsbynode)[]*

___

###  GatsbyNode

Ƭ **GatsbyNode**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts:30](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts#L30)*

#### Type declaration:

* **node**(): *object*

  * **content**: *string*

  * **name**: *string*

___

###  GatsbyPage

Ƭ **GatsbyPage**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyPageProvider.tsx:17](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyPageProvider.tsx#L17)*

#### Type declaration:

* **slug**: *string*

* **subPageTemplate**: *string*

* **template**: *string*

___

###  GitBranchType

Ƭ **GitBranchType**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx:22](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx#L22)*

#### Type declaration:

* **branch**: *string | null*

* **commits**: *string[]*

* **files**: *string[]*

___

###  GitClient

Ƭ **GitClient**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/types.ts:32](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/types.ts#L32)*

#### Type declaration:

* **commit**(): *function*

  * (`message`: string, `directories`: string[], `paths`: string[], `files`: string[], `author?`: undefined | string): *AxiosPromise‹any›*

* **getChanges**(): *function*

  * (): *AxiosPromise‹any›*

* **getConflicts**(): *function*

  * (): *AxiosPromise‹[ConflictsResponseType](globals.md#conflictsresponsetype)›*

* **getLatestCommits**(): *function*

  * (): *AxiosPromise‹any›*

* **pull**(): *function*

  * (): *AxiosPromise‹any›*

* **reset**(): *function*

  * (): *AxiosPromise‹any›*

___

###  LocateFilesProps

Ƭ **LocateFilesProps**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/type.ts:25](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/type.ts#L25)*

The LocateFilesProps describes a structure of the `locateFiles` props.

#### Type declaration:

* **filePattern**: *RegExp*

* **startingRoot**: *string*

___

###  PageData

Ƭ **PageData**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/PageVerification.ts:18](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/PageVerification.ts#L18)*

#### Type declaration:

* **pagePath**: *string*

* **retries**? : *undefined | number*

___

###  Props

Ƭ **Props**: *NodeProviderProps & PageProviderProps & object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyNodeProvider.tsx:24](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyNodeProvider.tsx#L24)*

*Defined in [packages/gatsby-theme-bodiless/src/dist/CommitsList.tsx:92](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/CommitsList.tsx#L92)*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx:48](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx#L48)*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyPageProvider.tsx:29](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyPageProvider.tsx#L29)*

*Defined in [packages/gatsby-theme-bodiless/src/dist/NewPageProvider.tsx:34](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/NewPageProvider.tsx#L34)*

*Defined in [packages/gatsby-theme-bodiless/src/dist/Page.tsx:41](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/Page.tsx#L41)*

___

###  PropsWithFormApi

Ƭ **PropsWithFormApi**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx:38](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx#L38)*

#### Type declaration:

* **formApi**: *any*

___

###  PropsWithGitClient

Ƭ **PropsWithGitClient**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx:34](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx#L34)*

#### Type declaration:

* **client**: *any*

___

###  PropsWithNotify

Ƭ **PropsWithNotify**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx:42](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx#L42)*

#### Type declaration:

* **notifyOfChanges**: *[ChangeNotifier](globals.md#changenotifier)*

___

###  PullStatus

Ƭ **PullStatus**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx:228](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx#L228)*

#### Type declaration:

* **complete**: *boolean*

* **error**? : *undefined | string*

___

###  ResponseData

Ƭ **ResponseData**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/CommitsList.tsx:26](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/CommitsList.tsx#L26)*

*Defined in [packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx:28](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx#L28)*

#### Type declaration:

* **local**: *[GitBranchType](globals.md#gitbranchtype)*

* **production**: *[GitBranchType](globals.md#gitbranchtype)*

* **upstream**: *[GitBranchType](globals.md#gitbranchtype)*

___

###  State

Ƭ **State**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyNodeProvider.tsx:20](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyNodeProvider.tsx#L20)*

#### Type declaration:

* **store**: *[GatsbyMobxStore](classes/gatsbymobxstore.md)*

___

###  Tree

Ƭ **Tree**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/type.ts:18](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/type.ts#L18)*

The Tree describes a structure of env config files.

#### Type declaration:

* \[ **key**: *string*\]: [Tree](globals.md#tree) | string

___

###  UI

Ƭ **UI**: *Partial‹[FinalUI](globals.md#finalui)›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/Page.tsx:39](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/Page.tsx#L39)*

## Variables

### `Const` DEFAULT_REQUEST_DELAY

• **DEFAULT_REQUEST_DELAY**: *500* = 500

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:30](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L30)*

___

### `Const` DefaultActiveMenuOptions

• **DefaultActiveMenuOptions**: *FunctionComponent‹any›* = observer(({ children }: any) => {
  const context = useEditContext();
  useEffect(() => {
    context.activate();
  });
  return <>{children}</>;
})

*Defined in [packages/gatsby-theme-bodiless/src/dist/Page.tsx:89](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/Page.tsx#L89)*

General component that define default active menu.

___

### `Const` GatsbyPageContext

• **GatsbyPageContext**: *Context‹object›* = React.createContext<GatsbyPage>(defaultGatsbyPage)

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyPageProvider.tsx:33](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyPageProvider.tsx#L33)*

___

### `Const` MAXIMUM_REQUEST_DELAY

• **MAXIMUM_REQUEST_DELAY**: *number* = 5 * 60 * 1000

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:31](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L31)*

___

### `Const` NewPageProvider

• **NewPageProvider**: *ComponentClass‹object, any› | FunctionComponent‹object›* = withMenuOptions(menuOptions)(React.Fragment) as ComponentType<Props>

*Defined in [packages/gatsby-theme-bodiless/src/dist/NewPageProvider.tsx:128](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/NewPageProvider.tsx#L128)*

___

### `Const` Page

• **Page**: *FC‹[Props](globals.md#props)›* = observer(({ children, ui, ...rest }) => {
  const { PageEditor: Editor, ContextWrapper: Wrapper } = getUI(ui);
  if (process.env.NODE_ENV === 'development') {
    return (
      <GatsbyNodeProvider {...rest}>
        <GatsbyPageProvider pageContext={rest.pageContext}>
          <SwitcherButtonProvider>
            <NotificationProvider>
              <NotificationButtonProvider>
                <Editor>
                  <NewPageProvider>
                    <GitProvider>
                      <Wrapper clickable>
                        <DefaultActiveMenuOptions>
                          {children}
                        </DefaultActiveMenuOptions>
                      </Wrapper>
                    </GitProvider>
                  </NewPageProvider>
                </Editor>
              </NotificationButtonProvider>
            </NotificationProvider>
          </SwitcherButtonProvider>
        </GatsbyPageProvider>
      </GatsbyNodeProvider>
    );
  }
  return (
    <GatsbyNodeProvider {...rest}>
      <StaticPage>{children}</StaticPage>
    </GatsbyNodeProvider>
  );
})

*Defined in [packages/gatsby-theme-bodiless/src/dist/Page.tsx:52](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/Page.tsx#L52)*

___

### `Const` author

• **author**: *any* = cookies.get('author')

*Defined in [packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx:95](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx#L95)*

___

### `Const` backendFilePath

• **backendFilePath**: *string* = process.env.BODILESS_BACKEND_DATA_FILE_PATH || ''

*Defined in [packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx:34](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx#L34)*

___

### `Const` backendPort

• **backendPort**: *string | 8001* = process.env.GATSBY_BODILESS_BACKEND_PORT || 8001

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:18](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L18)*

___

### `Const` backendStaticPath

• **backendStaticPath**: *string* = process.env.BODILESS_BACKEND_STATIC_PATH || ''

*Defined in [packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx:35](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx#L35)*

___

### `Const` canAlertOnLoad

• **canAlertOnLoad**: *string | 1* = process.env.BODILESS_ALERT_ON_PAGE_LOAD_ENABLED || 1

*Defined in [packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx:46](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx#L46)*

___

### `Const` canCommit

• **canCommit**: *boolean* = (process.env.BODILESS_BACKEND_COMMIT_ENABLED || '0') === '1'

*Defined in [packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx:45](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx#L45)*

DefinePlugin env var.

All env vars are stringified by the Webpack DefinePlugin.
https://webpack.js.org/plugins/define-plugin/#usageGatsby.

DefinePlugin is used by Gatsby to source env vars.
https://www.gatsbyjs.org/docs/environment-variables/#example.

___

### `Const` cookies

• **cookies**: *Cookies‹›* = new Cookies()

*Defined in [packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx:94](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx#L94)*

___

### `Const` defaultClient

• **defaultClient**: *[BackendClient](classes/backendclient.md)‹›* = new BackendClient()

*Defined in [packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx:182](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx#L182)*

*Defined in [packages/gatsby-theme-bodiless/src/dist/NewPageProvider.tsx:110](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/NewPageProvider.tsx#L110)*

___

### `Const` dotenv

• **dotenv**: *any* = require('dotenv')

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getSiteEnvConfig.ts:21](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getSiteEnvConfig.ts#L21)*

___

### `Const` nodeChildDelimiter

• **nodeChildDelimiter**: *"$"* = "$"

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts:47](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStore.ts#L47)*

___

### `Const` readFilePromise

• **readFilePromise**: *__promisify__* = promisify(readFile)

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getSiteEnvConfig.ts:23](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getSiteEnvConfig.ts#L23)*

___

### `Const` writeFilePromise

• **writeFilePromise**: *__promisify__* = promisify(writeFile)

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/utils.ts:23](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/utils.ts#L23)*

## Functions

### `Const` ChangeContent

▸ **ChangeContent**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx:106](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx#L106)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`errorMessage` | undefined &#124; string |
`masterStatus` | [ChangeState](enums/changestate.md) |
`status` | [ChangeState](enums/changestate.md) |

**Returns:** *Element‹›*

___

### `Const` CommitsList

▸ **CommitsList**(`__namedParameters`: object): *any*

*Defined in [packages/gatsby-theme-bodiless/src/dist/CommitsList.tsx:102](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/CommitsList.tsx#L102)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`client` | any |

**Returns:** *any*

___

### `Const` FetchChanges

▸ **FetchChanges**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx:166](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx#L166)*

Component for fetching & showing remote changes.

**`component`** 

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`client` | any |
`formApi` | any |
`notifyOfChanges` | function |

**Returns:** *Element‹›*

___

### `Const` GatsbyPageProvider

▸ **GatsbyPageProvider**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyPageProvider.tsx:35](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyPageProvider.tsx#L35)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |
`pageContext` | object |

**Returns:** *Element‹›*

___

### `Const` GitProvider

▸ **GitProvider**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx:222](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx#L222)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› | - |
`client` | [BackendClient](classes/backendclient.md)‹› &#124; object | defaultClient |

**Returns:** *Element‹›*

___

### `Const` PullChanges

▸ **PullChanges**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx:241](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx#L241)*

Component for pulling remote changes.

**`component`** 

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`client` | any |
`formApi` | any |
`notifyOfChanges` | function |

**Returns:** *Element‹›*

___

### `Const` RemoteChanges

▸ **RemoteChanges**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx:53](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx#L53)*

Component for showing and pulling remote changes.

**`component`** 

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`client` | any |
`notifyOfChanges` | function |

**Returns:** *Element‹›*

___

### `Const` WrappedSpinner

▸ **WrappedSpinner**(): *Element‹›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/CommitsList.tsx:96](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/CommitsList.tsx#L96)*

**Returns:** *Element‹›*

___

### `Const` addPageLeaver

▸ **addPageLeaver**(`getPendingRequests`: function): *void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/addPageLeaver.ts:15](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/addPageLeaver.ts#L15)*

Copyright © 2020 Johnson & Johnson

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

**Parameters:**

▪ **getPendingRequests**: *function*

▸ (): *any[]*

**Returns:** *void*

___

### `Const` configureEnvFileFor

▸ **configureEnvFileFor**(`appEnv`: string): *Promise‹void›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/index.ts:22](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/index.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`appEnv` | string |

**Returns:** *Promise‹void›*

___

### `Const` createPageDataUrl

▸ **createPageDataUrl**(`path`: string): *string*

*Defined in [packages/gatsby-theme-bodiless/src/dist/PageVerification.ts:29](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/PageVerification.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *string*

___

### `Const` doFetch

▸ **doFetch**(`url`: string): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/PageVerification.ts:34](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/PageVerification.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *Promise‹AxiosResponse‹any››*

___

### `Const` envToJson

▸ **envToJson**(`filePath`: string): *Promise‹[Tree](globals.md#tree)›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getSiteEnvConfig.ts:25](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getSiteEnvConfig.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`filePath` | string |

**Returns:** *Promise‹[Tree](globals.md#tree)›*

___

### `Const` findGitFolder

▸ **findGitFolder**(): *Promise‹string›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/utils.ts:41](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/utils.ts#L41)*

**Returns:** *Promise‹string›*

___

### `Const` formGetCommitsList

▸ **formGetCommitsList**(`client`: [GitClient](globals.md#gitclient)): *function*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx:78](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [GitClient](globals.md#gitclient) |

**Returns:** *function*

▸ (`props`: Pick‹[Props](globals.md#props)‹D›, "onClose" | "aria-label" | "closeForm" | "ui" | "submitValues" | "initialValues" | "hasSubmit"›): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | Pick‹[Props](globals.md#props)‹D›, "onClose" &#124; "aria-label" &#124; "closeForm" &#124; "ui" &#124; "submitValues" &#124; "initialValues" &#124; "hasSubmit"› |

___

### `Const` formGitCommit

▸ **formGitCommit**(`client`: [GitClient](globals.md#gitclient)): *function*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx:96](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [GitClient](globals.md#gitclient) |

**Returns:** *function*

▸ (`props`: Pick‹[Props](globals.md#props)‹D›, "onClose" | "aria-label" | "closeForm" | "ui" | "submitValues" | "initialValues" | "hasSubmit"›): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | Pick‹[Props](globals.md#props)‹D›, "onClose" &#124; "aria-label" &#124; "closeForm" &#124; "ui" &#124; "submitValues" &#124; "initialValues" &#124; "hasSubmit"› |

___

### `Const` formGitPull

▸ **formGitPull**(`client`: [GitClient](globals.md#gitclient), `notifyOfChanges`: [ChangeNotifier](globals.md#changenotifier)): *function*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx:123](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx#L123)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [GitClient](globals.md#gitclient) |
`notifyOfChanges` | [ChangeNotifier](globals.md#changenotifier) |

**Returns:** *function*

▸ (`props`: Pick‹[Props](globals.md#props)‹D›, "onClose" | "aria-label" | "closeForm" | "ui" | "submitValues" | "initialValues" | "hasSubmit"›): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | Pick‹[Props](globals.md#props)‹D›, "onClose" &#124; "aria-label" &#124; "closeForm" &#124; "ui" &#124; "submitValues" &#124; "initialValues" &#124; "hasSubmit"› |

___

### `Const` formGitReset

▸ **formGitReset**(`client`: [GitClient](globals.md#gitclient), `context`: any): *function*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx:146](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx#L146)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [GitClient](globals.md#gitclient) |
`context` | any |

**Returns:** *function*

▸ (`props`: Pick‹[Props](globals.md#props)‹D›, "onClose" | "aria-label" | "closeForm" | "ui" | "submitValues" | "initialValues" | "hasSubmit"›): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | Pick‹[Props](globals.md#props)‹D›, "onClose" &#124; "aria-label" &#124; "closeForm" &#124; "ui" &#124; "submitValues" &#124; "initialValues" &#124; "hasSubmit"› |

___

### `Const` formPageAdd

▸ **formPageAdd**(`client`: [Client](globals.md#client), `template`: string, `context`: any): *function*

*Defined in [packages/gatsby-theme-bodiless/src/dist/NewPageProvider.tsx:38](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/NewPageProvider.tsx#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](globals.md#client) |
`template` | string |
`context` | any |

**Returns:** *function*

▸ (`props`: Pick‹[Props](globals.md#props)‹D›, "onClose" | "aria-label" | "closeForm" | "ui" | "submitValues" | "initialValues" | "hasSubmit"›): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | Pick‹[Props](globals.md#props)‹D›, "onClose" &#124; "aria-label" &#124; "closeForm" &#124; "ui" &#124; "submitValues" &#124; "initialValues" &#124; "hasSubmit"› |

___

### `Const` getCurrentGitBranch

▸ **getCurrentGitBranch**(): *Promise‹string›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/utils.ts:53](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/utils.ts#L53)*

**Returns:** *Promise‹string›*

___

### `Const` getDefaults

▸ **getDefaults**(`appEnv`: string): *Promise‹[Tree](globals.md#tree)›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts:41](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts#L41)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`appEnv` | string | "production" |

**Returns:** *Promise‹[Tree](globals.md#tree)›*

___

### `Const` getGitRepository

▸ **getGitRepository**(`repositoryPath`: string): *Promise‹Repository›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/utils.ts:43](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/utils.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`repositoryPath` | string |

**Returns:** *Promise‹Repository›*

___

### `Const` getMenuOptions

▸ **getMenuOptions**(`client`: [GitClient](globals.md#gitclient), `context`: any, `notifyOfChanges`: [ChangeNotifier](globals.md#changenotifier)): *TMenuOption[]*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx:184](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx#L184)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`client` | [GitClient](globals.md#gitclient) | defaultClient |
`context` | any | - |
`notifyOfChanges` | [ChangeNotifier](globals.md#changenotifier) | - |

**Returns:** *TMenuOption[]*

___

### `Const` getPackagesEnvConfig

▸ **getPackagesEnvConfig**(`defaultConfig`: [Tree](globals.md#tree), `appEnv`: string): *Promise‹[Tree](globals.md#tree)›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getPackagesEnvConfig.ts:22](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getPackagesEnvConfig.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`defaultConfig` | [Tree](globals.md#tree) |
`appEnv` | string |

**Returns:** *Promise‹[Tree](globals.md#tree)›*

___

### `Const` getSiteEnvConfig

▸ **getSiteEnvConfig**(`appEnv`: string): *Promise‹[Tree](globals.md#tree)›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getSiteEnvConfig.ts:27](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getSiteEnvConfig.ts#L27)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`appEnv` | string | "production" |

**Returns:** *Promise‹[Tree](globals.md#tree)›*

___

### `Const` getUI

▸ **getUI**(`ui`: [UI](globals.md#ui)): *[FinalUI](globals.md#finalui)*

*Defined in [packages/gatsby-theme-bodiless/src/dist/Page.tsx:50](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/Page.tsx#L50)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`ui` | [UI](globals.md#ui) | {} |

**Returns:** *[FinalUI](globals.md#finalui)*

___

### `Const` handle

▸ **handle**(`promise`: AxiosPromise‹any›, `callback?`: undefined | function): *Promise‹void›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx:52](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GitProvider.tsx#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`promise` | AxiosPromise‹any› |
`callback?` | undefined &#124; function |

**Returns:** *Promise‹void›*

▸ **handle**(`promise`: AxiosPromise‹any›): *Promise‹object | object›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/ResponseHandler.ts:24](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/ResponseHandler.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`promise` | AxiosPromise‹any› |

**Returns:** *Promise‹object | object›*

___

### `Const` handleBranchResponse

▸ **handleBranchResponse**(`branch`: [GitBranchType](globals.md#gitbranchtype)): *[CanBePulled](enums/changestate.md#canbepulled) | [CanNotBePulled](enums/changestate.md#cannotbepulled) | [NoneAvailable](enums/changestate.md#noneavailable)*

*Defined in [packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx:82](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`branch` | [GitBranchType](globals.md#gitbranchtype) |

**Returns:** *[CanBePulled](enums/changestate.md#canbepulled) | [CanNotBePulled](enums/changestate.md#cannotbepulled) | [NoneAvailable](enums/changestate.md#noneavailable)*

___

### `Const` handleChangesResponse

▸ **handleChangesResponse**(`__namedParameters`: object): *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx:93](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/RemoteChanges.tsx#L93)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`production` | object |
`upstream` | object |

**Returns:** *object*

* **productionStatus**: *[ChangeState](enums/changestate.md)*

* **upstreamStatus**: *[ChangeState](enums/changestate.md)*

___

### `Const` handleDetachedState

▸ **handleDetachedState**(`repo`: Repository): *Repository*

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/utils.ts:45](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/utils.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`repo` | Repository |

**Returns:** *Repository*

___

### `Const` handleResponse

▸ **handleResponse**(`responseData`: [ResponseData](globals.md#responsedata)): *string | Element‹›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/CommitsList.tsx:70](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/CommitsList.tsx#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`responseData` | [ResponseData](globals.md#responsedata) |

**Returns:** *string | Element‹›*

___

### `Const` init

▸ **init**(): *Promise‹void›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/index.ts:31](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/index.ts#L31)*

**Returns:** *Promise‹void›*

___

### `Const` isChangeset

▸ **isChangeset**(`branchName`: string): *boolean*

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts:39](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`branchName` | string |

**Returns:** *boolean*

___

### `Const` isResponseSuccessful

▸ **isResponseSuccessful**(`res`: AxiosResponse‹any›): *boolean*

*Defined in [packages/gatsby-theme-bodiless/src/dist/ResponseHandler.ts:20](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/ResponseHandler.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`res` | AxiosResponse‹any› |

**Returns:** *boolean*

___

### `Const` jsonToEnv

▸ **jsonToEnv**(`envConfig`: [Tree](globals.md#tree), `appEnv`: string): *Promise‹void›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/utils.ts:33](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/utils.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`envConfig` | [Tree](globals.md#tree) |
`appEnv` | string |

**Returns:** *Promise‹void›*

___

### `Const` loadPageDataJson

▸ **loadPageDataJson**(`loadObj`: [PageData](globals.md#pagedata)): *Promise‹boolean›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/PageVerification.ts:36](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/PageVerification.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`loadObj` | [PageData](globals.md#pagedata) |

**Returns:** *Promise‹boolean›*

___

### `Const` locateFiles

▸ **locateFiles**‹**T**›(`props`: [LocateFilesProps](globals.md#locatefilesprops)‹T›): *Promise‹string[]›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/locateFiles.ts:25](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/locateFiles.ts#L25)*

locateFiles is a Promise, that walks a path finding files matching the filePattern,
then resolves with an array of file paths.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`props` | [LocateFilesProps](globals.md#locatefilesprops)‹T› |   |

**Returns:** *Promise‹string[]›*

___

### `Const` renderSelectableList

▸ **renderSelectableList**(`commits`: Array‹[Commit](globals.md#commit)›): *Element‹›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/CommitsList.tsx:31](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/CommitsList.tsx#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`commits` | Array‹[Commit](globals.md#commit)› |

**Returns:** *Element‹›*

___

### `Const` stripSurroundingSlashes

▸ **stripSurroundingSlashes**(`path`: string): *string*

*Defined in [packages/gatsby-theme-bodiless/src/dist/PageVerification.ts:23](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/PageVerification.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *string*

___

### `Const` useGatsbyPageContext

▸ **useGatsbyPageContext**(): *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyPageProvider.tsx:41](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyPageProvider.tsx#L41)*

**Returns:** *object*

* **slug**: *string*

* **subPageTemplate**: *string*

* **template**: *string*

___

### `Const` useGetMenuOptions

▸ **useGetMenuOptions**(): *function*

*Defined in [packages/gatsby-theme-bodiless/src/dist/NewPageProvider.tsx:112](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/NewPageProvider.tsx#L112)*

**Returns:** *function*

▸ (): *TMenuOption[]*

___

### `Const` validNodeEnv

▸ **validNodeEnv**(`val`: string): *boolean*

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts:37](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`val` | string |

**Returns:** *boolean*

___

### `Const` verifyPage

▸ **verifyPage**(`pagePath`: string): *Promise‹boolean›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/PageVerification.ts:65](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/PageVerification.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`pagePath` | string |

**Returns:** *Promise‹boolean›*

___

### `Const` writeToFile

▸ **writeToFile**(`filePath`: string, `content`: string): *Promise‹void›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/utils.ts:25](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/utils.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`filePath` | string |
`content` | string |

**Returns:** *Promise‹void›*

## Object literals

### `Const` defaultEnvConfig

### ▪ **defaultEnvConfig**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts:31](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts#L31)*

▪ **changeset**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts:33](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts#L33)*

* **BODILESS_BACKEND_COMMIT_ENABLED**: *string* = "1"

▪ **default**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts:34](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts#L34)*

▪ **production**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts:32](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts#L32)*

* **BODILESS_BACKEND_SAVE_ENABLED**: *string* = "0"

___

### `Const` defaultEnvValues

### ▪ **defaultEnvValues**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts:19](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts#L19)*

###  APP_GIT_PATH

• **APP_GIT_PATH**: *string* = "."

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts:27](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts#L27)*

###  BODILESS_ALERT_ON_PAGE_LOAD_ENABLED

• **BODILESS_ALERT_ON_PAGE_LOAD_ENABLED**: *string* = "0"

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts:25](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts#L25)*

###  BODILESS_BACKEND_COMMIT_ENABLED

• **BODILESS_BACKEND_COMMIT_ENABLED**: *string* = "0"

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts:23](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts#L23)*

###  BODILESS_BACKEND_DATA_FILE_PATH

• **BODILESS_BACKEND_DATA_FILE_PATH**: *string* = "src/data"

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts:21](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts#L21)*

###  BODILESS_BACKEND_PORT

• **BODILESS_BACKEND_PORT**: *string* = "8006"

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts:26](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts#L26)*

###  BODILESS_BACKEND_SAVE_ENABLED

• **BODILESS_BACKEND_SAVE_ENABLED**: *string* = "1"

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts:24](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts#L24)*

###  BODILESS_BACKEND_STATIC_PATH

• **BODILESS_BACKEND_STATIC_PATH**: *string* = "static"

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts:22](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts#L22)*

###  BODILESS_DOCS_URL

• **BODILESS_DOCS_URL**: *string* = "/___docs"

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts:28](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts#L28)*

###  BODILESS_TAILWIND_THEME_ENABLED

• **BODILESS_TAILWIND_THEME_ENABLED**: *string* = "1"

*Defined in [packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts:20](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/generate-env-vars/getDefaults.ts#L20)*

___

### `Const` defaultGatsbyPage

### ▪ **defaultGatsbyPage**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyPageProvider.tsx:23](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyPageProvider.tsx#L23)*

###  slug

• **slug**: *string* = "/"

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyPageProvider.tsx:24](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyPageProvider.tsx#L24)*

###  subPageTemplate

• **subPageTemplate**: *string* = "_default"

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyPageProvider.tsx:25](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyPageProvider.tsx#L25)*

###  template

• **template**: *string* = "_default"

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyPageProvider.tsx:26](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyPageProvider.tsx#L26)*

___

### `Const` defaultUI

### ▪ **defaultUI**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/Page.tsx:45](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/Page.tsx#L45)*

###  ContextWrapper

• **ContextWrapper**: *FunctionComponent‹object & HTMLProps‹HTMLDivElement››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/Page.tsx:46](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/Page.tsx#L46)*

###  PageEditor

• **PageEditor**: *FunctionComponent‹object›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/Page.tsx:47](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/Page.tsx#L47)*

___

### `Const` menuOptions

### ▪ **menuOptions**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/NewPageProvider.tsx:127](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/NewPageProvider.tsx#L127)*

###  name

• **name**: *string* = "Gatsby"

*Defined in [packages/gatsby-theme-bodiless/src/dist/NewPageProvider.tsx:127](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/NewPageProvider.tsx#L127)*

###  useGetMenuOptions

• **useGetMenuOptions**: *[useGetMenuOptions](globals.md#const-usegetmenuoptions)*

*Defined in [packages/gatsby-theme-bodiless/src/dist/NewPageProvider.tsx:127](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/NewPageProvider.tsx#L127)*
