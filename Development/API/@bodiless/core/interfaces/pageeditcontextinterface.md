[@bodiless/core](../README.md) › [Globals](../globals.md) › [PageEditContextInterface](pageeditcontextinterface.md)

# Interface: PageEditContextInterface

## Hierarchy

* [CanBeActivated](canbeactivated.md)

* [CanControlEditMode](cancontroleditmode.md)

* [CanControlMenuPosition](cancontrolmenuposition.md)

* [CanGetContextMenuOptions](cangetcontextmenuoptions.md)

* [CanControlPageOverlay](cancontrolpageoverlay.md)

* [DefinesLocalEditContext](defineslocaleditcontext.md)

* [CanControlLocalTooltipsVisibility](cancontrollocaltooltipsvisibility.md)

  ↳ **PageEditContextInterface**

## Implemented by

* [PageEditContext](../classes/pageeditcontext.md)
* [StaticContext](../classes/staticcontext.md)

## Index

### Properties

* [activate](pageeditcontextinterface.md#activate)
* [areLocalTooltipsDisabled](pageeditcontextinterface.md#arelocaltooltipsdisabled)
* [contextMenuOptions](pageeditcontextinterface.md#contextmenuoptions)
* [getMenuOptions](pageeditcontextinterface.md#readonly-getmenuoptions)
* [hasLocalMenu](pageeditcontextinterface.md#haslocalmenu)
* [hidePageOverlay](pageeditcontextinterface.md#hidepageoverlay)
* [id](pageeditcontextinterface.md#readonly-id)
* [isActive](pageeditcontextinterface.md#isactive)
* [isEdit](pageeditcontextinterface.md#isedit)
* [isInnermost](pageeditcontextinterface.md#isinnermost)
* [isInnermostLocalMenu](pageeditcontextinterface.md#isinnermostlocalmenu)
* [isPositionToggled](pageeditcontextinterface.md#ispositiontoggled)
* [name](pageeditcontextinterface.md#readonly-name)
* [pageOverlay](pageeditcontextinterface.md#pageoverlay)
* [refresh](pageeditcontextinterface.md#refresh)
* [showError](pageeditcontextinterface.md#showerror)
* [showPageOverlay](pageeditcontextinterface.md#showpageoverlay)
* [spawn](pageeditcontextinterface.md#spawn)
* [toggleEdit](pageeditcontextinterface.md#toggleedit)
* [toggleLocalTooltipsDisabled](pageeditcontextinterface.md#togglelocaltooltipsdisabled)
* [togglePosition](pageeditcontextinterface.md#toggleposition)

## Properties

###  activate

• **activate**: *function*

*Inherited from [CanBeActivated](canbeactivated.md).[activate](canbeactivated.md#activate)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:70](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/types.ts#L70)*

#### Type declaration:

▸ (): *void*

___

###  areLocalTooltipsDisabled

• **areLocalTooltipsDisabled**: *boolean*

*Inherited from [CanControlLocalTooltipsVisibility](cancontrollocaltooltipsvisibility.md).[areLocalTooltipsDisabled](cancontrollocaltooltipsvisibility.md#arelocaltooltipsdisabled)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:54](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/types.ts#L54)*

___

###  contextMenuOptions

• **contextMenuOptions**: *[TMenuOption](../globals.md#tmenuoption)[]*

*Inherited from [CanGetContextMenuOptions](cangetcontextmenuoptions.md).[contextMenuOptions](cangetcontextmenuoptions.md#contextmenuoptions)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:58](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/types.ts#L58)*

___

### `Readonly` getMenuOptions

• **getMenuOptions**: *[TMenuOptionGetter](../globals.md#tmenuoptiongetter)*

*Overrides [DefinesLocalEditContext](defineslocaleditcontext.md).[getMenuOptions](defineslocaleditcontext.md#optional-getmenuoptions)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:97](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/types.ts#L97)*

___

###  hasLocalMenu

• **hasLocalMenu**: *boolean*

*Inherited from [CanBeActivated](canbeactivated.md).[hasLocalMenu](canbeactivated.md#haslocalmenu)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:68](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/types.ts#L68)*

___

###  hidePageOverlay

• **hidePageOverlay**: *function*

*Inherited from [CanControlPageOverlay](cancontrolpageoverlay.md).[hidePageOverlay](cancontrolpageoverlay.md#hidepageoverlay)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:50](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/types.ts#L50)*

#### Type declaration:

▸ (`settings?`: [TOverlaySettings](../globals.md#toverlaysettings)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings?` | [TOverlaySettings](../globals.md#toverlaysettings) |

___

### `Readonly` id

• **id**: *string*

*Overrides [DefinesLocalEditContext](defineslocaleditcontext.md).[id](defineslocaleditcontext.md#id)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:95](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/types.ts#L95)*

___

###  isActive

• **isActive**: *boolean*

*Inherited from [CanBeActivated](canbeactivated.md).[isActive](canbeactivated.md#isactive)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:66](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/types.ts#L66)*

___

###  isEdit

• **isEdit**: *boolean*

*Inherited from [CanControlEditMode](cancontroleditmode.md).[isEdit](cancontroleditmode.md#isedit)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:40](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/types.ts#L40)*

___

###  isInnermost

• **isInnermost**: *boolean*

*Inherited from [CanBeActivated](canbeactivated.md).[isInnermost](canbeactivated.md#isinnermost)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:67](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/types.ts#L67)*

___

###  isInnermostLocalMenu

• **isInnermostLocalMenu**: *boolean*

*Inherited from [CanBeActivated](canbeactivated.md).[isInnermostLocalMenu](canbeactivated.md#isinnermostlocalmenu)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:69](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/types.ts#L69)*

___

###  isPositionToggled

• **isPositionToggled**: *boolean*

*Inherited from [CanControlMenuPosition](cancontrolmenuposition.md).[isPositionToggled](cancontrolmenuposition.md#ispositiontoggled)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:44](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/types.ts#L44)*

___

### `Readonly` name

• **name**: *string*

*Overrides [DefinesLocalEditContext](defineslocaleditcontext.md).[name](defineslocaleditcontext.md#name)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:96](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/types.ts#L96)*

___

###  pageOverlay

• **pageOverlay**: *[TPageOverlayStore](../globals.md#tpageoverlaystore)*

*Inherited from [CanControlPageOverlay](cancontrolpageoverlay.md).[pageOverlay](cancontrolpageoverlay.md#pageoverlay)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:48](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/types.ts#L48)*

___

###  refresh

• **refresh**: *function*

*Inherited from [CanBeActivated](canbeactivated.md).[refresh](canbeactivated.md#refresh)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:71](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/types.ts#L71)*

#### Type declaration:

▸ (): *void*

___

###  showError

• **showError**: *function*

*Inherited from [CanControlPageOverlay](cancontrolpageoverlay.md).[showError](cancontrolpageoverlay.md#showerror)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:51](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/types.ts#L51)*

#### Type declaration:

▸ (`settings?`: [TOverlaySettings](../globals.md#toverlaysettings)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings?` | [TOverlaySettings](../globals.md#toverlaysettings) |

___

###  showPageOverlay

• **showPageOverlay**: *function*

*Inherited from [CanControlPageOverlay](cancontrolpageoverlay.md).[showPageOverlay](cancontrolpageoverlay.md#showpageoverlay)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:49](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/types.ts#L49)*

#### Type declaration:

▸ (`settings?`: [TOverlaySettings](../globals.md#toverlaysettings)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings?` | [TOverlaySettings](../globals.md#toverlaysettings) |

___

###  spawn

• **spawn**: *function*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:98](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/types.ts#L98)*

#### Type declaration:

▸ (`v`: [DefinesLocalEditContext](defineslocaleditcontext.md)): *[PageEditContextInterface](pageeditcontextinterface.md)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [DefinesLocalEditContext](defineslocaleditcontext.md) |

___

###  toggleEdit

• **toggleEdit**: *function*

*Inherited from [CanControlEditMode](cancontroleditmode.md).[toggleEdit](cancontroleditmode.md#toggleedit)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:41](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/types.ts#L41)*

#### Type declaration:

▸ (`mode?`: undefined | false | true): *void*

**Parameters:**

Name | Type |
------ | ------ |
`mode?` | undefined &#124; false &#124; true |

___

###  toggleLocalTooltipsDisabled

• **toggleLocalTooltipsDisabled**: *function*

*Inherited from [CanControlLocalTooltipsVisibility](cancontrollocaltooltipsvisibility.md).[toggleLocalTooltipsDisabled](cancontrollocaltooltipsvisibility.md#togglelocaltooltipsdisabled)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:55](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/types.ts#L55)*

#### Type declaration:

▸ (`isDisabled?`: undefined | false | true): *void*

**Parameters:**

Name | Type |
------ | ------ |
`isDisabled?` | undefined &#124; false &#124; true |

___

###  togglePosition

• **togglePosition**: *function*

*Inherited from [CanControlMenuPosition](cancontrolmenuposition.md).[togglePosition](cancontrolmenuposition.md#toggleposition)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:45](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/types.ts#L45)*

#### Type declaration:

▸ (`mode?`: undefined | false | true): *void*

**Parameters:**

Name | Type |
------ | ------ |
`mode?` | undefined &#124; false &#124; true |
