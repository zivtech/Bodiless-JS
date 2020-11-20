[@bodiless/components](../README.md) › [Globals](../globals.md) › [BreadcrumbStore](breadcrumbstore.md)

# Class: BreadcrumbStore

MobX storage of breadcrumb items.
API:
+ set/delete item.
+ get breadcrumb trail.
+ check if last breadcrumb item exists in the store.

## Hierarchy

* **BreadcrumbStore**

## Implements

* object
* object

## Index

### Constructors

* [constructor](breadcrumbstore.md#constructor)

### Properties

* [activeItem](breadcrumbstore.md#activeitem)
* [items](breadcrumbstore.md#private-items)
* [pagePath](breadcrumbstore.md#private-pagepath)

### Accessors

* [breadcrumbTrail](breadcrumbstore.md#breadcrumbtrail)

### Methods

* [deleteItem](breadcrumbstore.md#deleteitem)
* [export](breadcrumbstore.md#export)
* [getItem](breadcrumbstore.md#getitem)
* [getPagePath](breadcrumbstore.md#getpagepath)
* [hasCurrentPageItem](breadcrumbstore.md#hascurrentpageitem)
* [isActive](breadcrumbstore.md#isactive)
* [isActiveItemPathChanged](breadcrumbstore.md#private-isactiveitempathchanged)
* [isNewActive](breadcrumbstore.md#private-isnewactive)
* [setActiveItem](breadcrumbstore.md#setactiveitem)
* [setItem](breadcrumbstore.md#setitem)
* [updateActive](breadcrumbstore.md#private-updateactive)

## Constructors

###  constructor

\+ **new BreadcrumbStore**(`pagePath`: string): *[BreadcrumbStore](breadcrumbstore.md)*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:193](https://github.com/johnsonandjohnson/Bodiless-JS/blob/635d7ca/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L193)*

**Parameters:**

Name | Type |
------ | ------ |
`pagePath` | string |

**Returns:** *[BreadcrumbStore](breadcrumbstore.md)*

## Properties

###  activeItem

• **activeItem**: *[BreadcrumbItemType](../globals.md#breadcrumbitemtype)* = undefined

*Defined in [packages/bodiless-components/src/asBreadcrumb.tsx:47](https://github.com/johnsonandjohnson/Bodiless-JS/blob/635d7ca/packages/bodiless-components/src/asBreadcrumb.tsx#L47)*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:191](https://github.com/johnsonandjohnson/Bodiless-JS/blob/635d7ca/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L191)*

___

### `Private` items

• **items**: *Map‹string, [BreadcrumbItemType](../globals.md#breadcrumbitemtype)›* = new Map<string, BreadcrumbItemType>()

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:189](https://github.com/johnsonandjohnson/Bodiless-JS/blob/635d7ca/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L189)*

___

### `Private` pagePath

• **pagePath**: *string*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:193](https://github.com/johnsonandjohnson/Bodiless-JS/blob/635d7ca/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L193)*

## Accessors

###  breadcrumbTrail

• **get breadcrumbTrail**(): *object[]*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:246](https://github.com/johnsonandjohnson/Bodiless-JS/blob/635d7ca/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L246)*

**Returns:** *object[]*

## Methods

###  deleteItem

▸ **deleteItem**(`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype) | string): *boolean*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:232](https://github.com/johnsonandjohnson/Bodiless-JS/blob/635d7ca/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L232)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [BreadcrumbItemType](../globals.md#breadcrumbitemtype) &#124; string |

**Returns:** *boolean*

___

###  export

▸ **export**(): *object[]*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:254](https://github.com/johnsonandjohnson/Bodiless-JS/blob/635d7ca/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L254)*

**Returns:** *object[]*

___

###  getItem

▸ **getItem**(`key`: string): *undefined | object*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:221](https://github.com/johnsonandjohnson/Bodiless-JS/blob/635d7ca/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L221)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *undefined | object*

___

###  getPagePath

▸ **getPagePath**(): *string*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:242](https://github.com/johnsonandjohnson/Bodiless-JS/blob/635d7ca/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L242)*

**Returns:** *string*

___

###  hasCurrentPageItem

▸ **hasCurrentPageItem**(): *boolean*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:258](https://github.com/johnsonandjohnson/Bodiless-JS/blob/635d7ca/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L258)*

**Returns:** *boolean*

___

###  isActive

▸ **isActive**(`item`: [BreadcrumbContextInterface](../globals.md#breadcrumbcontextinterface)): *boolean*

*Defined in [packages/bodiless-components/src/asBreadcrumb.tsx:56](https://github.com/johnsonandjohnson/Bodiless-JS/blob/635d7ca/packages/bodiless-components/src/asBreadcrumb.tsx#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [BreadcrumbContextInterface](../globals.md#breadcrumbcontextinterface) |

**Returns:** *boolean*

___

### `Private` isActiveItemPathChanged

▸ **isActiveItemPathChanged**(`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype)): *boolean*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:215](https://github.com/johnsonandjohnson/Bodiless-JS/blob/635d7ca/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L215)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [BreadcrumbItemType](../globals.md#breadcrumbitemtype) |

**Returns:** *boolean*

___

### `Private` isNewActive

▸ **isNewActive**(`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype)): *boolean*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:203](https://github.com/johnsonandjohnson/Bodiless-JS/blob/635d7ca/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L203)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [BreadcrumbItemType](../globals.md#breadcrumbitemtype) |

**Returns:** *boolean*

___

###  setActiveItem

▸ **setActiveItem**(`item`: [BreadcrumbContextInterface](../globals.md#breadcrumbcontextinterface)): *void*

*Defined in [packages/bodiless-components/src/asBreadcrumb.tsx:49](https://github.com/johnsonandjohnson/Bodiless-JS/blob/635d7ca/packages/bodiless-components/src/asBreadcrumb.tsx#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [BreadcrumbContextInterface](../globals.md#breadcrumbcontextinterface) |

**Returns:** *void*

___

###  setItem

▸ **setItem**(`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype)): *object*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:225](https://github.com/johnsonandjohnson/Bodiless-JS/blob/635d7ca/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L225)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [BreadcrumbItemType](../globals.md#breadcrumbitemtype) |

**Returns:** *object*

* **getAncestors**(): *function*

  * (): *[BreadcrumbItemType](../globals.md#breadcrumbitemtype)[]*

* **hasPath**(): *function*

  * (`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype) | string): *boolean*

* **isAncestorOf**(): *function*

  * (`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype)): *boolean*

* **isDescendantOf**(): *function*

  * (`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype)): *boolean*

* **isEqual**(): *function*

  * (`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype) | string): *boolean*

* **isFirst**(): *function*

  * (): *boolean*

* **isLast**(): *function*

  * (): *boolean*

* **isSubpathOf**(): *function*

  * (`item`: [BreadcrumbItemType](../globals.md#breadcrumbitemtype) | string): *boolean*

* **link**: *[BreadcrumbItemLink](../globals.md#breadcrumbitemlink)*

* **parent**: *[BreadcrumbItemType](../globals.md#breadcrumbitemtype) | undefined*

* **setLink**(): *function*

  * (`link`: [BreadcrumbItemLink](../globals.md#breadcrumbitemlink)): *void*

* **setTitle**(): *function*

  * (`title`: [BreadcrumbItemTitle](../globals.md#breadcrumbitemtitle)): *void*

* **title**: *[BreadcrumbItemTitle](../globals.md#breadcrumbitemtitle)*

* **uuid**: *string*

___

### `Private` updateActive

▸ **updateActive**(): *void*

*Defined in [packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts:208](https://github.com/johnsonandjohnson/Bodiless-JS/blob/635d7ca/packages/bodiless-components/src/Breadcrumbs/BreadcrumbStore.ts#L208)*

**Returns:** *void*
