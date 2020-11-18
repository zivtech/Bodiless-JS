[@bodiless/core](../README.md) › [Globals](../globals.md) › [ContentfulNode](contentfulnode.md)

# Class: ContentfulNode ‹**D**›

## Type parameters

▪ **D**: *object*

## Hierarchy

* [DefaultContentNode](defaultcontentnode.md)‹D›

  ↳ **ContentfulNode**

## Implements

* object

## Index

### Constructors

* [constructor](contentfulnode.md#constructor)

### Properties

* [actions](contentfulnode.md#protected-actions)
* [baseContentPath](contentfulnode.md#private-basecontentpath)
* [content](contentfulnode.md#private-content)
* [getters](contentfulnode.md#protected-getters)
* [path](contentfulnode.md#path)

### Accessors

* [baseResourcePath](contentfulnode.md#baseresourcepath)
* [data](contentfulnode.md#data)
* [hasError](contentfulnode.md#haserror)
* [keys](contentfulnode.md#keys)
* [pagePath](contentfulnode.md#pagepath)

### Methods

* [child](contentfulnode.md#child)
* [delete](contentfulnode.md#delete)
* [getActions](contentfulnode.md#getactions)
* [getContentKey](contentfulnode.md#private-getcontentkey)
* [getDefaultContent](contentfulnode.md#private-getdefaultcontent)
* [getGetters](contentfulnode.md#getgetters)
* [peer](contentfulnode.md#peer)
* [setBaseContentPath](contentfulnode.md#setbasecontentpath)
* [setContent](contentfulnode.md#setcontent)
* [setData](contentfulnode.md#setdata)
* [create](contentfulnode.md#static-create)
* [dummy](contentfulnode.md#static-dummy)

## Constructors

###  constructor

\+ **new ContentfulNode**(`actions`: [Actions](../globals.md#actions), `getters`: [Getters](../globals.md#getters), `path`: [Path](../globals.md#path)): *[ContentfulNode](contentfulnode.md)*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[constructor](defaultcontentnode.md#constructor)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:63](https://github.com/johnsonandjohnson/Bodiless-JS/blob/78035b5/packages/bodiless-core/src/ContentNode.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`actions` | [Actions](../globals.md#actions) |
`getters` | [Getters](../globals.md#getters) |
`path` | [Path](../globals.md#path) |

**Returns:** *[ContentfulNode](contentfulnode.md)*

## Properties

### `Protected` actions

• **actions**: *[Actions](../globals.md#actions)*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[actions](defaultcontentnode.md#protected-actions)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:59](https://github.com/johnsonandjohnson/Bodiless-JS/blob/78035b5/packages/bodiless-core/src/ContentNode.ts#L59)*

___

### `Private` baseContentPath

• **baseContentPath**: *[Path](../globals.md#path)* = []

*Defined in [packages/bodiless-core/src/Contentful/ContentfulNode.ts:27](https://github.com/johnsonandjohnson/Bodiless-JS/blob/78035b5/packages/bodiless-core/src/Contentful/ContentfulNode.ts#L27)*

___

### `Private` content

• **content**: *D*

*Defined in [packages/bodiless-core/src/Contentful/ContentfulNode.ts:30](https://github.com/johnsonandjohnson/Bodiless-JS/blob/78035b5/packages/bodiless-core/src/Contentful/ContentfulNode.ts#L30)*

___

### `Protected` getters

• **getters**: *[Getters](../globals.md#getters)*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[getters](defaultcontentnode.md#protected-getters)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:61](https://github.com/johnsonandjohnson/Bodiless-JS/blob/78035b5/packages/bodiless-core/src/ContentNode.ts#L61)*

___

###  path

• **path**: *string[]*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[path](defaultcontentnode.md#path)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:63](https://github.com/johnsonandjohnson/Bodiless-JS/blob/78035b5/packages/bodiless-core/src/ContentNode.ts#L63)*

## Accessors

###  baseResourcePath

• **get baseResourcePath**(): *string*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[baseResourcePath](defaultcontentnode.md#baseresourcepath)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:91](https://github.com/johnsonandjohnson/Bodiless-JS/blob/78035b5/packages/bodiless-core/src/ContentNode.ts#L91)*

**Returns:** *string*

___

###  data

• **get data**(): *any*

*Overrides [DefaultContentNode](defaultcontentnode.md).[data](defaultcontentnode.md#data)*

*Defined in [packages/bodiless-core/src/Contentful/ContentfulNode.ts:56](https://github.com/johnsonandjohnson/Bodiless-JS/blob/78035b5/packages/bodiless-core/src/Contentful/ContentfulNode.ts#L56)*

**Returns:** *any*

___

###  hasError

• **get hasError**(): *hasError*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[hasError](defaultcontentnode.md#haserror)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:113](https://github.com/johnsonandjohnson/Bodiless-JS/blob/78035b5/packages/bodiless-core/src/ContentNode.ts#L113)*

**Returns:** *hasError*

___

###  keys

• **get keys**(): *string[]*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[keys](defaultcontentnode.md#keys)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:108](https://github.com/johnsonandjohnson/Bodiless-JS/blob/78035b5/packages/bodiless-core/src/ContentNode.ts#L108)*

**Returns:** *string[]*

___

###  pagePath

• **get pagePath**(): *string*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[pagePath](defaultcontentnode.md#pagepath)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:86](https://github.com/johnsonandjohnson/Bodiless-JS/blob/78035b5/packages/bodiless-core/src/ContentNode.ts#L86)*

**Returns:** *string*

## Methods

###  child

▸ **child**‹**E**›(`path`: [Path](../globals.md#path)): *[DefaultContentNode](defaultcontentnode.md)‹E›*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[child](defaultcontentnode.md#child)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:76](https://github.com/johnsonandjohnson/Bodiless-JS/blob/78035b5/packages/bodiless-core/src/ContentNode.ts#L76)*

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

*Inherited from [DefaultContentNode](defaultcontentnode.md).[delete](defaultcontentnode.md#delete)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:101](https://github.com/johnsonandjohnson/Bodiless-JS/blob/78035b5/packages/bodiless-core/src/ContentNode.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`path?` | [Path](../globals.md#path) |

**Returns:** *void*

___

###  getActions

▸ **getActions**(): *object*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[getActions](defaultcontentnode.md#getactions)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:122](https://github.com/johnsonandjohnson/Bodiless-JS/blob/78035b5/packages/bodiless-core/src/ContentNode.ts#L122)*

**Returns:** *object*

* **deleteNode**(`path`: string[]): *void*

* **setNode**(`path`: string[], `data`: any): *void*

___

### `Private` getContentKey

▸ **getContentKey**(): *string*

*Defined in [packages/bodiless-core/src/Contentful/ContentfulNode.ts:39](https://github.com/johnsonandjohnson/Bodiless-JS/blob/78035b5/packages/bodiless-core/src/Contentful/ContentfulNode.ts#L39)*

**Returns:** *string*

___

### `Private` getDefaultContent

▸ **getDefaultContent**(): *any*

*Defined in [packages/bodiless-core/src/Contentful/ContentfulNode.ts:43](https://github.com/johnsonandjohnson/Bodiless-JS/blob/78035b5/packages/bodiless-core/src/Contentful/ContentfulNode.ts#L43)*

**Returns:** *any*

___

###  getGetters

▸ **getGetters**(): *object*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[getGetters](defaultcontentnode.md#getgetters)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:118](https://github.com/johnsonandjohnson/Bodiless-JS/blob/78035b5/packages/bodiless-core/src/ContentNode.ts#L118)*

**Returns:** *object*

* **getBaseResourcePath**(`collection`: string): *string*

* **getKeys**(): *string[]*

* **getNode**(`path`: string[]): *any*

* **getPagePath**(): *string*

* **hasError**(): *boolean*

___

###  peer

▸ **peer**(`path`: [Path](../globals.md#path)): *[ContentfulNode](contentfulnode.md)‹object›*

*Overrides [DefaultContentNode](defaultcontentnode.md).[peer](defaultcontentnode.md#peer)*

*Defined in [packages/bodiless-core/src/Contentful/ContentfulNode.ts:65](https://github.com/johnsonandjohnson/Bodiless-JS/blob/78035b5/packages/bodiless-core/src/Contentful/ContentfulNode.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](../globals.md#path) |

**Returns:** *[ContentfulNode](contentfulnode.md)‹object›*

___

###  setBaseContentPath

▸ **setBaseContentPath**(`path`: [Path](../globals.md#path)): *void*

*Defined in [packages/bodiless-core/src/Contentful/ContentfulNode.ts:52](https://github.com/johnsonandjohnson/Bodiless-JS/blob/78035b5/packages/bodiless-core/src/Contentful/ContentfulNode.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](../globals.md#path) |

**Returns:** *void*

___

###  setContent

▸ **setContent**(`content`: D): *void*

*Defined in [packages/bodiless-core/src/Contentful/ContentfulNode.ts:48](https://github.com/johnsonandjohnson/Bodiless-JS/blob/78035b5/packages/bodiless-core/src/Contentful/ContentfulNode.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`content` | D |

**Returns:** *void*

___

###  setData

▸ **setData**(`dataObj`: D): *void*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[setData](defaultcontentnode.md#setdata)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:96](https://github.com/johnsonandjohnson/Bodiless-JS/blob/78035b5/packages/bodiless-core/src/ContentNode.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`dataObj` | D |

**Returns:** *void*

___

### `Static` create

▸ **create**(`node`: [DefaultContentNode](defaultcontentnode.md)‹object›, `content`: object): *[ContentfulNode](contentfulnode.md)‹object›*

*Defined in [packages/bodiless-core/src/Contentful/ContentfulNode.ts:32](https://github.com/johnsonandjohnson/Bodiless-JS/blob/78035b5/packages/bodiless-core/src/Contentful/ContentfulNode.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [DefaultContentNode](defaultcontentnode.md)‹object› |
`content` | object |

**Returns:** *[ContentfulNode](contentfulnode.md)‹object›*

___

### `Static` dummy

▸ **dummy**(`path`: string, `initialData`: object): *[DefaultContentNode](defaultcontentnode.md)‹object›*

*Inherited from [DefaultContentNode](defaultcontentnode.md).[dummy](defaultcontentnode.md#static-dummy)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:126](https://github.com/johnsonandjohnson/Bodiless-JS/blob/78035b5/packages/bodiless-core/src/ContentNode.ts#L126)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`path` | string | "root" |
`initialData` | object | {} |

**Returns:** *[DefaultContentNode](defaultcontentnode.md)‹object›*
