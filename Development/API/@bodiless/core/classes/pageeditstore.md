[@bodiless/core](../README.md) › [Globals](../globals.md) › [PageEditStore](pageeditstore.md)

# Class: PageEditStore

## Hierarchy

* **PageEditStore**

## Implements

* [PageEditStoreInterface](../interfaces/pageeditstoreinterface.md)

## Index

### Properties

* [activeContext](pageeditstore.md#activecontext)
* [areLocalTooltipsDisabled](pageeditstore.md#arelocaltooltipsdisabled)
* [contextMenuOptions](pageeditstore.md#contextmenuoptions)
* [isEdit](pageeditstore.md#isedit)
* [isPositionToggled](pageeditstore.md#ispositiontoggled)

### Accessors

* [contextTrail](pageeditstore.md#contexttrail)

### Methods

* [setActiveContext](pageeditstore.md#setactivecontext)
* [toggleEdit](pageeditstore.md#toggleedit)
* [toggleLocalTooltipsDisabled](pageeditstore.md#togglelocaltooltipsdisabled)
* [togglePosition](pageeditstore.md#toggleposition)

### Object literals

* [pageOverlay](pageeditstore.md#pageoverlay)

## Properties

###  activeContext

• **activeContext**: *[PageEditContext](pageeditcontext.md) | undefined* = undefined

*Implementation of [PageEditStoreInterface](../interfaces/pageeditstoreinterface.md).[activeContext](../interfaces/pageeditstoreinterface.md#activecontext)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:69](https://github.com/johnsonandjohnson/Bodiless-JS/blob/576af00/packages/bodiless-core/src/PageEditContext/index.tsx#L69)*

___

###  areLocalTooltipsDisabled

• **areLocalTooltipsDisabled**: *boolean* = false

*Implementation of [PageEditStoreInterface](../interfaces/pageeditstoreinterface.md).[areLocalTooltipsDisabled](../interfaces/pageeditstoreinterface.md#arelocaltooltipsdisabled)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:84](https://github.com/johnsonandjohnson/Bodiless-JS/blob/576af00/packages/bodiless-core/src/PageEditContext/index.tsx#L84)*

___

###  contextMenuOptions

• **contextMenuOptions**: *[TMenuOption](../globals.md#tmenuoption)[]* = []

*Implementation of [PageEditStoreInterface](../interfaces/pageeditstoreinterface.md).[contextMenuOptions](../interfaces/pageeditstoreinterface.md#contextmenuoptions)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:71](https://github.com/johnsonandjohnson/Bodiless-JS/blob/576af00/packages/bodiless-core/src/PageEditContext/index.tsx#L71)*

___

###  isEdit

• **isEdit**: *any* = getFromSessionStorage('isEdit', false)

*Implementation of [PageEditStoreInterface](../interfaces/pageeditstoreinterface.md).[isEdit](../interfaces/pageeditstoreinterface.md#isedit)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:73](https://github.com/johnsonandjohnson/Bodiless-JS/blob/576af00/packages/bodiless-core/src/PageEditContext/index.tsx#L73)*

___

###  isPositionToggled

• **isPositionToggled**: *any* = getFromSessionStorage('isPositionToggled', false)

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:75](https://github.com/johnsonandjohnson/Bodiless-JS/blob/576af00/packages/bodiless-core/src/PageEditContext/index.tsx#L75)*

## Accessors

###  contextTrail

• **get contextTrail**(): *string[]*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:124](https://github.com/johnsonandjohnson/Bodiless-JS/blob/576af00/packages/bodiless-core/src/PageEditContext/index.tsx#L124)*

**Returns:** *string[]*

## Methods

###  setActiveContext

▸ **setActiveContext**(`context?`: [PageEditContext](pageeditcontext.md)): *void*

*Implementation of [PageEditStoreInterface](../interfaces/pageeditstoreinterface.md)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:87](https://github.com/johnsonandjohnson/Bodiless-JS/blob/576af00/packages/bodiless-core/src/PageEditContext/index.tsx#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`context?` | [PageEditContext](pageeditcontext.md) |

**Returns:** *void*

___

###  toggleEdit

▸ **toggleEdit**(`on?`: undefined | false | true): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:96](https://github.com/johnsonandjohnson/Bodiless-JS/blob/576af00/packages/bodiless-core/src/PageEditContext/index.tsx#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`on?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  toggleLocalTooltipsDisabled

▸ **toggleLocalTooltipsDisabled**(`isDisabled?`: undefined | false | true): *void*

*Implementation of [PageEditStoreInterface](../interfaces/pageeditstoreinterface.md)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:116](https://github.com/johnsonandjohnson/Bodiless-JS/blob/576af00/packages/bodiless-core/src/PageEditContext/index.tsx#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`isDisabled?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  togglePosition

▸ **togglePosition**(`on?`: undefined | false | true): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:106](https://github.com/johnsonandjohnson/Bodiless-JS/blob/576af00/packages/bodiless-core/src/PageEditContext/index.tsx#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`on?` | undefined &#124; false &#124; true |

**Returns:** *void*

## Object literals

###  pageOverlay

### ▪ **pageOverlay**: *object*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:77](https://github.com/johnsonandjohnson/Bodiless-JS/blob/576af00/packages/bodiless-core/src/PageEditContext/index.tsx#L77)*

###  timeoutId

• **timeoutId**: *number* = 0

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:81](https://github.com/johnsonandjohnson/Bodiless-JS/blob/576af00/packages/bodiless-core/src/PageEditContext/index.tsx#L81)*

▪ **data**: *object*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:78](https://github.com/johnsonandjohnson/Bodiless-JS/blob/576af00/packages/bodiless-core/src/PageEditContext/index.tsx#L78)*
