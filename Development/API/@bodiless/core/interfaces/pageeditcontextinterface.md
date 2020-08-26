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
* [ReadOnlyContext](../classes/readonlycontext.md)
* [StaticContext](../classes/staticcontext.md)

## Index

### Properties

* [activate](pageeditcontextinterface.md#activate)
* [allMenuOptions](pageeditcontextinterface.md#readonly-allmenuoptions)
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
* [parent](pageeditcontextinterface.md#optional-readonly-parent)
* [refresh](pageeditcontextinterface.md#refresh)
* [registerPeer](pageeditcontextinterface.md#registerpeer)
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

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:57](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6bf6b1f/packages/bodiless-core/src/PageEditContext/types.ts#L57)*

#### Type declaration:

▸ (): *void*

___

### `Readonly` allMenuOptions

• **allMenuOptions**: *[TMenuOption](../globals.md#tmenuoption)[]*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:92](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6bf6b1f/packages/bodiless-core/src/PageEditContext/types.ts#L92)*

Prototype function which gets menu options associated with this context and any peers.

___

###  areLocalTooltipsDisabled

• **areLocalTooltipsDisabled**: *boolean*

*Inherited from [CanControlLocalTooltipsVisibility](cancontrollocaltooltipsvisibility.md).[areLocalTooltipsDisabled](cancontrollocaltooltipsvisibility.md#arelocaltooltipsdisabled)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:41](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6bf6b1f/packages/bodiless-core/src/PageEditContext/types.ts#L41)*

___

###  contextMenuOptions

• **contextMenuOptions**: *[TMenuOption](../globals.md#tmenuoption)[]*

*Inherited from [CanGetContextMenuOptions](cangetcontextmenuoptions.md).[contextMenuOptions](cangetcontextmenuoptions.md#contextmenuoptions)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:45](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6bf6b1f/packages/bodiless-core/src/PageEditContext/types.ts#L45)*

___

### `Readonly` getMenuOptions

• **getMenuOptions**: *[TMenuOptionGetter](../globals.md#tmenuoptiongetter)*

*Overrides [DefinesLocalEditContext](defineslocaleditcontext.md).[getMenuOptions](defineslocaleditcontext.md#optional-getmenuoptions)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:88](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6bf6b1f/packages/bodiless-core/src/PageEditContext/types.ts#L88)*

Function property which gets the menu options associated with this context.

___

###  hasLocalMenu

• **hasLocalMenu**: *boolean*

*Inherited from [CanBeActivated](canbeactivated.md).[hasLocalMenu](canbeactivated.md#haslocalmenu)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:55](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6bf6b1f/packages/bodiless-core/src/PageEditContext/types.ts#L55)*

___

###  hidePageOverlay

• **hidePageOverlay**: *function*

*Inherited from [CanControlPageOverlay](cancontrolpageoverlay.md).[hidePageOverlay](cancontrolpageoverlay.md#hidepageoverlay)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:37](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6bf6b1f/packages/bodiless-core/src/PageEditContext/types.ts#L37)*

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

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:82](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6bf6b1f/packages/bodiless-core/src/PageEditContext/types.ts#L82)*

___

###  isActive

• **isActive**: *boolean*

*Inherited from [CanBeActivated](canbeactivated.md).[isActive](canbeactivated.md#isactive)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:53](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6bf6b1f/packages/bodiless-core/src/PageEditContext/types.ts#L53)*

___

###  isEdit

• **isEdit**: *boolean*

*Inherited from [CanControlEditMode](cancontroleditmode.md).[isEdit](cancontroleditmode.md#isedit)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:27](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6bf6b1f/packages/bodiless-core/src/PageEditContext/types.ts#L27)*

___

###  isInnermost

• **isInnermost**: *boolean*

*Inherited from [CanBeActivated](canbeactivated.md).[isInnermost](canbeactivated.md#isinnermost)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:54](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6bf6b1f/packages/bodiless-core/src/PageEditContext/types.ts#L54)*

___

###  isInnermostLocalMenu

• **isInnermostLocalMenu**: *boolean*

*Inherited from [CanBeActivated](canbeactivated.md).[isInnermostLocalMenu](canbeactivated.md#isinnermostlocalmenu)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:56](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6bf6b1f/packages/bodiless-core/src/PageEditContext/types.ts#L56)*

___

###  isPositionToggled

• **isPositionToggled**: *boolean*

*Inherited from [CanControlMenuPosition](cancontrolmenuposition.md).[isPositionToggled](cancontrolmenuposition.md#ispositiontoggled)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:31](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6bf6b1f/packages/bodiless-core/src/PageEditContext/types.ts#L31)*

___

### `Readonly` name

• **name**: *string*

*Overrides [DefinesLocalEditContext](defineslocaleditcontext.md).[name](defineslocaleditcontext.md#name)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:83](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6bf6b1f/packages/bodiless-core/src/PageEditContext/types.ts#L83)*

___

###  pageOverlay

• **pageOverlay**: *[TPageOverlayStore](../globals.md#tpageoverlaystore)*

*Inherited from [CanControlPageOverlay](cancontrolpageoverlay.md).[pageOverlay](cancontrolpageoverlay.md#pageoverlay)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:35](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6bf6b1f/packages/bodiless-core/src/PageEditContext/types.ts#L35)*

___

### `Optional` `Readonly` parent

• **parent**? : *[PageEditContextInterface](pageeditcontextinterface.md)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:84](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6bf6b1f/packages/bodiless-core/src/PageEditContext/types.ts#L84)*

___

###  refresh

• **refresh**: *function*

*Inherited from [CanBeActivated](canbeactivated.md).[refresh](canbeactivated.md#refresh)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:58](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6bf6b1f/packages/bodiless-core/src/PageEditContext/types.ts#L58)*

#### Type declaration:

▸ (): *void*

___

###  registerPeer

• **registerPeer**: *function*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:101](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6bf6b1f/packages/bodiless-core/src/PageEditContext/types.ts#L101)*

Register a peer of this context (another context which will be activagted along with this one)

#### Type declaration:

▸ (`v`: [DefinesLocalEditContext](defineslocaleditcontext.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [DefinesLocalEditContext](defineslocaleditcontext.md) |

___

###  showError

• **showError**: *function*

*Inherited from [CanControlPageOverlay](cancontrolpageoverlay.md).[showError](cancontrolpageoverlay.md#showerror)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:38](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6bf6b1f/packages/bodiless-core/src/PageEditContext/types.ts#L38)*

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

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:36](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6bf6b1f/packages/bodiless-core/src/PageEditContext/types.ts#L36)*

#### Type declaration:

▸ (`settings?`: [TOverlaySettings](../globals.md#toverlaysettings)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings?` | [TOverlaySettings](../globals.md#toverlaysettings) |

___

###  spawn

• **spawn**: *function*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:97](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6bf6b1f/packages/bodiless-core/src/PageEditContext/types.ts#L97)*

Spawn a child of this context (another context which, when activaged, will also activate
this one and all of its ancestors).

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

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:28](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6bf6b1f/packages/bodiless-core/src/PageEditContext/types.ts#L28)*

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

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:42](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6bf6b1f/packages/bodiless-core/src/PageEditContext/types.ts#L42)*

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

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:32](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6bf6b1f/packages/bodiless-core/src/PageEditContext/types.ts#L32)*

#### Type declaration:

▸ (`mode?`: undefined | false | true): *void*

**Parameters:**

Name | Type |
------ | ------ |
`mode?` | undefined &#124; false &#124; true |
