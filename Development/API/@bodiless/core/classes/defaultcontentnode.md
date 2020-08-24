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

* [data](defaultcontentnode.md#data)
* [hasError](defaultcontentnode.md#haserror)
* [keys](defaultcontentnode.md#keys)

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

*Defined in [packages/bodiless-core/src/ContentNode.ts:59](https://github.com/johnsonandjohnson/Bodiless-JS/blob/f436ef2/packages/bodiless-core/src/ContentNode.ts#L59)*

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

*Defined in [packages/bodiless-core/src/ContentNode.ts:55](https://github.com/johnsonandjohnson/Bodiless-JS/blob/f436ef2/packages/bodiless-core/src/ContentNode.ts#L55)*

___

### `Protected` getters

• **getters**: *[Getters](../globals.md#getters)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:57](https://github.com/johnsonandjohnson/Bodiless-JS/blob/f436ef2/packages/bodiless-core/src/ContentNode.ts#L57)*

___

###  path

• **path**: *string[]*

*Defined in [packages/bodiless-core/src/ContentNode.ts:59](https://github.com/johnsonandjohnson/Bodiless-JS/blob/f436ef2/packages/bodiless-core/src/ContentNode.ts#L59)*

## Accessors

###  data

• **get data**(): *D*

*Defined in [packages/bodiless-core/src/ContentNode.ts:77](https://github.com/johnsonandjohnson/Bodiless-JS/blob/f436ef2/packages/bodiless-core/src/ContentNode.ts#L77)*

**Returns:** *D*

___

###  hasError

• **get hasError**(): *hasError*

*Defined in [packages/bodiless-core/src/ContentNode.ts:99](https://github.com/johnsonandjohnson/Bodiless-JS/blob/f436ef2/packages/bodiless-core/src/ContentNode.ts#L99)*

**Returns:** *hasError*

___

###  keys

• **get keys**(): *string[]*

*Defined in [packages/bodiless-core/src/ContentNode.ts:94](https://github.com/johnsonandjohnson/Bodiless-JS/blob/f436ef2/packages/bodiless-core/src/ContentNode.ts#L94)*

**Returns:** *string[]*

## Methods

###  child

▸ **child**‹**E**›(`path`: [Path](../globals.md#path)): *[DefaultContentNode](defaultcontentnode.md)‹E›*

*Defined in [packages/bodiless-core/src/ContentNode.ts:72](https://github.com/johnsonandjohnson/Bodiless-JS/blob/f436ef2/packages/bodiless-core/src/ContentNode.ts#L72)*

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

*Defined in [packages/bodiless-core/src/ContentNode.ts:87](https://github.com/johnsonandjohnson/Bodiless-JS/blob/f436ef2/packages/bodiless-core/src/ContentNode.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`path?` | [Path](../globals.md#path) |

**Returns:** *void*

___

###  getActions

▸ **getActions**(): *object*

*Defined in [packages/bodiless-core/src/ContentNode.ts:108](https://github.com/johnsonandjohnson/Bodiless-JS/blob/f436ef2/packages/bodiless-core/src/ContentNode.ts#L108)*

**Returns:** *object*

* **deleteNode**(`path`: string[]): *void*

* **setNode**(`path`: string[], `data`: any): *void*

___

###  getGetters

▸ **getGetters**(): *object*

*Defined in [packages/bodiless-core/src/ContentNode.ts:104](https://github.com/johnsonandjohnson/Bodiless-JS/blob/f436ef2/packages/bodiless-core/src/ContentNode.ts#L104)*

**Returns:** *object*

* **getKeys**(): *string[]*

* **getNode**(`path`: string[]): *any*

* **hasError**(): *boolean*

___

###  peer

▸ **peer**‹**E**›(`path`: [Path](../globals.md#path)): *[DefaultContentNode](defaultcontentnode.md)‹E›*

*Defined in [packages/bodiless-core/src/ContentNode.ts:68](https://github.com/johnsonandjohnson/Bodiless-JS/blob/f436ef2/packages/bodiless-core/src/ContentNode.ts#L68)*

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

*Defined in [packages/bodiless-core/src/ContentNode.ts:82](https://github.com/johnsonandjohnson/Bodiless-JS/blob/f436ef2/packages/bodiless-core/src/ContentNode.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`dataObj` | D |

**Returns:** *void*

___

### `Static` dummy

▸ **dummy**(`path`: string, `initialData`: object): *[DefaultContentNode](defaultcontentnode.md)‹object›*

*Defined in [packages/bodiless-core/src/ContentNode.ts:112](https://github.com/johnsonandjohnson/Bodiless-JS/blob/f436ef2/packages/bodiless-core/src/ContentNode.ts#L112)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`path` | string | "root" |
`initialData` | object | {} |

**Returns:** *[DefaultContentNode](defaultcontentnode.md)‹object›*
