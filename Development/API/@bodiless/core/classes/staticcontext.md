[@bodiless/core](../README.md) › [Globals](../globals.md) › [StaticContext](staticcontext.md)

# Class: StaticContext

## Hierarchy

* **StaticContext**

## Implements

* [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)

## Index

### Properties

* [areLocalTooltipsDisabled](staticcontext.md#arelocaltooltipsdisabled)
* [contextMenuOptions](staticcontext.md#contextmenuoptions)
* [hasLocalMenu](staticcontext.md#haslocalmenu)
* [id](staticcontext.md#id)
* [isActive](staticcontext.md#isactive)
* [isEdit](staticcontext.md#isedit)
* [isInnermost](staticcontext.md#isinnermost)
* [isInnermostLocalMenu](staticcontext.md#isinnermostlocalmenu)
* [isPositionToggled](staticcontext.md#ispositiontoggled)
* [name](staticcontext.md#name)

### Methods

* [activate](staticcontext.md#activate)
* [getMenuOptions](staticcontext.md#getmenuoptions)
* [hidePageOverlay](staticcontext.md#hidepageoverlay)
* [refresh](staticcontext.md#refresh)
* [showError](staticcontext.md#showerror)
* [showPageOverlay](staticcontext.md#showpageoverlay)
* [spawn](staticcontext.md#spawn)
* [toggleEdit](staticcontext.md#toggleedit)
* [toggleLocalTooltipsDisabled](staticcontext.md#togglelocaltooltipsdisabled)
* [togglePosition](staticcontext.md#toggleposition)

### Object literals

* [pageOverlay](staticcontext.md#pageoverlay)

## Properties

###  areLocalTooltipsDisabled

• **areLocalTooltipsDisabled**: *boolean* = false

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[areLocalTooltipsDisabled](../interfaces/pageeditcontextinterface.md#arelocaltooltipsdisabled)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:60](https://github.com/johnsonandjohnson/Bodiless-JS/blob/d3d522b/packages/bodiless-core/src/components/StaticPage.tsx#L60)*

___

###  contextMenuOptions

• **contextMenuOptions**: *never[]* = []

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[contextMenuOptions](../interfaces/pageeditcontextinterface.md#contextmenuoptions)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:39](https://github.com/johnsonandjohnson/Bodiless-JS/blob/d3d522b/packages/bodiless-core/src/components/StaticPage.tsx#L39)*

___

###  hasLocalMenu

• **hasLocalMenu**: *boolean* = false

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[hasLocalMenu](../interfaces/pageeditcontextinterface.md#haslocalmenu)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:25](https://github.com/johnsonandjohnson/Bodiless-JS/blob/d3d522b/packages/bodiless-core/src/components/StaticPage.tsx#L25)*

___

###  id

• **id**: *string* = "static"

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[id](../interfaces/pageeditcontextinterface.md#readonly-id)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:43](https://github.com/johnsonandjohnson/Bodiless-JS/blob/d3d522b/packages/bodiless-core/src/components/StaticPage.tsx#L43)*

___

###  isActive

• **isActive**: *boolean* = false

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[isActive](../interfaces/pageeditcontextinterface.md#isactive)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:21](https://github.com/johnsonandjohnson/Bodiless-JS/blob/d3d522b/packages/bodiless-core/src/components/StaticPage.tsx#L21)*

___

###  isEdit

• **isEdit**: *boolean* = false

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[isEdit](../interfaces/pageeditcontextinterface.md#isedit)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:31](https://github.com/johnsonandjohnson/Bodiless-JS/blob/d3d522b/packages/bodiless-core/src/components/StaticPage.tsx#L31)*

___

###  isInnermost

• **isInnermost**: *boolean* = false

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[isInnermost](../interfaces/pageeditcontextinterface.md#isinnermost)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:23](https://github.com/johnsonandjohnson/Bodiless-JS/blob/d3d522b/packages/bodiless-core/src/components/StaticPage.tsx#L23)*

___

###  isInnermostLocalMenu

• **isInnermostLocalMenu**: *boolean* = false

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[isInnermostLocalMenu](../interfaces/pageeditcontextinterface.md#isinnermostlocalmenu)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:45](https://github.com/johnsonandjohnson/Bodiless-JS/blob/d3d522b/packages/bodiless-core/src/components/StaticPage.tsx#L45)*

___

###  isPositionToggled

• **isPositionToggled**: *boolean* = false

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[isPositionToggled](../interfaces/pageeditcontextinterface.md#ispositiontoggled)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:35](https://github.com/johnsonandjohnson/Bodiless-JS/blob/d3d522b/packages/bodiless-core/src/components/StaticPage.tsx#L35)*

___

###  name

• **name**: *string* = "Static"

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[name](../interfaces/pageeditcontextinterface.md#readonly-name)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:41](https://github.com/johnsonandjohnson/Bodiless-JS/blob/d3d522b/packages/bodiless-core/src/components/StaticPage.tsx#L41)*

## Methods

###  activate

▸ **activate**(): *undefined*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:27](https://github.com/johnsonandjohnson/Bodiless-JS/blob/d3d522b/packages/bodiless-core/src/components/StaticPage.tsx#L27)*

**Returns:** *undefined*

___

###  getMenuOptions

▸ **getMenuOptions**(): *never[]*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:52](https://github.com/johnsonandjohnson/Bodiless-JS/blob/d3d522b/packages/bodiless-core/src/components/StaticPage.tsx#L52)*

**Returns:** *never[]*

___

###  hidePageOverlay

▸ **hidePageOverlay**(): *undefined*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:56](https://github.com/johnsonandjohnson/Bodiless-JS/blob/d3d522b/packages/bodiless-core/src/components/StaticPage.tsx#L56)*

**Returns:** *undefined*

___

###  refresh

▸ **refresh**(): *undefined*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:29](https://github.com/johnsonandjohnson/Bodiless-JS/blob/d3d522b/packages/bodiless-core/src/components/StaticPage.tsx#L29)*

**Returns:** *undefined*

___

###  showError

▸ **showError**(): *undefined*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:58](https://github.com/johnsonandjohnson/Bodiless-JS/blob/d3d522b/packages/bodiless-core/src/components/StaticPage.tsx#L58)*

**Returns:** *undefined*

___

###  showPageOverlay

▸ **showPageOverlay**(): *undefined*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:54](https://github.com/johnsonandjohnson/Bodiless-JS/blob/d3d522b/packages/bodiless-core/src/components/StaticPage.tsx#L54)*

**Returns:** *undefined*

___

###  spawn

▸ **spawn**(): *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:66](https://github.com/johnsonandjohnson/Bodiless-JS/blob/d3d522b/packages/bodiless-core/src/components/StaticPage.tsx#L66)*

**Returns:** *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)*

___

###  toggleEdit

▸ **toggleEdit**(): *undefined*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:33](https://github.com/johnsonandjohnson/Bodiless-JS/blob/d3d522b/packages/bodiless-core/src/components/StaticPage.tsx#L33)*

**Returns:** *undefined*

___

###  toggleLocalTooltipsDisabled

▸ **toggleLocalTooltipsDisabled**(): *undefined*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:62](https://github.com/johnsonandjohnson/Bodiless-JS/blob/d3d522b/packages/bodiless-core/src/components/StaticPage.tsx#L62)*

**Returns:** *undefined*

___

###  togglePosition

▸ **togglePosition**(): *undefined*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:37](https://github.com/johnsonandjohnson/Bodiless-JS/blob/d3d522b/packages/bodiless-core/src/components/StaticPage.tsx#L37)*

**Returns:** *undefined*

## Object literals

###  pageOverlay

### ▪ **pageOverlay**: *object*

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[pageOverlay](../interfaces/pageeditcontextinterface.md#pageoverlay)*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:47](https://github.com/johnsonandjohnson/Bodiless-JS/blob/d3d522b/packages/bodiless-core/src/components/StaticPage.tsx#L47)*

###  data

• **data**: *object*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:48](https://github.com/johnsonandjohnson/Bodiless-JS/blob/d3d522b/packages/bodiless-core/src/components/StaticPage.tsx#L48)*

#### Type declaration:

###  timeoutId

• **timeoutId**: *number* = 0

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:49](https://github.com/johnsonandjohnson/Bodiless-JS/blob/d3d522b/packages/bodiless-core/src/components/StaticPage.tsx#L49)*
