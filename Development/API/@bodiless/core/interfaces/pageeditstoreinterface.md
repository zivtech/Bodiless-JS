[@bodiless/core](../README.md) › [Globals](../globals.md) › [PageEditStoreInterface](pageeditstoreinterface.md)

# Interface: PageEditStoreInterface

## Hierarchy

* **PageEditStoreInterface**

## Implemented by

* [PageEditStore](../classes/pageeditstore.md)

## Index

### Properties

* [activeContext](pageeditstoreinterface.md#activecontext)
* [areLocalTooltipsDisabled](pageeditstoreinterface.md#arelocaltooltipsdisabled)
* [contextMenuOptions](pageeditstoreinterface.md#contextmenuoptions)
* [contextTrail](pageeditstoreinterface.md#contexttrail)
* [isEdit](pageeditstoreinterface.md#isedit)

### Methods

* [setActiveContext](pageeditstoreinterface.md#setactivecontext)
* [toggleEdit](pageeditstoreinterface.md#toggleedit)
* [toggleLocalTooltipsDisabled](pageeditstoreinterface.md#togglelocaltooltipsdisabled)
* [togglePosition](pageeditstoreinterface.md#toggleposition)

## Properties

###  activeContext

• **activeContext**: *[PageEditContextInterface](pageeditcontextinterface.md) | undefined*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:61](https://github.com/johnsonandjohnson/Bodiless-JS/blob/afa155a/packages/bodiless-core/src/PageEditContext/types.ts#L61)*

___

###  areLocalTooltipsDisabled

• **areLocalTooltipsDisabled**: *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:68](https://github.com/johnsonandjohnson/Bodiless-JS/blob/afa155a/packages/bodiless-core/src/PageEditContext/types.ts#L68)*

___

###  contextMenuOptions

• **contextMenuOptions**: *[TMenuOption](../globals.md#tmenuoption)[]*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:62](https://github.com/johnsonandjohnson/Bodiless-JS/blob/afa155a/packages/bodiless-core/src/PageEditContext/types.ts#L62)*

___

###  contextTrail

• **contextTrail**: *string[]*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:67](https://github.com/johnsonandjohnson/Bodiless-JS/blob/afa155a/packages/bodiless-core/src/PageEditContext/types.ts#L67)*

___

###  isEdit

• **isEdit**: *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:63](https://github.com/johnsonandjohnson/Bodiless-JS/blob/afa155a/packages/bodiless-core/src/PageEditContext/types.ts#L63)*

## Methods

###  setActiveContext

▸ **setActiveContext**(`context?`: [PageEditContextInterface](pageeditcontextinterface.md)): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:64](https://github.com/johnsonandjohnson/Bodiless-JS/blob/afa155a/packages/bodiless-core/src/PageEditContext/types.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`context?` | [PageEditContextInterface](pageeditcontextinterface.md) |

**Returns:** *void*

___

###  toggleEdit

▸ **toggleEdit**(): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:65](https://github.com/johnsonandjohnson/Bodiless-JS/blob/afa155a/packages/bodiless-core/src/PageEditContext/types.ts#L65)*

**Returns:** *void*

___

###  toggleLocalTooltipsDisabled

▸ **toggleLocalTooltipsDisabled**(`isDisabled?`: undefined | false | true): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:69](https://github.com/johnsonandjohnson/Bodiless-JS/blob/afa155a/packages/bodiless-core/src/PageEditContext/types.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`isDisabled?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  togglePosition

▸ **togglePosition**(): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:66](https://github.com/johnsonandjohnson/Bodiless-JS/blob/afa155a/packages/bodiless-core/src/PageEditContext/types.ts#L66)*

**Returns:** *void*
