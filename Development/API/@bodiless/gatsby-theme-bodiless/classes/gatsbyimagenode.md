[@bodiless/gatsby-theme-bodiless](../README.md) › [Globals](../globals.md) › [GatsbyImageNode](gatsbyimagenode.md)

# Class: GatsbyImageNode ‹**D**›

## Type parameters

▪ **D**: *object*

## Hierarchy

* DefaultContentNode‹D›

  ↳ **GatsbyImageNode**

## Implements

* object

## Index

### Constructors

* [constructor](gatsbyimagenode.md#constructor)

### Properties

* [actions](gatsbyimagenode.md#protected-actions)
* [getters](gatsbyimagenode.md#protected-getters)
* [path](gatsbyimagenode.md#path)
* [preset](gatsbyimagenode.md#private-preset)

### Accessors

* [baseResourcePath](gatsbyimagenode.md#baseresourcepath)
* [data](gatsbyimagenode.md#data)
* [hasError](gatsbyimagenode.md#haserror)
* [keys](gatsbyimagenode.md#keys)
* [pagePath](gatsbyimagenode.md#pagepath)

### Methods

* [child](gatsbyimagenode.md#child)
* [delete](gatsbyimagenode.md#delete)
* [getActions](gatsbyimagenode.md#getactions)
* [getGetters](gatsbyimagenode.md#getgetters)
* [peer](gatsbyimagenode.md#peer)
* [setData](gatsbyimagenode.md#setdata)
* [setPreset](gatsbyimagenode.md#setpreset)
* [create](gatsbyimagenode.md#static-create)
* [dummy](gatsbyimagenode.md#static-dummy)

## Constructors

###  constructor

\+ **new GatsbyImageNode**(`actions`: Actions, `getters`: Getters, `path`: Path): *[GatsbyImageNode](gatsbyimagenode.md)*

*Inherited from [GatsbyImageNode](gatsbyimagenode.md).[constructor](gatsbyimagenode.md#constructor)*

Defined in packages/bodiless-core/lib/ContentNode.d.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`actions` | Actions |
`getters` | Getters |
`path` | Path |

**Returns:** *[GatsbyImageNode](gatsbyimagenode.md)*

## Properties

### `Protected` actions

• **actions**: *Actions*

*Inherited from [GatsbyImageNode](gatsbyimagenode.md).[actions](gatsbyimagenode.md#protected-actions)*

Defined in packages/bodiless-core/lib/ContentNode.d.ts:39

___

### `Protected` getters

• **getters**: *Getters*

*Inherited from [GatsbyImageNode](gatsbyimagenode.md).[getters](gatsbyimagenode.md#protected-getters)*

Defined in packages/bodiless-core/lib/ContentNode.d.ts:40

___

###  path

• **path**: *string[]*

*Inherited from [GatsbyImageNode](gatsbyimagenode.md).[path](gatsbyimagenode.md#path)*

Defined in packages/bodiless-core/lib/ContentNode.d.ts:41

___

### `Private` preset

• **preset**: *string*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyImage/GatsbyImageNode.ts:19](https://github.com/johnsonandjohnson/Bodiless-JS/blob/3cab826/packages/gatsby-theme-bodiless/src/dist/GatsbyImage/GatsbyImageNode.ts#L19)*

## Accessors

###  baseResourcePath

• **get baseResourcePath**(): *string*

*Inherited from [GatsbyImageNode](gatsbyimagenode.md).[baseResourcePath](gatsbyimagenode.md#baseresourcepath)*

Defined in packages/bodiless-core/lib/ContentNode.d.ts:47

**Returns:** *string*

___

###  data

• **get data**(): *D*

*Inherited from [GatsbyImageNode](gatsbyimagenode.md).[data](gatsbyimagenode.md#data)*

Defined in packages/bodiless-core/lib/ContentNode.d.ts:45

**Returns:** *D*

___

###  hasError

• **get hasError**(): *function*

*Inherited from [GatsbyImageNode](gatsbyimagenode.md).[hasError](gatsbyimagenode.md#haserror)*

Defined in packages/bodiless-core/lib/ContentNode.d.ts:51

**Returns:** *function*

▸ (): *boolean*

___

###  keys

• **get keys**(): *string[]*

*Inherited from [GatsbyImageNode](gatsbyimagenode.md).[keys](gatsbyimagenode.md#keys)*

Defined in packages/bodiless-core/lib/ContentNode.d.ts:50

**Returns:** *string[]*

___

###  pagePath

• **get pagePath**(): *string*

*Inherited from [GatsbyImageNode](gatsbyimagenode.md).[pagePath](gatsbyimagenode.md#pagepath)*

Defined in packages/bodiless-core/lib/ContentNode.d.ts:46

**Returns:** *string*

## Methods

###  child

▸ **child**‹**E**›(`path`: Path): *DefaultContentNode‹E›*

*Inherited from [GatsbyImageNode](gatsbyimagenode.md).[child](gatsbyimagenode.md#child)*

Defined in packages/bodiless-core/lib/ContentNode.d.ts:44

**Type parameters:**

▪ **E**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`path` | Path |

**Returns:** *DefaultContentNode‹E›*

___

###  delete

▸ **delete**(`path?`: Path): *void*

*Inherited from [GatsbyImageNode](gatsbyimagenode.md).[delete](gatsbyimagenode.md#delete)*

Defined in packages/bodiless-core/lib/ContentNode.d.ts:49

**Parameters:**

Name | Type |
------ | ------ |
`path?` | Path |

**Returns:** *void*

___

###  getActions

▸ **getActions**(): *Actions*

*Inherited from [GatsbyImageNode](gatsbyimagenode.md).[getActions](gatsbyimagenode.md#getactions)*

Defined in packages/bodiless-core/lib/ContentNode.d.ts:53

**Returns:** *Actions*

___

###  getGetters

▸ **getGetters**(): *Getters*

*Inherited from [GatsbyImageNode](gatsbyimagenode.md).[getGetters](gatsbyimagenode.md#getgetters)*

Defined in packages/bodiless-core/lib/ContentNode.d.ts:52

**Returns:** *Getters*

___

###  peer

▸ **peer**‹**E**›(`path`: Path): *DefaultContentNode‹E›*

*Inherited from [GatsbyImageNode](gatsbyimagenode.md).[peer](gatsbyimagenode.md#peer)*

Defined in packages/bodiless-core/lib/ContentNode.d.ts:43

**Type parameters:**

▪ **E**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`path` | Path |

**Returns:** *DefaultContentNode‹E›*

___

###  setData

▸ **setData**(`dataObj`: D): *void*

*Overrides void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyImage/GatsbyImageNode.ts:32](https://github.com/johnsonandjohnson/Bodiless-JS/blob/3cab826/packages/gatsby-theme-bodiless/src/dist/GatsbyImage/GatsbyImageNode.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`dataObj` | D |

**Returns:** *void*

___

###  setPreset

▸ **setPreset**(`preset`: string): *void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyImage/GatsbyImageNode.ts:28](https://github.com/johnsonandjohnson/Bodiless-JS/blob/3cab826/packages/gatsby-theme-bodiless/src/dist/GatsbyImage/GatsbyImageNode.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`preset` | string |

**Returns:** *void*

___

### `Static` create

▸ **create**(`node`: DefaultContentNode‹object›, `nodeKey`: string, `preset`: string): *[GatsbyImageNode](gatsbyimagenode.md)‹object›*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyImage/GatsbyImageNode.ts:21](https://github.com/johnsonandjohnson/Bodiless-JS/blob/3cab826/packages/gatsby-theme-bodiless/src/dist/GatsbyImage/GatsbyImageNode.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | DefaultContentNode‹object› |
`nodeKey` | string |
`preset` | string |

**Returns:** *[GatsbyImageNode](gatsbyimagenode.md)‹object›*

___

### `Static` dummy

▸ **dummy**(`path?`: undefined | string, `initialData?`: undefined | object): *DefaultContentNode‹object›*

*Inherited from [GatsbyImageNode](gatsbyimagenode.md).[dummy](gatsbyimagenode.md#static-dummy)*

Defined in packages/bodiless-core/lib/ContentNode.d.ts:54

**Parameters:**

Name | Type |
------ | ------ |
`path?` | undefined &#124; string |
`initialData?` | undefined &#124; object |

**Returns:** *DefaultContentNode‹object›*
