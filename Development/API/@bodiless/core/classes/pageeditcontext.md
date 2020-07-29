[@bodiless/core](../README.md) › [Globals](../globals.md) › [PageEditContext](pageeditcontext.md)

# Class: PageEditContext

## Hierarchy

* **PageEditContext**

## Implements

* [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)

## Index

### Constructors

* [constructor](pageeditcontext.md#constructor)

### Properties

* [hasLocalMenu](pageeditcontext.md#haslocalmenu)
* [id](pageeditcontext.md#readonly-id)
* [name](pageeditcontext.md#readonly-name)
* [parent](pageeditcontext.md#readonly-parent)
* [store](pageeditcontext.md#private-store)
* [Provider](pageeditcontext.md#static-provider)
* [context](pageeditcontext.md#static-context)

### Accessors

* [areLocalTooltipsDisabled](pageeditcontext.md#arelocaltooltipsdisabled)
* [contextMenuOptions](pageeditcontext.md#contextmenuoptions)
* [isActive](pageeditcontext.md#isactive)
* [isEdit](pageeditcontext.md#isedit)
* [isInnermost](pageeditcontext.md#isinnermost)
* [isInnermostLocalMenu](pageeditcontext.md#isinnermostlocalmenu)
* [isPositionToggled](pageeditcontext.md#ispositiontoggled)
* [pageOverlay](pageeditcontext.md#pageoverlay)

### Methods

* [activate](pageeditcontext.md#activate)
* [getMenuOptions](pageeditcontext.md#readonly-getmenuoptions)
* [hidePageOverlay](pageeditcontext.md#hidepageoverlay)
* [refresh](pageeditcontext.md#refresh)
* [showError](pageeditcontext.md#showerror)
* [showPageOverlay](pageeditcontext.md#showpageoverlay)
* [spawn](pageeditcontext.md#spawn)
* [toggleEdit](pageeditcontext.md#toggleedit)
* [toggleLocalTooltipsDisabled](pageeditcontext.md#togglelocaltooltipsdisabled)
* [togglePosition](pageeditcontext.md#toggleposition)
* [Consumer](pageeditcontext.md#static-consumer)

## Constructors

###  constructor

\+ **new PageEditContext**(`values?`: [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md), `parent?`: [PageEditContext](pageeditcontext.md)): *[PageEditContext](pageeditcontext.md)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:153](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L153)*

**Parameters:**

Name | Type |
------ | ------ |
`values?` | [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md) |
`parent?` | [PageEditContext](pageeditcontext.md) |

**Returns:** *[PageEditContext](pageeditcontext.md)*

## Properties

###  hasLocalMenu

• **hasLocalMenu**: *boolean* = false

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[hasLocalMenu](../interfaces/pageeditcontextinterface.md#haslocalmenu)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:153](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L153)*

___

### `Readonly` id

• **id**: *string* = v1()

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[id](../interfaces/pageeditcontextinterface.md#readonly-id)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:143](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L143)*

___

### `Readonly` name

• **name**: *string* = "PageEditContext"

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[name](../interfaces/pageeditcontextinterface.md#readonly-name)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:145](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L145)*

___

### `Readonly` parent

• **parent**: *[PageEditContext](pageeditcontext.md) | undefined*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:149](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L149)*

___

### `Private` store

• **store**: *PageEditStore* = defaultStore

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:151](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L151)*

___

### `Static` Provider

▪ **Provider**: *ProviderExoticComponent‹ProviderProps‹[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)››* = PageEditContext.context.Provider

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:181](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L181)*

___

### `Static` context

▪ **context**: *Context‹[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)›* = React.createContext(
    new PageEditContext() as PageEditContextInterface,
  )

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:168](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L168)*

## Accessors

###  areLocalTooltipsDisabled

• **get areLocalTooltipsDisabled**(): *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:281](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L281)*

**Returns:** *boolean*

___

###  contextMenuOptions

• **get contextMenuOptions**(): *object[]*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:238](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L238)*

**Returns:** *object[]*

___

###  isActive

• **get isActive**(): *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:199](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L199)*

**Returns:** *boolean*

___

###  isEdit

• **get isEdit**(): *any*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:222](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L222)*

**Returns:** *any*

___

###  isInnermost

• **get isInnermost**(): *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:203](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L203)*

**Returns:** *boolean*

___

###  isInnermostLocalMenu

• **get isInnermostLocalMenu**(): *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:209](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L209)*

**Returns:** *boolean*

___

###  isPositionToggled

• **get isPositionToggled**(): *any*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:230](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L230)*

**Returns:** *any*

___

###  pageOverlay

• **get pageOverlay**(): *object*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:242](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L242)*

**Returns:** *object*

* **data**: *[TOverlaySettings](../globals.md#toverlaysettings)*

* **timeoutId**: *number*

## Methods

###  activate

▸ **activate**(): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:189](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L189)*

**Returns:** *void*

___

### `Readonly` getMenuOptions

▸ **getMenuOptions**(): *never[]*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:147](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L147)*

**Returns:** *never[]*

___

###  hidePageOverlay

▸ **hidePageOverlay**(): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:265](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L265)*

**Returns:** *void*

___

###  refresh

▸ **refresh**(): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:193](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L193)*

**Returns:** *void*

___

###  showError

▸ **showError**(`passedSettings`: [TOverlaySettings](../globals.md#toverlaysettings) | undefined): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:271](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L271)*

**Parameters:**

Name | Type |
------ | ------ |
`passedSettings` | [TOverlaySettings](../globals.md#toverlaysettings) &#124; undefined |

**Returns:** *void*

___

###  showPageOverlay

▸ **showPageOverlay**(`passedSettings`: [TOverlaySettings](../globals.md#toverlaysettings) | undefined): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:246](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L246)*

**Parameters:**

Name | Type |
------ | ------ |
`passedSettings` | [TOverlaySettings](../globals.md#toverlaysettings) &#124; undefined |

**Returns:** *void*

___

###  spawn

▸ **spawn**(`values`: [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md)): *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:184](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L184)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md) |

**Returns:** *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)*

___

###  toggleEdit

▸ **toggleEdit**(`on?`: undefined | false | true): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:226](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L226)*

**Parameters:**

Name | Type |
------ | ------ |
`on?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  toggleLocalTooltipsDisabled

▸ **toggleLocalTooltipsDisabled**(`isDisabled?`: undefined | false | true): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:285](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L285)*

**Parameters:**

Name | Type |
------ | ------ |
`isDisabled?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  togglePosition

▸ **togglePosition**(`on?`: undefined | false | true): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:234](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L234)*

**Parameters:**

Name | Type |
------ | ------ |
`on?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

### `Static` Consumer

▸ **Consumer**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:175](https://github.com/johnsonandjohnson/Bodiless-JS/blob/b209a96/packages/bodiless-core/src/PageEditContext/index.tsx#L175)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | function &#124; function & string &#124; function & number &#124; function & false &#124; function & true &#124; function & ReactElement‹any, string &#124; function &#124; object› &#124; function & ReactNodeArray‹› &#124; function & ReactPortal‹› |

**Returns:** *Element‹›*
