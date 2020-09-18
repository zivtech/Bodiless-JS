[@bodiless/core](../README.md) › [Globals](../globals.md) › [PageEditContext](pageeditcontext.md)

# Class: PageEditContext

A Page Edit Context represents a particular state of the page editor, usually
defined by what element of the page is "active" or "focused". Currently, the
only bit of state tracked in the context are context menu options (along with
whether a context is "active", which can be used to highlight the component
which registered the context.
- Contexts are nested (so that a parent context is "active" when any of
its child contexts are active).
- Contexts are established using the React context API - and each PageEditContext
instance is a "value".
- The PageEditContext instance also contains a reference to the page edit store,
which tracks editor UI state (eg the currently active context).
- The react context container (created by React.createContext) of which the
PageEditContext instance is a value is available as a static property of the class via:
   - PageEditContext.context (the context object, suitable for use as a component contextType).
   - PageEditContext.Consumer (an observable version of PageEditContext.context.Consumer).
   - PageEditContext.Provider (equivalent to PageEditContext.context.Provider).
Singleton store.

## Hierarchy

* **PageEditContext**

  ↳ [ReadOnlyContext](readonlycontext.md)

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
* [peerContexts](pageeditcontext.md#peercontexts)
* [store](pageeditcontext.md#private-store)
* [Provider](pageeditcontext.md#static-provider)
* [context](pageeditcontext.md#static-context)

### Accessors

* [allMenuOptions](pageeditcontext.md#allmenuoptions)
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
* [registerPeer](pageeditcontext.md#registerpeer)
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

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:161](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L161)*

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

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:161](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L161)*

___

### `Readonly` id

• **id**: *string* = v1()

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[id](../interfaces/pageeditcontextinterface.md#readonly-id)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:151](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L151)*

___

### `Readonly` name

• **name**: *string* = "PageEditContext"

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[name](../interfaces/pageeditcontextinterface.md#readonly-name)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:153](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L153)*

___

### `Readonly` parent

• **parent**: *[PageEditContext](pageeditcontext.md) | undefined*

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[parent](../interfaces/pageeditcontextinterface.md#optional-readonly-parent)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:157](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L157)*

___

###  peerContexts

• **peerContexts**: *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)[]* = []

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:176](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L176)*

___

### `Private` store

• **store**: *[PageEditStore](pageeditstore.md)* = defaultStore

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:159](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L159)*

___

### `Static` Provider

▪ **Provider**: *ProviderExoticComponent‹ProviderProps‹[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)››* = PageEditContext.context.Provider

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:209](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L209)*

___

### `Static` context

▪ **context**: *Context‹[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)›* = React.createContext<PageEditContextInterface>(new PageEditContext())

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:198](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L198)*

## Accessors

###  allMenuOptions

• **get allMenuOptions**(): *object[]*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:186](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L186)*

**Returns:** *object[]*

___

###  areLocalTooltipsDisabled

• **get areLocalTooltipsDisabled**(): *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:309](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L309)*

**Returns:** *boolean*

___

###  contextMenuOptions

• **get contextMenuOptions**(): *object[]*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:266](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L266)*

**Returns:** *object[]*

___

###  isActive

• **get isActive**(): *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:227](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L227)*

**Returns:** *boolean*

___

###  isEdit

• **get isEdit**(): *any*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:250](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L250)*

**Returns:** *any*

___

###  isInnermost

• **get isInnermost**(): *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:231](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L231)*

**Returns:** *boolean*

___

###  isInnermostLocalMenu

• **get isInnermostLocalMenu**(): *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:237](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L237)*

**Returns:** *boolean*

___

###  isPositionToggled

• **get isPositionToggled**(): *any*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:258](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L258)*

**Returns:** *any*

___

###  pageOverlay

• **get pageOverlay**(): *object*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:270](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L270)*

**Returns:** *object*

* **data**: *[TOverlaySettings](../globals.md#toverlaysettings)*

* **timeoutId**: *number*

## Methods

###  activate

▸ **activate**(): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:217](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L217)*

**Returns:** *void*

___

### `Readonly` getMenuOptions

▸ **getMenuOptions**(): *never[]*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:155](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L155)*

**Returns:** *never[]*

___

###  hidePageOverlay

▸ **hidePageOverlay**(): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:293](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L293)*

**Returns:** *void*

___

###  refresh

▸ **refresh**(): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:221](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L221)*

**Returns:** *void*

___

###  registerPeer

▸ **registerPeer**(`values`: [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md)): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:178](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L178)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md) |

**Returns:** *void*

___

###  showError

▸ **showError**(`passedSettings`: [TOverlaySettings](../globals.md#toverlaysettings) | undefined): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:299](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L299)*

**Parameters:**

Name | Type |
------ | ------ |
`passedSettings` | [TOverlaySettings](../globals.md#toverlaysettings) &#124; undefined |

**Returns:** *void*

___

###  showPageOverlay

▸ **showPageOverlay**(`passedSettings`: [TOverlaySettings](../globals.md#toverlaysettings) | undefined): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:274](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L274)*

**Parameters:**

Name | Type |
------ | ------ |
`passedSettings` | [TOverlaySettings](../globals.md#toverlaysettings) &#124; undefined |

**Returns:** *void*

___

###  spawn

▸ **spawn**(`values`: [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md)): *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:212](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L212)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md) |

**Returns:** *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)*

___

###  toggleEdit

▸ **toggleEdit**(`on?`: undefined | false | true): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:254](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L254)*

**Parameters:**

Name | Type |
------ | ------ |
`on?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  toggleLocalTooltipsDisabled

▸ **toggleLocalTooltipsDisabled**(`isDisabled?`: undefined | false | true): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:313](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L313)*

**Parameters:**

Name | Type |
------ | ------ |
`isDisabled?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  togglePosition

▸ **togglePosition**(`on?`: undefined | false | true): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:262](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L262)*

**Parameters:**

Name | Type |
------ | ------ |
`on?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

### `Static` Consumer

▸ **Consumer**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:203](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6524581/packages/bodiless-core/src/PageEditContext/index.tsx#L203)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | function &#124; function & string &#124; function & number &#124; function & false &#124; function & true &#124; function & ReactElement‹any, string &#124; function &#124; object› &#124; function & ReactNodeArray‹› &#124; function & ReactPortal‹› |

**Returns:** *Element‹›*
