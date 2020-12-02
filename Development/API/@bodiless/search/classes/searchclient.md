[@bodiless/search](../README.md) › [Globals](../globals.md) › [SearchClient](searchclient.md)

# Class: SearchClient

Search client wraps search engine for in-browser search features.

- Load index from json.
- Perform search query.

## Hierarchy

* **SearchClient**

## Implements

* [SearchClientInterface](../interfaces/searchclientinterface.md)

## Index

### Constructors

* [constructor](searchclient.md#constructor)

### Properties

* [searchEngine](searchclient.md#searchengine)

### Methods

* [filter](searchclient.md#private-filter)
* [getLocalIndex](searchclient.md#getlocalindex)
* [loadIndex](searchclient.md#loadindex)
* [loadPreviews](searchclient.md#loadpreviews)
* [search](searchclient.md#search)
* [setSearchEngine](searchclient.md#setsearchengine)
* [validateIndex](searchclient.md#validateindex)

## Constructors

###  constructor

\+ **new SearchClient**(`config?`: [TSearchConf](../globals.md#tsearchconf)): *[SearchClient](searchclient.md)*

*Defined in [packages/bodiless-search/src/SearchClient.ts:38](https://github.com/johnsonandjohnson/Bodiless-JS/blob/5bb6d65/packages/bodiless-search/src/SearchClient.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`config?` | [TSearchConf](../globals.md#tsearchconf) |

**Returns:** *[SearchClient](searchclient.md)*

## Properties

###  searchEngine

• **searchEngine**: *[SearchEngineInterface](../interfaces/searchengineinterface.md)*

*Defined in [packages/bodiless-search/src/SearchClient.ts:38](https://github.com/johnsonandjohnson/Bodiless-JS/blob/5bb6d65/packages/bodiless-search/src/SearchClient.ts#L38)*

## Methods

### `Private` filter

▸ **filter**(`qs`: string): *string*

*Defined in [packages/bodiless-search/src/SearchClient.ts:50](https://github.com/johnsonandjohnson/Bodiless-JS/blob/5bb6d65/packages/bodiless-search/src/SearchClient.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`qs` | string |

**Returns:** *string*

___

###  getLocalIndex

▸ **getLocalIndex**(): *[SearchIndex](../globals.md#searchindex) | false*

*Defined in [packages/bodiless-search/src/SearchClient.ts:62](https://github.com/johnsonandjohnson/Bodiless-JS/blob/5bb6d65/packages/bodiless-search/src/SearchClient.ts#L62)*

**Returns:** *[SearchIndex](../globals.md#searchindex) | false*

___

###  loadIndex

▸ **loadIndex**(): *Promise‹void›*

*Defined in [packages/bodiless-search/src/SearchClient.ts:71](https://github.com/johnsonandjohnson/Bodiless-JS/blob/5bb6d65/packages/bodiless-search/src/SearchClient.ts#L71)*

**Returns:** *Promise‹void›*

___

###  loadPreviews

▸ **loadPreviews**(`previews`: object): *void*

*Defined in [packages/bodiless-search/src/SearchClient.ts:88](https://github.com/johnsonandjohnson/Bodiless-JS/blob/5bb6d65/packages/bodiless-search/src/SearchClient.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`previews` | object |

**Returns:** *void*

___

###  search

▸ **search**(`queryString`: string): *[TSearchResults](../globals.md#tsearchresults)*

*Defined in [packages/bodiless-search/src/SearchClient.ts:44](https://github.com/johnsonandjohnson/Bodiless-JS/blob/5bb6d65/packages/bodiless-search/src/SearchClient.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`queryString` | string |

**Returns:** *[TSearchResults](../globals.md#tsearchresults)*

___

###  setSearchEngine

▸ **setSearchEngine**(`searchEngine`: [SearchEngineInterface](../interfaces/searchengineinterface.md)): *void*

*Defined in [packages/bodiless-search/src/SearchClient.ts:92](https://github.com/johnsonandjohnson/Bodiless-JS/blob/5bb6d65/packages/bodiless-search/src/SearchClient.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`searchEngine` | [SearchEngineInterface](../interfaces/searchengineinterface.md) |

**Returns:** *void*

___

###  validateIndex

▸ **validateIndex**(`index`: [SearchIndex](../globals.md#searchindex) | false): *boolean*

*Defined in [packages/bodiless-search/src/SearchClient.ts:52](https://github.com/johnsonandjohnson/Bodiless-JS/blob/5bb6d65/packages/bodiless-search/src/SearchClient.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | [SearchIndex](../globals.md#searchindex) &#124; false |

**Returns:** *boolean*
