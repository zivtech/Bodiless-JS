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
* [peerContextMap](pageeditcontext.md#protected-peercontextmap)
* [store](pageeditcontext.md#protected-store)
* [Provider](pageeditcontext.md#static-provider)
* [context](pageeditcontext.md#static-context)
* [root](pageeditcontext.md#static-root)

### Accessors

* [areLocalTooltipsDisabled](pageeditcontext.md#arelocaltooltipsdisabled)
* [contextMenuOptions](pageeditcontext.md#contextmenuoptions)
* [isActive](pageeditcontext.md#isactive)
* [isEdit](pageeditcontext.md#isedit)
* [isInnermost](pageeditcontext.md#isinnermost)
* [isInnermostLocalMenu](pageeditcontext.md#isinnermostlocalmenu)
* [isPositionToggled](pageeditcontext.md#ispositiontoggled)
* [optionMap](pageeditcontext.md#optionmap)
* [pageOverlay](pageeditcontext.md#pageoverlay)
* [peerContexts](pageeditcontext.md#peercontexts)

### Methods

* [activate](pageeditcontext.md#activate)
* [getMenuOptions](pageeditcontext.md#readonly-getmenuoptions)
* [hidePageOverlay](pageeditcontext.md#hidepageoverlay)
* [registerPeer](pageeditcontext.md#registerpeer)
* [showError](pageeditcontext.md#showerror)
* [showPageOverlay](pageeditcontext.md#showpageoverlay)
* [spawn](pageeditcontext.md#spawn)
* [toggleEdit](pageeditcontext.md#toggleedit)
* [toggleLocalTooltipsDisabled](pageeditcontext.md#togglelocaltooltipsdisabled)
* [togglePosition](pageeditcontext.md#toggleposition)
* [unregisterPeer](pageeditcontext.md#unregisterpeer)
* [unregisterPeers](pageeditcontext.md#unregisterpeers)
* [updateMenuOptions](pageeditcontext.md#updatemenuoptions)
* [Consumer](pageeditcontext.md#static-consumer)

## Constructors

###  constructor

\+ **new PageEditContext**(`values?`: [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md), `parent?`: [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)): *[PageEditContext](pageeditcontext.md)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:56](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`values?` | [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md) |
`parent?` | [PageEditContextInterface](../interfaces/pageeditcontextinterface.md) |

**Returns:** *[PageEditContext](pageeditcontext.md)*

## Properties

###  hasLocalMenu

• **hasLocalMenu**: *boolean* = false

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[hasLocalMenu](../interfaces/pageeditcontextinterface.md#haslocalmenu)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:56](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L56)*

___

### `Readonly` id

• **id**: *string* = "Root"

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[id](../interfaces/pageeditcontextinterface.md#readonly-id)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:46](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L46)*

___

### `Readonly` name

• **name**: *string* = "Root"

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[name](../interfaces/pageeditcontextinterface.md#readonly-name)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:48](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L48)*

___

### `Readonly` parent

• **parent**: *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md) | undefined*

*Implementation of [PageEditContextInterface](../interfaces/pageeditcontextinterface.md).[parent](../interfaces/pageeditcontextinterface.md#optional-readonly-parent)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:52](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L52)*

___

### `Protected` peerContextMap

• **peerContextMap**: *Map‹string, [PageEditContextInterface](../interfaces/pageeditcontextinterface.md) | null›* = new Map()

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:70](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L70)*

___

### `Protected` store

• **store**: *[PageEditStoreInterface](../interfaces/pageeditstoreinterface.md)* = defaultStore

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:54](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L54)*

___

### `Static` Provider

▪ **Provider**: *ProviderExoticComponent‹ProviderProps‹[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)››* = PageEditContext.context.Provider

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:118](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L118)*

___

### `Static` context

▪ **context**: *Context‹[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)›* = React.createContext<PageEditContextInterface>(PageEditContext.root)

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:107](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L107)*

___

### `Static` root

▪ **root**: *[PageEditContext](pageeditcontext.md)‹›* = new PageEditContext()

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:105](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L105)*

## Accessors

###  areLocalTooltipsDisabled

• **get areLocalTooltipsDisabled**(): *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:222](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L222)*

**Returns:** *boolean*

___

###  contextMenuOptions

• **get contextMenuOptions**(): *object[]*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:175](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L175)*

**Returns:** *object[]*

___

###  isActive

• **get isActive**(): *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:136](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L136)*

**Returns:** *boolean*

___

###  isEdit

• **get isEdit**(): *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:159](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L159)*

**Returns:** *boolean*

___

###  isInnermost

• **get isInnermost**(): *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:140](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L140)*

**Returns:** *boolean*

___

###  isInnermostLocalMenu

• **get isInnermostLocalMenu**(): *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:146](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L146)*

**Returns:** *boolean*

___

###  isPositionToggled

• **get isPositionToggled**(): *boolean*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:167](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L167)*

**Returns:** *boolean*

___

###  optionMap

• **get optionMap**(): *Map‹string, Map‹string, object››*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:179](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L179)*

**Returns:** *Map‹string, Map‹string, object››*

___

###  pageOverlay

• **get pageOverlay**(): *object*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:183](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L183)*

**Returns:** *object*

* **data**: *[TOverlaySettings](../globals.md#toverlaysettings)*

* **timeoutId**: *number*

___

###  peerContexts

• **get peerContexts**(): *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)[]*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:72](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L72)*

**Returns:** *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)[]*

## Methods

###  activate

▸ **activate**(): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:126](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L126)*

**Returns:** *void*

___

### `Readonly` getMenuOptions

▸ **getMenuOptions**(): *never[]*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:50](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L50)*

**Returns:** *never[]*

___

###  hidePageOverlay

▸ **hidePageOverlay**(): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:206](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L206)*

**Returns:** *void*

___

###  registerPeer

▸ **registerPeer**(`context`: [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:83](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L83)*

Registers a context as a peer.  Peer contexts contribute their menu options whenever the
context to which they are registered is activated.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`context` | [PageEditContextInterface](../interfaces/pageeditcontextinterface.md) | The peer context to register.  |

**Returns:** *void*

___

###  showError

▸ **showError**(`passedSettings`: [TOverlaySettings](../globals.md#toverlaysettings) | undefined): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:212](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L212)*

**Parameters:**

Name | Type |
------ | ------ |
`passedSettings` | [TOverlaySettings](../globals.md#toverlaysettings) &#124; undefined |

**Returns:** *void*

___

###  showPageOverlay

▸ **showPageOverlay**(`passedSettings`: [TOverlaySettings](../globals.md#toverlaysettings) | undefined): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:187](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L187)*

**Parameters:**

Name | Type |
------ | ------ |
`passedSettings` | [TOverlaySettings](../globals.md#toverlaysettings) &#124; undefined |

**Returns:** *void*

___

###  spawn

▸ **spawn**(`values`: [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md)): *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:121](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | [DefinesLocalEditContext](../interfaces/defineslocaleditcontext.md) |

**Returns:** *[PageEditContextInterface](../interfaces/pageeditcontextinterface.md)*

___

###  toggleEdit

▸ **toggleEdit**(`on?`: undefined | false | true): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:163](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L163)*

**Parameters:**

Name | Type |
------ | ------ |
`on?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  toggleLocalTooltipsDisabled

▸ **toggleLocalTooltipsDisabled**(`isDisabled?`: undefined | false | true): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:226](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L226)*

**Parameters:**

Name | Type |
------ | ------ |
`isDisabled?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  togglePosition

▸ **togglePosition**(`on?`: undefined | false | true): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:171](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L171)*

**Parameters:**

Name | Type |
------ | ------ |
`on?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  unregisterPeer

▸ **unregisterPeer**(`context`: [PageEditContextInterface](../interfaces/pageeditcontextinterface.md)): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:93](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L93)*

Marks a peer context as "unregistered".  An unregistered peer will not contribute
its menu options.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`context` | [PageEditContextInterface](../interfaces/pageeditcontextinterface.md) | The peer context to unregister.  |

**Returns:** *void*

___

###  unregisterPeers

▸ **unregisterPeers**(): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:101](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L101)*

**Returns:** *void*

___

###  updateMenuOptions

▸ **updateMenuOptions**(): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:130](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L130)*

**Returns:** *void*

___

### `Static` Consumer

▸ **Consumer**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:112](https://github.com/johnsonandjohnson/Bodiless-JS/blob/463e8f6/packages/bodiless-core/src/PageEditContext/index.tsx#L112)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | function &#124; function & string &#124; function & number &#124; function & false &#124; function & true &#124; function & ReactElement‹any, string &#124; function &#124; object› &#124; function & ReactNodeArray‹› &#124; function & ReactPortal‹› |

**Returns:** *Element‹›*
