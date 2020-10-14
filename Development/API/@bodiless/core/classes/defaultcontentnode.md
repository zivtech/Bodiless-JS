[@bodiless/core](../README.md) › [Globals](../globals.md) › [DefaultContentNode](defaultcontentnode.md)

# Class: DefaultContentNode ‹**D**›

## Type parameters

▪ **D**: *object*

## Hierarchy

* **DefaultContentNode**

  ↳ [ContentfulNode](contentfulnode.md)

## Implements

* object

## Index

### Constructors

* [constructor](defaultcontentnode.md#constructor)

### Properties

* [actions](defaultcontentnode.md#protected-actions)
* [getters](defaultcontentnode.md#protected-getters)
* [path](defaultcontentnode.md#path)

### Accessors

* [baseResourcePath](defaultcontentnode.md#baseresourcepath)
* [data](defaultcontentnode.md#data)
* [hasError](defaultcontentnode.md#haserror)
* [keys](defaultcontentnode.md#keys)
* [pagePath](defaultcontentnode.md#pagepath)

### Methods

* [child](defaultcontentnode.md#child)
* [delete](defaultcontentnode.md#delete)
* [getActions](defaultcontentnode.md#getactions)
* [getGetters](defaultcontentnode.md#getgetters)
* [peer](defaultcontentnode.md#peer)
* [setData](defaultcontentnode.md#setdata)
* [dummy](defaultcontentnode.md#static-dummy)

## Constructors

###  constructor

\+ **new DefaultContentNode**(`actions`: [Actions](../globals.md#actions), `getters`: [Getters](../globals.md#getters), `path`: [Path](../globals.md#path)): *[DefaultContentNode](defaultcontentnode.md)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:63](https://github.com/johnsonandjohnson/Bodiless-JS/blob/388166c/packages/bodiless-core/src/ContentNode.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`actions` | [Actions](../globals.md#actions) |
`getters` | [Getters](../globals.md#getters) |
`path` | [Path](../globals.md#path) |

**Returns:** *[DefaultContentNode](defaultcontentnode.md)*

## Properties

### `Protected` actions

• **actions**: *[Actions](../globals.md#actions)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:59](https://github.com/johnsonandjohnson/Bodiless-JS/blob/388166c/packages/bodiless-core/src/ContentNode.ts#L59)*

___

### `Protected` getters

• **getters**: *[Getters](../globals.md#getters)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:61](https://github.com/johnsonandjohnson/Bodiless-JS/blob/388166c/packages/bodiless-core/src/ContentNode.ts#L61)*

___

###  path

• **path**: *string[]*

*Defined in [packages/bodiless-core/src/ContentNode.ts:63](https://github.com/johnsonandjohnson/Bodiless-JS/blob/388166c/packages/bodiless-core/src/ContentNode.ts#L63)*

## Accessors

###  baseResourcePath

• **get baseResourcePath**(): *string*

*Defined in [packages/bodiless-core/src/ContentNode.ts:91](https://github.com/johnsonandjohnson/Bodiless-JS/blob/388166c/packages/bodiless-core/src/ContentNode.ts#L91)*

**Returns:** *string*

___

###  data

• **get data**(): *D*

*Defined in [packages/bodiless-core/src/ContentNode.ts:81](https://github.com/johnsonandjohnson/Bodiless-JS/blob/388166c/packages/bodiless-core/src/ContentNode.ts#L81)*

**Returns:** *D*

___

###  hasError

• **get hasError**(): *hasError*

*Defined in [packages/bodiless-core/src/ContentNode.ts:113](https://github.com/johnsonandjohnson/Bodiless-JS/blob/388166c/packages/bodiless-core/src/ContentNode.ts#L113)*

**Returns:** *hasError*

___

###  keys

• **get keys**(): *string[]*

*Defined in [packages/bodiless-core/src/ContentNode.ts:108](https://github.com/johnsonandjohnson/Bodiless-JS/blob/388166c/packages/bodiless-core/src/ContentNode.ts#L108)*

**Returns:** *string[]*

___

###  pagePath

• **get pagePath**(): *string*

*Defined in [packages/bodiless-core/src/ContentNode.ts:86](https://github.com/johnsonandjohnson/Bodiless-JS/blob/388166c/packages/bodiless-core/src/ContentNode.ts#L86)*

**Returns:** *string*

## Methods

###  child

▸ **child**‹**E**›(`path`: [Path](../globals.md#path)): *[DefaultContentNode](defaultcontentnode.md)‹E›*

*Defined in [packages/bodiless-core/src/ContentNode.ts:76](https://github.com/johnsonandjohnson/Bodiless-JS/blob/388166c/packages/bodiless-core/src/ContentNode.ts#L76)*

**Type parameters:**

▪ **E**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](../globals.md#path) |

**Returns:** *[DefaultContentNode](defaultcontentnode.md)‹E›*

___

###  delete

▸ **delete**(`path?`: [Path](../globals.md#path)): *void*

*Defined in [packages/bodiless-core/src/ContentNode.ts:101](https://github.com/johnsonandjohnson/Bodiless-JS/blob/388166c/packages/bodiless-core/src/ContentNode.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`path?` | [Path](../globals.md#path) |

**Returns:** *void*

___

###  getActions

▸ **getActions**(): *object*

*Defined in [packages/bodiless-core/src/ContentNode.ts:122](https://github.com/johnsonandjohnson/Bodiless-JS/blob/388166c/packages/bodiless-core/src/ContentNode.ts#L122)*

**Returns:** *object*

* **deleteNode**(`path`: string[]): *void*

* **setNode**(`path`: string[], `data`: any): *void*

___

###  getGetters

▸ **getGetters**(): *object*

*Defined in [packages/bodiless-core/src/ContentNode.ts:118](https://github.com/johnsonandjohnson/Bodiless-JS/blob/388166c/packages/bodiless-core/src/ContentNode.ts#L118)*

**Returns:** *object*

* **getBaseResourcePath**(`collection`: string): *string*

* **getKeys**(): *string[]*

* **getNode**(`path`: string[]): *any*

* **getPagePath**(): *string*

* **hasError**(): *boolean*

___

###  peer

▸ **peer**‹**E**›(`path`: [Path](../globals.md#path)): *[DefaultContentNode](defaultcontentnode.md)‹E›*

*Defined in [packages/bodiless-core/src/ContentNode.ts:72](https://github.com/johnsonandjohnson/Bodiless-JS/blob/388166c/packages/bodiless-core/src/ContentNode.ts#L72)*

**Type parameters:**

▪ **E**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](../globals.md#path) |

**Returns:** *[DefaultContentNode](defaultcontentnode.md)‹E›*

___

###  setData

▸ **setData**(`dataObj`: D): *void*

*Defined in [packages/bodiless-core/src/ContentNode.ts:96](https://github.com/johnsonandjohnson/Bodiless-JS/blob/388166c/packages/bodiless-core/src/ContentNode.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`dataObj` | D |

**Returns:** *void*

___

### `Static` dummy

▸ **dummy**(`path`: string, `initialData`: object): *[DefaultContentNode](defaultcontentnode.md)‹object›*

*Defined in [packages/bodiless-core/src/ContentNode.ts:126](https://github.com/johnsonandjohnson/Bodiless-JS/blob/388166c/packages/bodiless-core/src/ContentNode.ts#L126)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`path` | string | "root" |
`initialData` | object | {} |

**Returns:** *[DefaultContentNode](defaultcontentnode.md)‹object›*
