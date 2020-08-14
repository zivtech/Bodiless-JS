[@bodiless/core](../README.md) › [Globals](../globals.md) › [PageEditStore](pageeditstore.md)

# Class: PageEditStore

## Hierarchy

* **PageEditStore**

## Implements

* [PageEditStore](pageeditstore.md)

## Implemented by

* [PageEditStore](pageeditstore.md)

## Index

### Properties

* [activeContext](pageeditstore.md#activecontext)
* [areLocalTooltipsDisabled](pageeditstore.md#arelocaltooltipsdisabled)
* [contextMenuOptions](pageeditstore.md#contextmenuoptions)
* [contextTrail](pageeditstore.md#contexttrail)
* [isEdit](pageeditstore.md#isedit)
* [isPositionToggled](pageeditstore.md#ispositiontoggled)

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

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:74](https://github.com/johnsonandjohnson/Bodiless-JS/blob/75ceb93/packages/bodiless-core/src/PageEditContext/types.ts#L74)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:76](https://github.com/johnsonandjohnson/Bodiless-JS/blob/75ceb93/packages/bodiless-core/src/PageEditContext/index.tsx#L76)*

___

###  areLocalTooltipsDisabled

• **areLocalTooltipsDisabled**: *boolean* = false

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:81](https://github.com/johnsonandjohnson/Bodiless-JS/blob/75ceb93/packages/bodiless-core/src/PageEditContext/types.ts#L81)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:91](https://github.com/johnsonandjohnson/Bodiless-JS/blob/75ceb93/packages/bodiless-core/src/PageEditContext/index.tsx#L91)*

___

###  contextMenuOptions

• **contextMenuOptions**: *[TMenuOption](../globals.md#tmenuoption)[]* = []

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:75](https://github.com/johnsonandjohnson/Bodiless-JS/blob/75ceb93/packages/bodiless-core/src/PageEditContext/types.ts#L75)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:78](https://github.com/johnsonandjohnson/Bodiless-JS/blob/75ceb93/packages/bodiless-core/src/PageEditContext/index.tsx#L78)*

___

###  contextTrail

• **get contextTrail**(): *string[]*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:134](https://github.com/johnsonandjohnson/Bodiless-JS/blob/75ceb93/packages/bodiless-core/src/PageEditContext/index.tsx#L134)*

**Returns:** *string[]*

___

###  isEdit

• **isEdit**: *any* = getFromSessionStorage('isEdit', false)

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:76](https://github.com/johnsonandjohnson/Bodiless-JS/blob/75ceb93/packages/bodiless-core/src/PageEditContext/types.ts#L76)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:80](https://github.com/johnsonandjohnson/Bodiless-JS/blob/75ceb93/packages/bodiless-core/src/PageEditContext/index.tsx#L80)*

___

###  isPositionToggled

• **isPositionToggled**: *any* = getFromSessionStorage('isPositionToggled', false)

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:82](https://github.com/johnsonandjohnson/Bodiless-JS/blob/75ceb93/packages/bodiless-core/src/PageEditContext/index.tsx#L82)*

## Methods

###  setActiveContext

▸ **setActiveContext**(`context?`: [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:77](https://github.com/johnsonandjohnson/Bodiless-JS/blob/75ceb93/packages/bodiless-core/src/PageEditContext/types.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`context?` | [PageEditContextInterface](../interfaces/pageeditcontextinterface.md) |

**Returns:** *void*

___

###  toggleEdit

▸ **toggleEdit**(): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:78](https://github.com/johnsonandjohnson/Bodiless-JS/blob/75ceb93/packages/bodiless-core/src/PageEditContext/types.ts#L78)*

**Returns:** *void*

___

###  toggleLocalTooltipsDisabled

▸ **toggleLocalTooltipsDisabled**(`isDisabled?`: undefined | false | true): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:82](https://github.com/johnsonandjohnson/Bodiless-JS/blob/75ceb93/packages/bodiless-core/src/PageEditContext/types.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`isDisabled?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  togglePosition

▸ **togglePosition**(): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:79](https://github.com/johnsonandjohnson/Bodiless-JS/blob/75ceb93/packages/bodiless-core/src/PageEditContext/types.ts#L79)*

**Returns:** *void*

## Object literals

###  pageOverlay

### ▪ **pageOverlay**: *object*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:84](https://github.com/johnsonandjohnson/Bodiless-JS/blob/75ceb93/packages/bodiless-core/src/PageEditContext/index.tsx#L84)*

###  timeoutId

• **timeoutId**: *number* = 0

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:88](https://github.com/johnsonandjohnson/Bodiless-JS/blob/75ceb93/packages/bodiless-core/src/PageEditContext/index.tsx#L88)*

▪ **data**: *object*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:85](https://github.com/johnsonandjohnson/Bodiless-JS/blob/75ceb93/packages/bodiless-core/src/PageEditContext/index.tsx#L85)*
