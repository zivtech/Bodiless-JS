[@bodiless/search](README.md) › [Globals](globals.md)

# @bodiless/search

## Index

### Classes

* [LunrSearch](classes/lunrsearch.md)
* [SearchClient](classes/searchclient.md)
* [SearchTool](classes/searchtool.md)

### Interfaces

* [SearchClientInterface](interfaces/searchclientinterface.md)
* [SearchEngineInterface](interfaces/searchengineinterface.md)

### Type aliases

* [SearchComponents](globals.md#searchcomponents)
* [SearchIndex](globals.md#searchindex)
* [SearchProps](globals.md#searchprops)
* [SearchResultComponents](globals.md#searchresultcomponents)
* [SearchResultItemComponents](globals.md#searchresultitemcomponents)
* [SearchResultItemProps](globals.md#searchresultitemprops)
* [SearchResultProps](globals.md#searchresultprops)
* [TDocument](globals.md#tdocument)
* [TField](globals.md#tfield)
* [TIndexConfig](globals.md#tindexconfig)
* [TPreview](globals.md#tpreview)
* [TSearchConf](globals.md#tsearchconf)
* [TSearchIndexSettings](globals.md#tsearchindexsettings)
* [TSearchResult](globals.md#tsearchresult)
* [TSearchResultContextValue](globals.md#tsearchresultcontextvalue)
* [TSearchResults](globals.md#tsearchresults)

### Variables

* [SearchBox](globals.md#const-searchbox)
* [SearchResult](globals.md#const-searchresult)
* [SearchResultItemClean](globals.md#const-searchresultitemclean)
* [config](globals.md#const-config)
* [defaultResultCountMessage](globals.md#const-defaultresultcountmessage)
* [defaultResultEmptyMessage](globals.md#const-defaultresultemptymessage)
* [searchClient](globals.md#const-searchclient)
* [searchResultContext](globals.md#const-searchresultcontext)
* [tool](globals.md#const-tool)

### Functions

* [SearchBoxBase](globals.md#const-searchboxbase)
* [SearchButtonBase](globals.md#const-searchbuttonbase)
* [SearchInputBase](globals.md#const-searchinputbase)
* [SearchResultBase](globals.md#const-searchresultbase)
* [SearchResultItemBase](globals.md#const-searchresultitembase)
* [SearchResultProvider](globals.md#const-searchresultprovider)
* [useSearchResultContext](globals.md#const-usesearchresultcontext)
* [withSearchResult](globals.md#const-withsearchresult)

### Object literals

* [defaultSearchResults](globals.md#const-defaultsearchresults)
* [searchComponents](globals.md#const-searchcomponents)
* [searchResultComponents](globals.md#const-searchresultcomponents)
* [searchResultItemComponents](globals.md#const-searchresultitemcomponents)
* [settings](globals.md#const-settings)

## Type aliases

###  SearchComponents

Ƭ **SearchComponents**: *object*

*Defined in [packages/bodiless-search/src/components/Search.tsx:40](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L40)*

#### Type declaration:

* **SearchButton**: *ComponentType‹any›*

* **SearchInput**: *ComponentType‹any›*

* **SearchWrapper**: *ComponentType‹StylableProps›*

___

###  SearchIndex

Ƭ **SearchIndex**: *object*

*Defined in [packages/bodiless-search/src/SearchClient.ts:25](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/SearchClient.ts#L25)*

#### Type declaration:

* **expires**: *number*

* **idx**: *object*

* **preview**(): *object*

___

###  SearchProps

Ƭ **SearchProps**: *DesignableComponentsProps‹[SearchComponents](globals.md#searchcomponents)› & HTMLProps‹HTMLElement›*

*Defined in [packages/bodiless-search/src/components/Search.tsx:118](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L118)*

___

###  SearchResultComponents

Ƭ **SearchResultComponents**: *object*

*Defined in [packages/bodiless-search/src/components/Search.tsx:46](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L46)*

#### Type declaration:

* **SearchResultList**: *ComponentType‹any›*

* **SearchResultListItem**: *ComponentType‹any›*

* **SearchResultSummary**: *ComponentType‹StylableProps›*

* **SearchResultWrapper**: *ComponentType‹StylableProps›*

___

###  SearchResultItemComponents

Ƭ **SearchResultItemComponents**: *object*

*Defined in [packages/bodiless-search/src/components/Search.tsx:53](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L53)*

#### Type declaration:

* **ItemAnchor**: *ComponentType‹HTMLProps‹HTMLAnchorElement› & StylableProps›*

* **ItemH3**: *ComponentType‹StylableProps›*

* **ItemList**: *ComponentType‹StylableProps›*

* **ItemParagraph**: *ComponentType‹StylableProps›*

___

###  SearchResultItemProps

Ƭ **SearchResultItemProps**: *DesignableComponentsProps‹[SearchResultItemComponents](globals.md#searchresultitemcomponents)› & object*

*Defined in [packages/bodiless-search/src/components/Search.tsx:60](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L60)*

___

###  SearchResultProps

Ƭ **SearchResultProps**: *DesignableComponentsProps‹[SearchResultComponents](globals.md#searchresultcomponents)› & HTMLProps‹HTMLElement› & object*

*Defined in [packages/bodiless-search/src/components/Search.tsx:120](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L120)*

___

###  TDocument

Ƭ **TDocument**: *object*

*Defined in [packages/bodiless-search/src/types.ts:34](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/types.ts#L34)*

#### Type declaration:

* \[ **key**: *string*\]: string

___

###  TField

Ƭ **TField**: *object*

*Defined in [packages/bodiless-search/src/types.ts:42](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/types.ts#L42)*

#### Type declaration:

* **attributes**? : *undefined | object*

* **name**: *string*

___

###  TIndexConfig

Ƭ **TIndexConfig**: *object*

*Defined in [packages/bodiless-search/src/types.ts:50](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/types.ts#L50)*

#### Type declaration:

* **fields**: *[TField](globals.md#tfield)[]*

* **ref**: *string*

___

###  TPreview

Ƭ **TPreview**: *object*

*Defined in [packages/bodiless-search/src/types.ts:36](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/types.ts#L36)*

#### Type declaration:

* \[ **key**: *string*\]: string

___

###  TSearchConf

Ƭ **TSearchConf**: *object*

*Defined in [packages/bodiless-search/src/types.ts:38](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/types.ts#L38)*

#### Type declaration:

* **searchEngine**? : *[SearchEngineInterface](interfaces/searchengineinterface.md)*

___

###  TSearchIndexSettings

Ƭ **TSearchIndexSettings**: *object*

*Defined in [packages/bodiless-search/src/types.ts:55](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/types.ts#L55)*

#### Type declaration:

* **indexConfig**: *[TIndexConfig](globals.md#tindexconfig)*

* **sourcePath**: *string*

* **sourceTypes**: *string[]*

* **targetPath**: *string*

___

###  TSearchResult

Ƭ **TSearchResult**: *object*

*Defined in [packages/bodiless-search/src/types.ts:62](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/types.ts#L62)*

#### Type declaration:

* **id**: *number*

* **link**: *string*

* **preview**: *string*

* **ref**: *string*

* **title**: *string*

___

###  TSearchResultContextValue

Ƭ **TSearchResultContextValue**: *object*

*Defined in [packages/bodiless-search/src/components/SearchContextProvider.tsx:22](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/SearchContextProvider.tsx#L22)*

#### Type declaration:

* **results**: *[TSearchResults](globals.md#tsearchresults)*

* **searchTerm**: *string*

* **setResult**: *React.Dispatch‹React.SetStateAction‹[TSearchResults](globals.md#tsearchresults)››*

* **setSearchTerm**: *React.Dispatch‹React.SetStateAction‹string››*

___

###  TSearchResults

Ƭ **TSearchResults**: *[TSearchResult](globals.md#tsearchresult)[]*

*Defined in [packages/bodiless-search/src/types.ts:70](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/types.ts#L70)*

## Variables

### `Const` SearchBox

• **SearchBox**: *FunctionComponent‹object & HTMLProps‹HTMLElement›› | ComponentClass‹object & HTMLProps‹HTMLElement›, any›* = designable(
  searchComponents, 'SearchBox',
)(SearchBoxBase) as ComponentType<SearchProps>

*Defined in [packages/bodiless-search/src/components/Search.tsx:218](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L218)*

___

### `Const` SearchResult

• **SearchResult**: *FunctionComponent‹object & HTMLProps‹HTMLElement› & object› | ComponentClass‹object & HTMLProps‹HTMLElement› & object, any›* = designable(
  searchResultComponents, 'SearchResult',
)(SearchResultBase) as ComponentType<SearchResultProps>

*Defined in [packages/bodiless-search/src/components/Search.tsx:221](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L221)*

___

### `Const` SearchResultItemClean

• **SearchResultItemClean**: *any* = flow(
  designable(searchResultItemComponents, 'SearchResultItem'),
)(SearchResultItemBase)

*Defined in [packages/bodiless-search/src/components/Search.tsx:107](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L107)*

___

### `Const` config

• **config**: *[TSearchConf](globals.md#tsearchconf)*

*Defined in [packages/bodiless-search/src/scripts/bodiless-search-index.ts:24](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/scripts/bodiless-search-index.ts#L24)*

___

### `Const` defaultResultCountMessage

• **defaultResultCountMessage**: *"Showing %count% result(s)."* = "Showing %count% result(s)."

*Defined in [packages/bodiless-search/src/components/Search.tsx:123](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L123)*

___

### `Const` defaultResultEmptyMessage

• **defaultResultEmptyMessage**: *"No content matches your request, please enter new keywords."* = "No content matches your request, please enter new keywords."

*Defined in [packages/bodiless-search/src/components/Search.tsx:124](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L124)*

___

### `Const` searchClient

• **searchClient**: *[SearchClient](classes/searchclient.md)‹›* = new SearchClient()

*Defined in [packages/bodiless-search/src/components/SearchContextProvider.tsx:29](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/SearchContextProvider.tsx#L29)*

___

### `Const` searchResultContext

• **searchResultContext**: *Context‹object›* = React.createContext<TSearchResultContextValue>(defaultSearchResults)

*Defined in [packages/bodiless-search/src/components/SearchContextProvider.tsx:40](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/SearchContextProvider.tsx#L40)*

___

### `Const` tool

• **tool**: *[SearchTool](classes/searchtool.md)‹›* = new SearchTool(config)

*Defined in [packages/bodiless-search/src/scripts/bodiless-search-index.ts:26](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/scripts/bodiless-search-index.ts#L26)*

## Functions

### `Const` SearchBoxBase

▸ **SearchBoxBase**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-search/src/components/Search.tsx:159](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L159)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`components` | object |
`props` | props |

**Returns:** *Element‹›*

___

### `Const` SearchButtonBase

▸ **SearchButtonBase**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-search/src/components/Search.tsx:70](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L70)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`onClick` | undefined &#124; bivarianceHack |
`rest` | rest |

**Returns:** *Element‹›*

___

### `Const` SearchInputBase

▸ **SearchInputBase**(`props`: HTMLProps‹HTMLInputElement› & object): *Element‹›*

*Defined in [packages/bodiless-search/src/components/Search.tsx:63](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLInputElement› & object |

**Returns:** *Element‹›*

___

### `Const` SearchResultBase

▸ **SearchResultBase**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-search/src/components/Search.tsx:125](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L125)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`components` | object | - |
`resultCountMessage` | string | defaultResultCountMessage |
`resultEmptyMessage` | string | defaultResultEmptyMessage |

**Returns:** *Element‹›*

___

### `Const` SearchResultItemBase

▸ **SearchResultItemBase**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-search/src/components/Search.tsx:87](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L87)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`components` | object |
`props` | props |

**Returns:** *Element‹›*

___

### `Const` SearchResultProvider

▸ **SearchResultProvider**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-search/src/components/SearchContextProvider.tsx:42](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/SearchContextProvider.tsx#L42)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |

**Returns:** *Element‹›*

___

### `Const` useSearchResultContext

▸ **useSearchResultContext**(): *object*

*Defined in [packages/bodiless-search/src/components/SearchContextProvider.tsx:41](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/SearchContextProvider.tsx#L41)*

**Returns:** *object*

* **results**: *[TSearchResults](globals.md#tsearchresults)*

* **searchTerm**: *string*

* **setResult**: *React.Dispatch‹React.SetStateAction‹[TSearchResults](globals.md#tsearchresults)››*

* **setSearchTerm**: *React.Dispatch‹React.SetStateAction‹string››*

___

### `Const` withSearchResult

▸ **withSearchResult**‹**P**›(`Component`: ComponentType‹P›): *WithSearchResult*

*Defined in [packages/bodiless-search/src/components/SearchContextProvider.tsx:85](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/SearchContextProvider.tsx#L85)*

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentType‹P› |

**Returns:** *WithSearchResult*

## Object literals

### `Const` defaultSearchResults

### ▪ **defaultSearchResults**: *object*

*Defined in [packages/bodiless-search/src/components/SearchContextProvider.tsx:34](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/SearchContextProvider.tsx#L34)*

Search result context

###  results

• **results**: *never[]* = []

*Defined in [packages/bodiless-search/src/components/SearchContextProvider.tsx:35](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/SearchContextProvider.tsx#L35)*

###  searchTerm

• **searchTerm**: *string* = ""

*Defined in [packages/bodiless-search/src/components/SearchContextProvider.tsx:37](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/SearchContextProvider.tsx#L37)*

###  setResult

▸ **setResult**(): *void*

*Defined in [packages/bodiless-search/src/components/SearchContextProvider.tsx:36](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/SearchContextProvider.tsx#L36)*

**Returns:** *void*

###  setSearchTerm

▸ **setSearchTerm**(): *string*

*Defined in [packages/bodiless-search/src/components/SearchContextProvider.tsx:38](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/SearchContextProvider.tsx#L38)*

**Returns:** *string*

___

### `Const` searchComponents

### ▪ **searchComponents**: *object*

*Defined in [packages/bodiless-search/src/components/Search.tsx:74](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L74)*

###  SearchButton

• **SearchButton**: *FunctionComponent‹HTMLProps‹HTMLButtonElement››* = SearchButtonBase

*Defined in [packages/bodiless-search/src/components/Search.tsx:77](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L77)*

###  SearchInput

• **SearchInput**: *FunctionComponent‹HTMLProps‹HTMLInputElement››* = SearchInputBase

*Defined in [packages/bodiless-search/src/components/Search.tsx:76](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L76)*

###  SearchWrapper

• **SearchWrapper**: *object* = Div

*Defined in [packages/bodiless-search/src/components/Search.tsx:75](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L75)*

#### Type declaration:

▸ (`props`: HTMLProps‹HTMLDivElement› & object): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLDivElement› & object |

* **displayName**: *string*

___

### `Const` searchResultComponents

### ▪ **searchResultComponents**: *object*

*Defined in [packages/bodiless-search/src/components/Search.tsx:111](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L111)*

###  SearchResultList

• **SearchResultList**: *object* = Ul

*Defined in [packages/bodiless-search/src/components/Search.tsx:113](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L113)*

#### Type declaration:

▸ (`props`: HTMLProps‹HTMLUListElement› & object): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLUListElement› & object |

* **displayName**: *string*

###  SearchResultListItem

• **SearchResultListItem**: *any* = SearchResultItemClean

*Defined in [packages/bodiless-search/src/components/Search.tsx:114](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L114)*

###  SearchResultSummary

• **SearchResultSummary**: *object* = P

*Defined in [packages/bodiless-search/src/components/Search.tsx:115](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L115)*

#### Type declaration:

▸ (`props`: HTMLProps‹HTMLParagraphElement› & object): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLParagraphElement› & object |

* **displayName**: *string*

###  SearchResultWrapper

• **SearchResultWrapper**: *object* = Div

*Defined in [packages/bodiless-search/src/components/Search.tsx:112](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L112)*

#### Type declaration:

▸ (`props`: HTMLProps‹HTMLDivElement› & object): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLDivElement› & object |

* **displayName**: *string*

___

### `Const` searchResultItemComponents

### ▪ **searchResultItemComponents**: *object*

*Defined in [packages/bodiless-search/src/components/Search.tsx:80](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L80)*

###  ItemAnchor

• **ItemAnchor**: *object* = A

*Defined in [packages/bodiless-search/src/components/Search.tsx:83](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L83)*

#### Type declaration:

▸ (`props`: HTMLProps‹HTMLAnchorElement› & object): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLAnchorElement› & object |

* **displayName**: *string*

###  ItemH3

• **ItemH3**: *object* = H3

*Defined in [packages/bodiless-search/src/components/Search.tsx:82](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L82)*

#### Type declaration:

▸ (`props`: HTMLProps‹HTMLHeadingElement› & object): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLHeadingElement› & object |

* **displayName**: *string*

###  ItemList

• **ItemList**: *object* = Li

*Defined in [packages/bodiless-search/src/components/Search.tsx:81](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L81)*

#### Type declaration:

▸ (`props`: HTMLProps‹HTMLLIElement› & object): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLLIElement› & object |

* **displayName**: *string*

###  ItemParagraph

• **ItemParagraph**: *object* = P

*Defined in [packages/bodiless-search/src/components/Search.tsx:84](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/components/Search.tsx#L84)*

#### Type declaration:

▸ (`props`: HTMLProps‹HTMLParagraphElement› & object): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLParagraphElement› & object |

* **displayName**: *string*

___

### `Const` settings

### ▪ **settings**: *object*

*Defined in [packages/bodiless-search/src/scripts/bodiless-search-index.ts:36](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/scripts/bodiless-search-index.ts#L36)*

Search index creation configures

- sourcePath: Valid data source folder.
- sourceType: Specified data file extensions for indexing.
- targetPath: Target folder for saving generated index file.
- indexConfig: Document index configuration.

###  sourcePath

• **sourcePath**: *string* = process.env.BODILESS_SEARCH_SOURCE_PATH || './public'

*Defined in [packages/bodiless-search/src/scripts/bodiless-search-index.ts:37](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/scripts/bodiless-search-index.ts#L37)*

###  sourceTypes

• **sourceTypes**: *string[]* = process.env.BODILESS_SEARCH_SOURCE_TYPE ? process.env.BODILESS_SEARCH_SOURCE_TYPE.split('|') : ['html', 'htm']

*Defined in [packages/bodiless-search/src/scripts/bodiless-search-index.ts:38](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/scripts/bodiless-search-index.ts#L38)*

###  targetPath

• **targetPath**: *string* = process.env.BODILESS_SEARCH_INDEX_PATH ? process.env.BODILESS_SEARCH_INDEX_PATH : './public/default.idx'

*Defined in [packages/bodiless-search/src/scripts/bodiless-search-index.ts:39](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/scripts/bodiless-search-index.ts#L39)*

▪ **indexConfig**: *object*

*Defined in [packages/bodiless-search/src/scripts/bodiless-search-index.ts:40](https://github.com/johnsonandjohnson/Bodiless-JS/blob/9ef7d1a/packages/bodiless-search/src/scripts/bodiless-search-index.ts#L40)*

* **fields**: *(object | object)[]* = [
      { name: 'title', attributes: { boost: 2 } },
      { name: 'body' },
    ]

* **ref**: *string* = "id"
