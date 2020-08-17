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

*Defined in [packages/bodiless-core/src/ContentNode.ts:57](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-core/src/ContentNode.ts#L57)*

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

*Defined in [packages/bodiless-core/src/ContentNode.ts:53](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-core/src/ContentNode.ts#L53)*

___

### `Protected` getters

• **getters**: *[Getters](../globals.md#getters)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:55](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-core/src/ContentNode.ts#L55)*

___

###  path

• **path**: *string[]*

*Defined in [packages/bodiless-core/src/ContentNode.ts:57](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-core/src/ContentNode.ts#L57)*

## Accessors

###  data

• **get data**(): *D*

*Defined in [packages/bodiless-core/src/ContentNode.ts:75](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-core/src/ContentNode.ts#L75)*

**Returns:** *D*

___

###  keys

• **get keys**(): *string[]*

*Defined in [packages/bodiless-core/src/ContentNode.ts:92](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-core/src/ContentNode.ts#L92)*

**Returns:** *string[]*

## Methods

###  child

▸ **child**‹**E**›(`path`: [Path](../globals.md#path)): *[DefaultContentNode](defaultcontentnode.md)‹E›*

*Defined in [packages/bodiless-core/src/ContentNode.ts:70](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-core/src/ContentNode.ts#L70)*

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

*Defined in [packages/bodiless-core/src/ContentNode.ts:85](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-core/src/ContentNode.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`path?` | [Path](../globals.md#path) |

**Returns:** *void*

___

###  getActions

▸ **getActions**(): *object*

*Defined in [packages/bodiless-core/src/ContentNode.ts:101](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-core/src/ContentNode.ts#L101)*

**Returns:** *object*

* **deleteNode**(`path`: string[]): *void*

* **setNode**(`path`: string[], `data`: any): *void*

___

###  getGetters

▸ **getGetters**(): *object*

*Defined in [packages/bodiless-core/src/ContentNode.ts:97](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-core/src/ContentNode.ts#L97)*

**Returns:** *object*

* **getKeys**(): *string[]*

* **getNode**(`path`: string[]): *any*

___

###  peer

▸ **peer**‹**E**›(`path`: [Path](../globals.md#path)): *[DefaultContentNode](defaultcontentnode.md)‹E›*

*Defined in [packages/bodiless-core/src/ContentNode.ts:66](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-core/src/ContentNode.ts#L66)*

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

*Defined in [packages/bodiless-core/src/ContentNode.ts:80](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-core/src/ContentNode.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`dataObj` | D |

**Returns:** *void*

___

### `Static` dummy

▸ **dummy**(`path`: string, `initialData`: object): *[DefaultContentNode](defaultcontentnode.md)‹object›*

*Defined in [packages/bodiless-core/src/ContentNode.ts:105](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-core/src/ContentNode.ts#L105)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`path` | string | "root" |
`initialData` | object | {} |

**Returns:** *[DefaultContentNode](defaultcontentnode.md)‹object›*
