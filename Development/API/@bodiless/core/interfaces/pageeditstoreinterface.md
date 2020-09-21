[@bodiless/core](../README.md) › [Globals](../globals.md) › [PageEditStoreInterface](pageeditstoreinterface.md)

# Interface: PageEditStoreInterface

## Hierarchy

* [CanControlLocalTooltipsVisibility](cancontrollocaltooltipsvisibility.md)

  ↳ **PageEditStoreInterface**

## Implemented by

* [PageEditStore](../classes/pageeditstore.md)

## Index

### Properties

* [activeContext](pageeditstoreinterface.md#activecontext)
* [areLocalTooltipsDisabled](pageeditstoreinterface.md#arelocaltooltipsdisabled)
* [contextMenuOptions](pageeditstoreinterface.md#contextmenuoptions)
* [contextTrail](pageeditstoreinterface.md#contexttrail)
* [isEdit](pageeditstoreinterface.md#isedit)
* [isPositionToggled](pageeditstoreinterface.md#ispositiontoggled)
* [optionMap](pageeditstoreinterface.md#optionmap)
* [pageOverlay](pageeditstoreinterface.md#pageoverlay)
* [toggleEdit](pageeditstoreinterface.md#toggleedit)
* [toggleLocalTooltipsDisabled](pageeditstoreinterface.md#togglelocaltooltipsdisabled)
* [togglePosition](pageeditstoreinterface.md#toggleposition)
* [updateMenuOptions](pageeditstoreinterface.md#updatemenuoptions)

### Methods

* [setActiveContext](pageeditstoreinterface.md#setactivecontext)

## Properties

###  activeContext

• **activeContext**: *[PageEditContextInterface](pageeditcontextinterface.md) | undefined*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:62](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L62)*

___

###  areLocalTooltipsDisabled

• **areLocalTooltipsDisabled**: *boolean*

*Inherited from [CanControlLocalTooltipsVisibility](cancontrollocaltooltipsvisibility.md).[areLocalTooltipsDisabled](cancontrollocaltooltipsvisibility.md#arelocaltooltipsdisabled)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:31](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L31)*

___

###  contextMenuOptions

• **contextMenuOptions**: *[TMenuOption](../globals.md#tmenuoption)[]*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:64](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L64)*

___

###  contextTrail

• **contextTrail**: *string[]*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:70](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L70)*

___

###  isEdit

• **isEdit**: *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:65](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L65)*

___

###  isPositionToggled

• **isPositionToggled**: *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:66](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L66)*

___

###  optionMap

• **optionMap**: *Map‹string, Map‹string, [TMenuOption](../globals.md#tmenuoption)››*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:72](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L72)*

___

###  pageOverlay

• **pageOverlay**: *[TPageOverlayStore](../globals.md#tpageoverlaystore)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:71](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L71)*

___

###  toggleEdit

• **toggleEdit**: *function*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:68](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L68)*

#### Type declaration:

▸ (`on?`: undefined | false | true): *void*

**Parameters:**

Name | Type |
------ | ------ |
`on?` | undefined &#124; false &#124; true |

___

###  toggleLocalTooltipsDisabled

• **toggleLocalTooltipsDisabled**: *function*

*Inherited from [CanControlLocalTooltipsVisibility](cancontrollocaltooltipsvisibility.md).[toggleLocalTooltipsDisabled](cancontrollocaltooltipsvisibility.md#togglelocaltooltipsdisabled)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:32](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L32)*

#### Type declaration:

▸ (`isDisabled?`: undefined | false | true): *void*

**Parameters:**

Name | Type |
------ | ------ |
`isDisabled?` | undefined &#124; false &#124; true |

___

###  togglePosition

• **togglePosition**: *function*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:69](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L69)*

#### Type declaration:

▸ (`on?`: undefined | false | true): *void*

**Parameters:**

Name | Type |
------ | ------ |
`on?` | undefined &#124; false &#124; true |

___

###  updateMenuOptions

• **updateMenuOptions**: *function*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:63](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L63)*

#### Type declaration:

▸ (`contexts`: [PageEditContextInterface](pageeditcontextinterface.md)): *string[]*

**Parameters:**

Name | Type |
------ | ------ |
`contexts` | [PageEditContextInterface](pageeditcontextinterface.md) |

## Methods

###  setActiveContext

▸ **setActiveContext**(`context?`: [PageEditContextInterface](pageeditcontextinterface.md)): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:67](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`context?` | [PageEditContextInterface](pageeditcontextinterface.md) |

**Returns:** *void*
