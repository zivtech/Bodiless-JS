[@bodiless/search](../README.md) › [Globals](../globals.md) › [SearchEngineInterface](searchengineinterface.md)

# Interface: SearchEngineInterface

## Hierarchy

* **SearchEngineInterface**

## Implemented by

* [LunrSearch](../classes/lunrsearch.md)

## Index

### Properties

* [addDocuments](searchengineinterface.md#adddocuments)
* [createIndex](searchengineinterface.md#createindex)
* [exportIndex](searchengineinterface.md#exportindex)
* [getEngineName](searchengineinterface.md#getenginename)
* [getIndexConfig](searchengineinterface.md#getindexconfig)
* [loadIndex](searchengineinterface.md#loadindex)
* [loadPreviews](searchengineinterface.md#loadpreviews)
* [search](searchengineinterface.md#search)
* [setIndexConfig](searchengineinterface.md#setindexconfig)

## Properties

###  addDocuments

• **addDocuments**: *function*

*Defined in [packages/bodiless-search/src/types.ts:28](https://github.com/johnsonandjohnson/Bodiless-JS/blob/f5e19a1/packages/bodiless-search/src/types.ts#L28)*

#### Type declaration:

▸ (`doc`: [TDocument](../globals.md#tdocument) | [TDocument](../globals.md#tdocument)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`doc` | [TDocument](../globals.md#tdocument) &#124; [TDocument](../globals.md#tdocument)[] |

___

###  createIndex

• **createIndex**: *function*

*Defined in [packages/bodiless-search/src/types.ts:26](https://github.com/johnsonandjohnson/Bodiless-JS/blob/f5e19a1/packages/bodiless-search/src/types.ts#L26)*

#### Type declaration:

▸ (): *Index*

___

###  exportIndex

• **exportIndex**: *function*

*Defined in [packages/bodiless-search/src/types.ts:27](https://github.com/johnsonandjohnson/Bodiless-JS/blob/f5e19a1/packages/bodiless-search/src/types.ts#L27)*

#### Type declaration:

▸ (): *string*

___

###  getEngineName

• **getEngineName**: *function*

*Defined in [packages/bodiless-search/src/types.ts:23](https://github.com/johnsonandjohnson/Bodiless-JS/blob/f5e19a1/packages/bodiless-search/src/types.ts#L23)*

#### Type declaration:

▸ (): *string*

___

###  getIndexConfig

• **getIndexConfig**: *function*

*Defined in [packages/bodiless-search/src/types.ts:24](https://github.com/johnsonandjohnson/Bodiless-JS/blob/f5e19a1/packages/bodiless-search/src/types.ts#L24)*

#### Type declaration:

▸ (): *[TIndexConfig](../globals.md#tindexconfig) | null*

___

###  loadIndex

• **loadIndex**: *function*

*Defined in [packages/bodiless-search/src/types.ts:29](https://github.com/johnsonandjohnson/Bodiless-JS/blob/f5e19a1/packages/bodiless-search/src/types.ts#L29)*

#### Type declaration:

▸ (`index`: object): *void*

**Parameters:**

Name | Type |
------ | ------ |
`index` | object |

___

###  loadPreviews

• **loadPreviews**: *function*

*Defined in [packages/bodiless-search/src/types.ts:30](https://github.com/johnsonandjohnson/Bodiless-JS/blob/f5e19a1/packages/bodiless-search/src/types.ts#L30)*

#### Type declaration:

▸ (`previews`: object): *void*

**Parameters:**

Name | Type |
------ | ------ |
`previews` | object |

___

###  search

• **search**: *function*

*Defined in [packages/bodiless-search/src/types.ts:31](https://github.com/johnsonandjohnson/Bodiless-JS/blob/f5e19a1/packages/bodiless-search/src/types.ts#L31)*

#### Type declaration:

▸ (`queryString`: string): *[TSearchResults](../globals.md#tsearchresults)*

**Parameters:**

Name | Type |
------ | ------ |
`queryString` | string |

___

###  setIndexConfig

• **setIndexConfig**: *function*

*Defined in [packages/bodiless-search/src/types.ts:25](https://github.com/johnsonandjohnson/Bodiless-JS/blob/f5e19a1/packages/bodiless-search/src/types.ts#L25)*

#### Type declaration:

▸ (`conf`: [TIndexConfig](../globals.md#tindexconfig)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`conf` | [TIndexConfig](../globals.md#tindexconfig) |