[@bodiless/components](../README.md) › [Globals](../globals.md) › [DefaultNormalHref](defaultnormalhref.md)

# Class: DefaultNormalHref

Normalizer for link hrefs.
- Treats links with explicit hosts as external and doesn't touch them. For internal
- Appends or strips trailing slashes per option (but never appends for file links).
- Prepends slash for links which are not explicitly relative (begin with # or .).

## Hierarchy

* **DefaultNormalHref**

## Implements

* [NormalHref](../interfaces/normalhref.md)

## Index

### Constructors

* [constructor](defaultnormalhref.md#constructor)

### Properties

* [options](defaultnormalhref.md#protected-options)
* [url](defaultnormalhref.md#protected-url)
* [urlString](defaultnormalhref.md#protected-urlstring)

### Accessors

* [hasNoPath](defaultnormalhref.md#protected-hasnopath)
* [isExternal](defaultnormalhref.md#isexternal)
* [isHashOnly](defaultnormalhref.md#protected-ishashonly)
* [isRelative](defaultnormalhref.md#isrelative)
* [parentPage](defaultnormalhref.md#parentpage)
* [pathname](defaultnormalhref.md#pathname)
* [relativePrefix](defaultnormalhref.md#protected-relativeprefix)

### Methods

* [canCompare](defaultnormalhref.md#protected-cancompare)
* [isChildPageOf](defaultnormalhref.md#ischildpageof)
* [isSamePage](defaultnormalhref.md#issamepage)
* [toString](defaultnormalhref.md#tostring)

## Constructors

###  constructor

\+ **new DefaultNormalHref**(`urlString?`: undefined | string, `options`: [NormalHrefOptions](../globals.md#normalhrefoptions)): *[DefaultNormalHref](defaultnormalhref.md)*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:59](https://github.com/johnsonandjohnson/Bodiless-JS/blob/5d99541/packages/bodiless-components/src/Link/NormalHref.ts#L59)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`urlString?` | undefined &#124; string | - |
`options` | [NormalHrefOptions](../globals.md#normalhrefoptions) | {} |

**Returns:** *[DefaultNormalHref](defaultnormalhref.md)*

## Properties

### `Protected` options

• **options**: *[NormalHrefOptions](../globals.md#normalhrefoptions)*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:55](https://github.com/johnsonandjohnson/Bodiless-JS/blob/5d99541/packages/bodiless-components/src/Link/NormalHref.ts#L55)*

___

### `Protected` url

• **url**: *URL*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:57](https://github.com/johnsonandjohnson/Bodiless-JS/blob/5d99541/packages/bodiless-components/src/Link/NormalHref.ts#L57)*

___

### `Protected` urlString

• **urlString**: *string*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:59](https://github.com/johnsonandjohnson/Bodiless-JS/blob/5d99541/packages/bodiless-components/src/Link/NormalHref.ts#L59)*

## Accessors

### `Protected` hasNoPath

• **get hasNoPath**(): *boolean*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:72](https://github.com/johnsonandjohnson/Bodiless-JS/blob/5d99541/packages/bodiless-components/src/Link/NormalHref.ts#L72)*

**Returns:** *boolean*

___

###  isExternal

• **get isExternal**(): *boolean*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:67](https://github.com/johnsonandjohnson/Bodiless-JS/blob/5d99541/packages/bodiless-components/src/Link/NormalHref.ts#L67)*

**Returns:** *boolean*

___

### `Protected` isHashOnly

• **get isHashOnly**(): *boolean*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:76](https://github.com/johnsonandjohnson/Bodiless-JS/blob/5d99541/packages/bodiless-components/src/Link/NormalHref.ts#L76)*

**Returns:** *boolean*

___

###  isRelative

• **get isRelative**(): *boolean*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:80](https://github.com/johnsonandjohnson/Bodiless-JS/blob/5d99541/packages/bodiless-components/src/Link/NormalHref.ts#L80)*

**Returns:** *boolean*

___

###  parentPage

• **get parentPage**(): *undefined | [DefaultNormalHref](defaultnormalhref.md)‹›*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:121](https://github.com/johnsonandjohnson/Bodiless-JS/blob/5d99541/packages/bodiless-components/src/Link/NormalHref.ts#L121)*

**Returns:** *undefined | [DefaultNormalHref](defaultnormalhref.md)‹›*

___

###  pathname

• **get pathname**(): *string*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:92](https://github.com/johnsonandjohnson/Bodiless-JS/blob/5d99541/packages/bodiless-components/src/Link/NormalHref.ts#L92)*

**Returns:** *string*

___

### `Protected` relativePrefix

• **get relativePrefix**(): *string*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:84](https://github.com/johnsonandjohnson/Bodiless-JS/blob/5d99541/packages/bodiless-components/src/Link/NormalHref.ts#L84)*

**Returns:** *string*

## Methods

### `Protected` canCompare

▸ **canCompare**(`that`: [NormalHref](../interfaces/normalhref.md)): *boolean*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:107](https://github.com/johnsonandjohnson/Bodiless-JS/blob/5d99541/packages/bodiless-components/src/Link/NormalHref.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`that` | [NormalHref](../interfaces/normalhref.md) |

**Returns:** *boolean*

___

###  isChildPageOf

▸ **isChildPageOf**(`that`: [NormalHref](../interfaces/normalhref.md) | string): *boolean*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:128](https://github.com/johnsonandjohnson/Bodiless-JS/blob/5d99541/packages/bodiless-components/src/Link/NormalHref.ts#L128)*

**Parameters:**

Name | Type |
------ | ------ |
`that` | [NormalHref](../interfaces/normalhref.md) &#124; string |

**Returns:** *boolean*

___

###  isSamePage

▸ **isSamePage**(`that`: [NormalHref](../interfaces/normalhref.md) | string): *any*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:115](https://github.com/johnsonandjohnson/Bodiless-JS/blob/5d99541/packages/bodiless-components/src/Link/NormalHref.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`that` | [NormalHref](../interfaces/normalhref.md) &#124; string |

**Returns:** *any*

___

###  toString

▸ **toString**(): *string*

*Defined in [packages/bodiless-components/src/Link/NormalHref.ts:102](https://github.com/johnsonandjohnson/Bodiless-JS/blob/5d99541/packages/bodiless-components/src/Link/NormalHref.ts#L102)*

**Returns:** *string*
