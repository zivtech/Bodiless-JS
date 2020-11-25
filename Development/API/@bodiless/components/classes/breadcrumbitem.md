[@bodiless/components](../README.md) › [Globals](../globals.md) › [BreadcrumbItem](breadcrumbitem.md)

# Class: BreadcrumbItem

Stores breadcrumb item data.

## Hierarchy

* **BreadcrumbItem**

## Implements

* object

## Index

### Constructors

* [constructor](breadcrumbitem.md#constructor)

### Properties

* [_link](breadcrumbitem.md#_link)
* [_parent](breadcrumbitem.md#optional-_parent)
* [_store](breadcrumbitem.md#_store)
* [_title](breadcrumbitem.md#_title)
* [_uuid](breadcrumbitem.md#_uuid)

### Accessors

* [link](breadcrumbitem.md#link)
* [parent](breadcrumbitem.md#parent)
* [title](breadcrumbitem.md#title)
* [uuid](breadcrumbitem.md#uuid)

### Methods

* [getAncestors](breadcrumbitem.md#getancestors)
* [hasPath](breadcrumbitem.md#haspath)
* [isAncestorOf](breadcrumbitem.md#isancestorof)
* [isDescendantOf](breadcrumbitem.md#isdescendantof)
* [isEqual](breadcrumbitem.md#isequal)
* [isFirst](breadcrumbitem.md#isfirst)
* [isLast](breadcrumbitem.md#islast)
* [isSubpathOf](breadcrumbitem.md#issubpathof)
* [setLink](breadcrumbitem.md#setlink)
* [setTitle](breadcrumbitem.md#settitle)

## Constructors

###  constructor

\+ **new BreadcrumbItem**(`__namedParameters`: object): *[BreadcrumbItem](breadcrumbitem.md)*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:75](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ee66fb8/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L75)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`link` | object |
`parent` | undefined &#124; object |
`store` | object |
`title` | object |
`uuid` | string |

**Returns:** *[BreadcrumbItem](breadcrumbitem.md)*

## Properties

###  _link

• **_link**: *[BreadcrumbItemLink](../globals.md#breadcrumbitemlink)*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:73](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ee66fb8/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L73)*

___

### `Optional` _parent

• **_parent**? : *[BreadcrumbItemType](../globals.md#breadcrumbitemtype)*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:69](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ee66fb8/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L69)*

___

###  _store

• **_store**: *[BreadcrumbStoreType](../globals.md#breadcrumbstoretype)*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:75](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ee66fb8/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L75)*

___

###  _title

• **_title**: *[BreadcrumbItemTitle](../globals.md#breadcrumbitemtitle)*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:71](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ee66fb8/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L71)*

___

###  _uuid

• **_uuid**: *string*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:67](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ee66fb8/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L67)*

## Accessors

###  link

• **get link**(): *object*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:153](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ee66fb8/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L153)*

**Returns:** *object*

* **data**: *string*

* **nodePath**: *string*

___

###  parent

• **get parent**(): *undefined | object*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:157](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ee66fb8/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L157)*

**Returns:** *undefined | object*

___

###  title

• **get title**(): *object*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:149](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ee66fb8/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L149)*

**Returns:** *object*

* **data**: *string | object*

* **nodePath**: *string*

___

###  uuid

• **get uuid**(): *string*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:145](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ee66fb8/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L145)*

**Returns:** *string*

## Methods

###  getAncestors

▸ **getAncestors**(): *object[]*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:134](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ee66fb8/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L134)*

**Returns:** *object[]*

___

###  hasPath

▸ **hasPath**(`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype) | string): *boolean*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:99](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ee66fb8/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [BreadcrumbItemType](../globals.md#breadcrumbitemtype) &#124; string |

**Returns:** *boolean*

___

###  isAncestorOf

▸ **isAncestorOf**(`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype)): *boolean*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:115](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ee66fb8/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [BreadcrumbItemType](../globals.md#breadcrumbitemtype) |

**Returns:** *boolean*

___

###  isDescendantOf

▸ **isDescendantOf**(`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype)): *boolean*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:107](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ee66fb8/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [BreadcrumbItemType](../globals.md#breadcrumbitemtype) |

**Returns:** *boolean*

___

###  isEqual

▸ **isEqual**(`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype) | string): *boolean*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:120](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ee66fb8/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [BreadcrumbItemType](../globals.md#breadcrumbitemtype) &#124; string |

**Returns:** *boolean*

___

###  isFirst

▸ **isFirst**(): *boolean*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:125](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ee66fb8/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L125)*

**Returns:** *boolean*

___

###  isLast

▸ **isLast**(): *boolean*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:129](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ee66fb8/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L129)*

**Returns:** *boolean*

___

###  isSubpathOf

▸ **isSubpathOf**(`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype) | string): *boolean*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:91](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ee66fb8/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [BreadcrumbItemType](../globals.md#breadcrumbitemtype) &#124; string |

**Returns:** *boolean*

___

###  setLink

▸ **setLink**(`link`: [BreadcrumbItemLink](../globals.md#breadcrumbitemlink)): *void*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:165](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ee66fb8/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L165)*

**Parameters:**

Name | Type |
------ | ------ |
`link` | [BreadcrumbItemLink](../globals.md#breadcrumbitemlink) |

**Returns:** *void*

___

###  setTitle

▸ **setTitle**(`title`: [BreadcrumbItemTitle](../globals.md#breadcrumbitemtitle)): *void*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:161](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ee66fb8/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L161)*

**Parameters:**

Name | Type |
------ | ------ |
`title` | [BreadcrumbItemTitle](../globals.md#breadcrumbitemtitle) |

**Returns:** *void*
