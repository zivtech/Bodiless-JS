[@bodiless/core](../README.md) › [Globals](../globals.md) › [ReadOnlyContext](readonlycontext.md)

# Class: ReadOnlyContext

## Hierarchy

* [PageEditContext](pageeditcontext.md)

  ↳ **ReadOnlyContext**

## Implements

* [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)

## Index

### Constructors

* [constructor](readonlycontext.md#constructor)

### Properties

* [hasLocalMenu](readonlycontext.md#haslocalmenu)
* [id](readonlycontext.md#readonly-id)
* [name](readonlycontext.md#readonly-name)
* [parent](readonlycontext.md#readonly-parent)
* [peerContexts](readonlycontext.md#peercontexts)
* [Provider](readonlycontext.md#static-provider)
* [context](readonlycontext.md#static-context)

### Accessors

* [allMenuOptions](readonlycontext.md#allmenuoptions)
* [areLocalTooltipsDisabled](readonlycontext.md#arelocaltooltipsdisabled)
* [contextMenuOptions](readonlycontext.md#contextmenuoptions)
* [isActive](readonlycontext.md#isactive)
* [isEdit](readonlycontext.md#isedit)
* [isInnermost](readonlycontext.md#isinnermost)
* [isInnermostLocalMenu](readonlycontext.md#isinnermostlocalmenu)
* [isPositionToggled](readonlycontext.md#ispositiontoggled)
* [pageOverlay](readonlycontext.md#pageoverlay)

### Methods

* [activate](readonlycontext.md#activate)
* [getMenuOptions](readonlycontext.md#readonly-getmenuoptions)
* [hidePageOverlay](readonlycontext.md#hidepageoverlay)
* [refresh](readonlycontext.md#refresh)
* [registerPeer](readonlycontext.md#registerpeer)
* [showError](readonlycontext.md#showerror)
* [showPageOverlay](readonlycontext.md#showpageoverlay)
* [spawn](readonlycontext.md#spawn)
* [toggleEdit](readonlycontext.md#toggleedit)
* [toggleLocalTooltipsDisabled](readonlycontext.md#togglelocaltooltipsdisabled)
* [togglePosition](readonlycontext.md#toggleposition)
* [Consumer](readonlycontext.md#static-consumer)

## Constructors

###  constructor

\+ **new ReadOnlyContext**(`values?`: [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md), `parent?`: [PageEditContext](pageeditcontext.md)): *[ReadOnlyContext](readonlycontext.md)*

*Inherited from [PageEditContext](pageeditcontext.md).[constructor](pageeditcontext.md#constructor)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:161](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L161)*

**Parameters:**

Name | Type |
------ | ------ |
`values?` | [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md) |
`parent?` | [PageEditContext](pageeditcontext.md) |

**Returns:** *[ReadOnlyContext](readonlycontext.md)*

## Properties

###  hasLocalMenu

• **hasLocalMenu**: *boolean* = false

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[hasLocalMenu](../interfaces/pageeditcontextinterface.md#haslocalmenu)*

*Inherited from [PageEditContext](pageeditcontext.md).[hasLocalMenu](pageeditcontext.md#haslocalmenu)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:161](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L161)*

___

### `Readonly` id

• **id**: *string* = v1()

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[id](../interfaces/pageeditcontextinterface.md#readonly-id)*

*Inherited from [PageEditContext](pageeditcontext.md).[id](pageeditcontext.md#readonly-id)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:151](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L151)*

___

### `Readonly` name

• **name**: *string* = "PageEditContext"

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[name](../interfaces/pageeditcontextinterface.md#readonly-name)*

*Inherited from [PageEditContext](pageeditcontext.md).[name](pageeditcontext.md#readonly-name)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:153](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L153)*

___

### `Readonly` parent

• **parent**: *[PageEditContext](pageeditcontext.md) | undefined*

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[parent](../interfaces/pageeditcontextinterface.md#optional-readonly-parent)*

*Inherited from [PageEditContext](pageeditcontext.md).[parent](pageeditcontext.md#readonly-parent)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:157](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L157)*

___

###  peerContexts

• **peerContexts**: *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)[]* = []

*Inherited from [PageEditContext](pageeditcontext.md).[peerContexts](pageeditcontext.md#peercontexts)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:176](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L176)*

___

### `Static` Provider

▪ **Provider**: *ProviderExoticComponent‹ProviderProps‹[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)››* = PageEditContext.context.Provider

*Inherited from [PageEditContext](pageeditcontext.md).[Provider](pageeditcontext.md#static-provider)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:209](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L209)*

___

### `Static` context

▪ **context**: *Context‹[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)›* = React.createContext<PageEditContextInterface>(new PageEditContext())

*Inherited from [PageEditContext](pageeditcontext.md).[context](pageeditcontext.md#static-context)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:198](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L198)*

## Accessors

###  allMenuOptions

• **get allMenuOptions**(): *object[]*

*Inherited from [PageEditContext](pageeditcontext.md).[allMenuOptions](pageeditcontext.md#allmenuoptions)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:186](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L186)*

**Returns:** *object[]*

___

###  areLocalTooltipsDisabled

• **get areLocalTooltipsDisabled**(): *boolean*

*Inherited from [PageEditContext](pageeditcontext.md).[areLocalTooltipsDisabled](pageeditcontext.md#arelocaltooltipsdisabled)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:309](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L309)*

**Returns:** *boolean*

___

###  contextMenuOptions

• **get contextMenuOptions**(): *object[]*

*Inherited from [PageEditContext](pageeditcontext.md).[contextMenuOptions](pageeditcontext.md#contextmenuoptions)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:266](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L266)*

**Returns:** *object[]*

___

###  isActive

• **get isActive**(): *boolean*

*Inherited from [PageEditContext](pageeditcontext.md).[isActive](pageeditcontext.md#isactive)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:227](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L227)*

**Returns:** *boolean*

___

###  isEdit

• **get isEdit**(): *boolean*

*Overrides [PageEditContext](pageeditcontext.md).[isEdit](pageeditcontext.md#isedit)*

*Defined in [packages/bodiless-core/src/asReadOnly.tsx:21](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/asReadOnly.tsx#L21)*

**Returns:** *boolean*

___

###  isInnermost

• **get isInnermost**(): *boolean*

*Inherited from [PageEditContext](pageeditcontext.md).[isInnermost](pageeditcontext.md#isinnermost)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:231](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L231)*

**Returns:** *boolean*

___

###  isInnermostLocalMenu

• **get isInnermostLocalMenu**(): *boolean*

*Inherited from [PageEditContext](pageeditcontext.md).[isInnermostLocalMenu](pageeditcontext.md#isinnermostlocalmenu)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:237](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L237)*

**Returns:** *boolean*

___

###  isPositionToggled

• **get isPositionToggled**(): *any*

*Inherited from [PageEditContext](pageeditcontext.md).[isPositionToggled](pageeditcontext.md#ispositiontoggled)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:258](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L258)*

**Returns:** *any*

___

###  pageOverlay

• **get pageOverlay**(): *object*

*Inherited from [PageEditContext](pageeditcontext.md).[pageOverlay](pageeditcontext.md#pageoverlay)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:270](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L270)*

**Returns:** *object*

* **data**: *[TOverlaySettings](../globals.md#toverlaysettings)*

* **timeoutId**: *number*

## Methods

###  activate

▸ **activate**(): *void*

*Inherited from [PageEditContext](pageeditcontext.md).[activate](pageeditcontext.md#activate)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:217](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L217)*

**Returns:** *void*

___

### `Readonly` getMenuOptions

▸ **getMenuOptions**(): *never[]*

*Inherited from [PageEditContext](pageeditcontext.md).[getMenuOptions](pageeditcontext.md#readonly-getmenuoptions)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:155](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L155)*

**Returns:** *never[]*

___

###  hidePageOverlay

▸ **hidePageOverlay**(): *void*

*Inherited from [PageEditContext](pageeditcontext.md).[hidePageOverlay](pageeditcontext.md#hidepageoverlay)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:293](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L293)*

**Returns:** *void*

___

###  refresh

▸ **refresh**(): *void*

*Inherited from [PageEditContext](pageeditcontext.md).[refresh](pageeditcontext.md#refresh)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:221](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L221)*

**Returns:** *void*

___

###  registerPeer

▸ **registerPeer**(`values`: [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md)): *void*

*Inherited from [PageEditContext](pageeditcontext.md).[registerPeer](pageeditcontext.md#registerpeer)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:178](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L178)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md) |

**Returns:** *void*

___

###  showError

▸ **showError**(`passedSettings`: [TOverlaySettings](../globals.md#toverlaysettings) | undefined): *void*

*Inherited from [PageEditContext](pageeditcontext.md).[showError](pageeditcontext.md#showerror)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:299](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L299)*

**Parameters:**

Name | Type |
------ | ------ |
`passedSettings` | [TOverlaySettings](../globals.md#toverlaysettings) &#124; undefined |

**Returns:** *void*

___

###  showPageOverlay

▸ **showPageOverlay**(`passedSettings`: [TOverlaySettings](../globals.md#toverlaysettings) | undefined): *void*

*Inherited from [PageEditContext](pageeditcontext.md).[showPageOverlay](pageeditcontext.md#showpageoverlay)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:274](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L274)*

**Parameters:**

Name | Type |
------ | ------ |
`passedSettings` | [TOverlaySettings](../globals.md#toverlaysettings) &#124; undefined |

**Returns:** *void*

___

###  spawn

▸ **spawn**(`values`: [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md)): *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)*

*Inherited from [PageEditContext](pageeditcontext.md).[spawn](pageeditcontext.md#spawn)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:212](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L212)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md) |

**Returns:** *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)*

___

###  toggleEdit

▸ **toggleEdit**(`on?`: undefined | false | true): *void*

*Inherited from [PageEditContext](pageeditcontext.md).[toggleEdit](pageeditcontext.md#toggleedit)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:254](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L254)*

**Parameters:**

Name | Type |
------ | ------ |
`on?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  toggleLocalTooltipsDisabled

▸ **toggleLocalTooltipsDisabled**(`isDisabled?`: undefined | false | true): *void*

*Inherited from [PageEditContext](pageeditcontext.md).[toggleLocalTooltipsDisabled](pageeditcontext.md#togglelocaltooltipsdisabled)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:313](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L313)*

**Parameters:**

Name | Type |
------ | ------ |
`isDisabled?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  togglePosition

▸ **togglePosition**(`on?`: undefined | false | true): *void*

*Inherited from [PageEditContext](pageeditcontext.md).[togglePosition](pageeditcontext.md#toggleposition)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:262](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L262)*

**Parameters:**

Name | Type |
------ | ------ |
`on?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

### `Static` Consumer

▸ **Consumer**(`__namedParameters`: object): *Element‹›*

*Inherited from [PageEditContext](pageeditcontext.md).[Consumer](pageeditcontext.md#static-consumer)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:203](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8ae1edb/packages/bodiless-core/src/PageEditContext/index.tsx#L203)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | function &#124; function & string &#124; function & number &#124; function & false &#124; function & true &#124; function & ReactElement‹any, string &#124; function &#124; object› &#124; function & ReactNodeArray‹› &#124; function & ReactPortal‹› |

**Returns:** *Element‹›*
