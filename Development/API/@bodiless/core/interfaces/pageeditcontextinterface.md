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
* [peerContexts](pageeditcontextinterface.md#readonly-peercontexts)
* [registerPeer](pageeditcontextinterface.md#registerpeer)
* [showError](pageeditcontextinterface.md#showerror)
* [showPageOverlay](pageeditcontextinterface.md#showpageoverlay)
* [spawn](pageeditcontextinterface.md#spawn)
* [toggleEdit](pageeditcontextinterface.md#toggleedit)
* [toggleLocalTooltipsDisabled](pageeditcontextinterface.md#togglelocaltooltipsdisabled)
* [togglePosition](pageeditcontextinterface.md#toggleposition)
* [unregisterPeer](pageeditcontextinterface.md#unregisterpeer)
* [updateMenuOptions](pageeditcontextinterface.md#updatemenuoptions)

## Properties

###  activate

• **activate**: *function*

*Inherited from [CanBeActivated](canbeactivated.md).[activate](canbeactivated.md#activate)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:59](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L59)*

#### Type declaration:

▸ (): *void*

___

###  areLocalTooltipsDisabled

• **areLocalTooltipsDisabled**: *boolean*

*Inherited from [CanControlLocalTooltipsVisibility](cancontrollocaltooltipsvisibility.md).[areLocalTooltipsDisabled](cancontrollocaltooltipsvisibility.md#arelocaltooltipsdisabled)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:31](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L31)*

___

###  contextMenuOptions

• **contextMenuOptions**: *[TMenuOption](../globals.md#tmenuoption)[]*

*Inherited from [CanGetContextMenuOptions](cangetcontextmenuoptions.md).[contextMenuOptions](cangetcontextmenuoptions.md#contextmenuoptions)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:46](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L46)*

___

### `Readonly` getMenuOptions

• **getMenuOptions**: *[TMenuOptionGetter](../globals.md#tmenuoptiongetter)*

*Overrides [DefinesLocalEditContext](defineslocaleditcontext.md).[getMenuOptions](defineslocaleditcontext.md#optional-getmenuoptions)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:97](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L97)*

Function property which gets the menu options associated with this context.

___

###  hasLocalMenu

• **hasLocalMenu**: *boolean*

*Inherited from [CanBeActivated](canbeactivated.md).[hasLocalMenu](canbeactivated.md#haslocalmenu)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:57](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L57)*

___

###  hidePageOverlay

• **hidePageOverlay**: *function*

*Inherited from [CanControlPageOverlay](cancontrolpageoverlay.md).[hidePageOverlay](cancontrolpageoverlay.md#hidepageoverlay)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:42](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L42)*

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

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:85](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L85)*

___

###  isActive

• **isActive**: *boolean*

*Inherited from [CanBeActivated](canbeactivated.md).[isActive](canbeactivated.md#isactive)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:55](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L55)*

___

###  isEdit

• **isEdit**: *boolean*

*Inherited from [CanControlEditMode](cancontroleditmode.md).[isEdit](cancontroleditmode.md#isedit)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:27](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L27)*

___

###  isInnermost

• **isInnermost**: *boolean*

*Inherited from [CanBeActivated](canbeactivated.md).[isInnermost](canbeactivated.md#isinnermost)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:56](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L56)*

___

###  isInnermostLocalMenu

• **isInnermostLocalMenu**: *boolean*

*Inherited from [CanBeActivated](canbeactivated.md).[isInnermostLocalMenu](canbeactivated.md#isinnermostlocalmenu)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:58](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L58)*

___

###  isPositionToggled

• **isPositionToggled**: *boolean*

*Inherited from [CanControlMenuPosition](cancontrolmenuposition.md).[isPositionToggled](cancontrolmenuposition.md#ispositiontoggled)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:36](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L36)*

___

### `Readonly` name

• **name**: *string*

*Overrides [DefinesLocalEditContext](defineslocaleditcontext.md).[name](defineslocaleditcontext.md#optional-name)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:86](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L86)*

___

###  pageOverlay

• **pageOverlay**: *[TPageOverlayStore](../globals.md#tpageoverlaystore)*

*Inherited from [CanControlPageOverlay](cancontrolpageoverlay.md).[pageOverlay](cancontrolpageoverlay.md#pageoverlay)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:40](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L40)*

___

### `Optional` `Readonly` parent

• **parent**? : *[PageEditContextInterface](pageeditcontextinterface.md)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:87](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L87)*

___

### `Readonly` peerContexts

• **peerContexts**: *[PageEditContextInterface](pageeditcontextinterface.md)[]*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:92](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L92)*

The "peer" contexts registered with this context.  Peer contexts contribute their menu
options when the context wo which they are registered becomes active.

___

###  registerPeer

• **registerPeer**: *function*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:106](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L106)*

Register a peer of this context (another context which will be activagted along with this one)

#### Type declaration:

▸ (`c`: [PageEditContextInterface](pageeditcontextinterface.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`c` | [PageEditContextInterface](pageeditcontextinterface.md) |

___

###  showError

• **showError**: *function*

*Inherited from [CanControlPageOverlay](cancontrolpageoverlay.md).[showError](cancontrolpageoverlay.md#showerror)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:43](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L43)*

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

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:41](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L41)*

#### Type declaration:

▸ (`settings?`: [TOverlaySettings](../globals.md#toverlaysettings)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`settings?` | [TOverlaySettings](../globals.md#toverlaysettings) |

___

###  spawn

• **spawn**: *function*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:102](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L102)*

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

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:28](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L28)*

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

*Inherited from [CanControlMenuPosition](cancontrolmenuposition.md).[togglePosition](cancontrolmenuposition.md#toggleposition)*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:37](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L37)*

#### Type declaration:

▸ (`mode?`: undefined | false | true): *void*

**Parameters:**

Name | Type |
------ | ------ |
`mode?` | undefined &#124; false &#124; true |

___

###  unregisterPeer

• **unregisterPeer**: *function*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:110](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L110)*

Unregister all peers.

#### Type declaration:

▸ (`c`: [PageEditContextInterface](pageeditcontextinterface.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`c` | [PageEditContextInterface](pageeditcontextinterface.md) |

___

###  updateMenuOptions

• **updateMenuOptions**: *function*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:93](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b0970b9/packages/bodiless-core/src/PageEditContext/types.ts#L93)*

#### Type declaration:

▸ (): *void*
