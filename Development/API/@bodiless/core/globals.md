[@bodiless/core](README.md) › [Globals](globals.md)

# @bodiless/core

## Index

### Classes

* [ContentfulNode](classes/contentfulnode.md)
* [DefaultContentNode](classes/defaultcontentnode.md)
* [DummyContentNodeStore](classes/dummycontentnodestore.md)
* [PageEditContext](classes/pageeditcontext.md)
* [PageEditStore](classes/pageeditstore.md)
* [StaticContext](classes/staticcontext.md)
* [Tag](classes/tag.md)

### Interfaces

* [CanBeActivated](interfaces/canbeactivated.md)
* [CanControlEditMode](interfaces/cancontroleditmode.md)
* [CanControlLocalTooltipsVisibility](interfaces/cancontrollocaltooltipsvisibility.md)
* [CanControlMenuPosition](interfaces/cancontrolmenuposition.md)
* [CanControlPageOverlay](interfaces/cancontrolpageoverlay.md)
* [CanGetContextMenuOptions](interfaces/cangetcontextmenuoptions.md)
* [DefinesLocalEditContext](interfaces/defineslocaleditcontext.md)
* [PageEditContextInterface](interfaces/pageeditcontextinterface.md)

### Type aliases

* [Actions](globals.md#actions)
* [ActivateOnEffectState](globals.md#activateoneffectstate)
* [AsBodiless](globals.md#asbodiless)
* [Bodiless](globals.md#bodiless)
* [BodilessProps](globals.md#bodilessprops)
* [ButtonVariantProps](globals.md#buttonvariantprops)
* [CompleteUI](globals.md#completeui)
* [ContentNode](globals.md#contentnode)
* [EditButtonOptions](globals.md#editbuttonoptions)
* [EditButtonProps](globals.md#editbuttonprops)
* [FormBodyProps](globals.md#formbodyprops)
* [FormBodyRenderer](globals.md#formbodyrenderer)
* [FormProps](globals.md#formprops)
* [FullUI](globals.md#fullui)
* [Getters](globals.md#getters)
* [HOC](globals.md#hoc)
* [HasDataProp](globals.md#hasdataprop)
* [HookOptions](globals.md#hookoptions)
* [IContextMenuItemProps](globals.md#icontextmenuitemprops)
* [IContextMenuProps](globals.md#icontextmenuprops)
* [IconVariantProps](globals.md#iconvariantprops)
* [MenuOptionWithNodeKey](globals.md#menuoptionwithnodekey)
* [NodeMap](globals.md#nodemap)
* [Notification](globals.md#notification)
* [NotificationProviderItem](globals.md#notificationprovideritem)
* [NotificationsContextType](globals.md#notificationscontexttype)
* [Notifier](globals.md#notifier)
* [NotifyContextType](globals.md#notifycontexttype)
* [Options](globals.md#options)
* [Path](globals.md#path)
* [Props](globals.md#props)
* [ReactTagsFieldProps](globals.md#reacttagsfieldprops)
* [TFullOverlaySettings](globals.md#tfulloverlaysettings)
* [TMenuOption](globals.md#tmenuoption)
* [TMenuOptionGetter](globals.md#tmenuoptiongetter)
* [TOverlaySettings](globals.md#toverlaysettings)
* [TPageOverlayStore](globals.md#tpageoverlaystore)
* [ToggleHook](globals.md#togglehook)
* [UI](globals.md#ui)
* [UseGetMenuOptions](globals.md#usegetmenuoptions)
* [VariantProps](globals.md#variantprops)
* [WithNodeKeyProps](globals.md#withnodekeyprops)
* [WithNodeProps](globals.md#withnodeprops)

### Variables

* [ContextMenuOverlay](globals.md#private-const-contextmenuoverlay)
* [DefaultDiv](globals.md#const-defaultdiv)
* [GlobalContextMenu](globals.md#const-globalcontextmenu)
* [NodeConsumer](globals.md#const-nodeconsumer)
* [NotificationContext](globals.md#const-notificationcontext)
* [NotifyContext](globals.md#const-notifycontext)
* [OverlayPortal](globals.md#const-overlayportal)
* [SidecarNodeContext](globals.md#const-sidecarnodecontext)
* [UIContext](globals.md#const-uicontext)
* [activateOnEffect](globals.md#const-activateoneffect)
* [context](globals.md#const-context)
* [defaultStore](globals.md#const-defaultstore)
* [ifEditable](globals.md#const-ifeditable)
* [ifReadOnly](globals.md#const-ifreadonly)
* [staticContext](globals.md#const-staticcontext)
* [uiContext](globals.md#const-uicontext)
* [withActivateOnEffect](globals.md#const-withactivateoneffect)

### Functions

* [ActivateOnEffectProvider](globals.md#const-activateoneffectprovider)
* [ContextMenu](globals.md#const-contextmenu)
* [ContextMenuForm](globals.md#const-contextmenuform)
* [ContextMenuItem](globals.md#const-contextmenuitem)
* [ContextWrapper](globals.md#const-contextwrapper)
* [LocalContextMenu](globals.md#const-localcontextmenu)
* [NodeProvider](globals.md#const-nodeprovider)
* [NotificationButtonProvider](globals.md#const-notificationbuttonprovider)
* [NotificationList](globals.md#const-notificationlist)
* [NotificationProvider](globals.md#const-notificationprovider)
* [Overlay](globals.md#const-overlay)
* [PageContextProvider](globals.md#const-pagecontextprovider)
* [PageEditor](globals.md#const-pageeditor)
* [PageOverlay](globals.md#const-pageoverlay)
* [ReactTagsField](globals.md#const-reacttagsfield)
* [RenderForm](globals.md#const-renderform)
* [StaticPage](globals.md#const-staticpage)
* [SwitcherButtonProvider](globals.md#const-switcherbuttonprovider)
* [asBodilessComponent](globals.md#const-asbodilesscomponent)
* [asStatic](globals.md#const-asstatic)
* [contextMenuForm](globals.md#const-contextmenuform)
* [createMenuOptionHook](globals.md#const-createmenuoptionhook)
* [endSidecarNodes](globals.md#const-endsidecarnodes)
* [getDivider](globals.md#const-getdivider)
* [getFromSessionStorage](globals.md#const-getfromsessionstorage)
* [getRelativeNodeKey](globals.md#const-getrelativenodekey)
* [getUI](globals.md#const-getui)
* [ifToggledOff](globals.md#const-iftoggledoff)
* [ifToggledOn](globals.md#const-iftoggledon)
* [onPopupAlign](globals.md#private-const-onpopupalign)
* [reduceRecursively](globals.md#const-reducerecursively)
* [renderForm](globals.md#const-renderform)
* [saveToSessionStorage](globals.md#const-savetosessionstorage)
* [startSidecarNodes](globals.md#const-startsidecarnodes)
* [useActivateOnEffect](globals.md#const-useactivateoneffect)
* [useActivateOnEffectActivator](globals.md#const-useactivateoneffectactivator)
* [useContextActivator](globals.md#const-usecontextactivator)
* [useContextMenuForm](globals.md#const-usecontextmenuform)
* [useEditContext](globals.md#const-useeditcontext)
* [useEditFormProps](globals.md#const-useeditformprops)
* [useEditToggle](globals.md#const-useedittoggle)
* [useGetMenuOptions](globals.md#const-usegetmenuoptions)
* [useNode](globals.md#const-usenode)
* [useNodeDataHandlers](globals.md#const-usenodedatahandlers)
* [useNotifications](globals.md#const-usenotifications)
* [useNotify](globals.md#const-usenotify)
* [useUI](globals.md#const-useui)
* [useUUID](globals.md#const-useuuid)
* [withActivatorWrapper](globals.md#private-const-withactivatorwrapper)
* [withChild](globals.md#const-withchild)
* [withContextActivator](globals.md#const-withcontextactivator)
* [withData](globals.md#const-withdata)
* [withDefaultContent](globals.md#const-withdefaultcontent)
* [withEditButton](globals.md#const-witheditbutton)
* [withFlowToggle](globals.md#const-withflowtoggle)
* [withLocalContextMenu](globals.md#const-withlocalcontextmenu)
* [withMenuOptions](globals.md#const-withmenuoptions)
* [withNode](globals.md#const-withnode)
* [withNodeAndHandlers](globals.md#const-withnodeandhandlers)
* [withNodeDataHandlers](globals.md#const-withnodedatahandlers)
* [withNodeKey](globals.md#const-withnodekey)
* [withResetButton](globals.md#const-withresetbutton)
* [withSidecarNodes](globals.md#const-withsidecarnodes)
* [withoutProps](globals.md#const-withoutprops)

### Object literals

* [defaultActivateOnEffectState](globals.md#const-defaultactivateoneffectstate)
* [defaultOverlaySettings](globals.md#const-defaultoverlaysettings)
* [defaultUI](globals.md#const-defaultui)

## Type aliases

###  Actions

Ƭ **Actions**: *object*

*Defined in [packages/bodiless-core/src/ContentNode.ts:30](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/ContentNode.ts#L30)*

#### Type declaration:

* **deleteNode**(`path`: string[]): *void*

* **setNode**(`path`: string[], `data`: any): *void*

___

###  ActivateOnEffectState

Ƭ **ActivateOnEffectState**: *object*

*Defined in [packages/bodiless-core/src/ActivateContext.tsx:18](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/ActivateContext.tsx#L18)*

#### Type declaration:

* **id**: *string*

* **setId**(): *function*

  * (`id`: string): *void*

___

###  AsBodiless

Ƭ **AsBodiless**: *function*

*Defined in [packages/bodiless-core/src/asBodilessComponent.tsx:36](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/asBodilessComponent.tsx#L36)*

#### Type declaration:

▸ (`nodeKeys?`: [WithNodeKeyProps](globals.md#withnodekeyprops), `defaultData?`: D): *[HOC](globals.md#hoc)‹P, P & [BodilessProps](globals.md#bodilessprops)›*

**Parameters:**

Name | Type |
------ | ------ |
`nodeKeys?` | [WithNodeKeyProps](globals.md#withnodekeyprops) |
`defaultData?` | D |

___

###  Bodiless

Ƭ **Bodiless**: *function*

*Defined in [packages/bodiless-core/src/index.ts:132](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/index.ts#L132)*

#### Type declaration:

▸ (`C`: ComponentType‹P› | string): *ComponentType‹Q›*

**Parameters:**

Name | Type |
------ | ------ |
`C` | ComponentType‹P› &#124; string |

___

###  BodilessProps

Ƭ **BodilessProps**: *Partial‹[WithNodeProps](globals.md#withnodeprops)›*

*Defined in [packages/bodiless-core/src/asBodilessComponent.tsx:35](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/asBodilessComponent.tsx#L35)*

___

###  ButtonVariantProps

Ƭ **ButtonVariantProps**: *HTMLProps‹HTMLDivElement› & object*

*Defined in [packages/bodiless-core/src/Types/ContextMenuTypes.tsx:29](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/Types/ContextMenuTypes.tsx#L29)*

___

###  CompleteUI

Ƭ **CompleteUI**: *object*

*Defined in [packages/bodiless-core/src/components/PageEditor.tsx:28](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/PageEditor.tsx#L28)*

#### Type declaration:

* **GlobalContextMenu**: *React.ComponentType‹ContextMenuProps›*

* **LocalContextMenu**: *React.ComponentType‹ContextMenuProps›*

* **PageOverlay**? : *FC*

___

###  ContentNode

Ƭ **ContentNode**: *object*

*Defined in [packages/bodiless-core/src/ContentNode.ts:42](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/ContentNode.ts#L42)*

#### Type declaration:

* **data**: *D*

* **delete**(): *function*

  * (`path?`: [Path](globals.md#path)): *void*

* **keys**: *string[]*

* **path**: *string[]*

* **setData**(): *function*

  * (`data`: D): *void*

* **child**‹**E**›(`path`: string): *[ContentNode](globals.md#contentnode)‹E›*

* **peer**‹**E**›(`path`: [Path](globals.md#path)): *[ContentNode](globals.md#contentnode)‹E›*

___

###  EditButtonOptions

Ƭ **EditButtonOptions**: *object*

*Defined in [packages/bodiless-core/src/withEditButton.tsx:38](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/withEditButton.tsx#L38)*

*Defined in [packages/bodiless-core/src/Types/EditButtonTypes.tsx:24](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/Types/EditButtonTypes.tsx#L24)*

#### Type declaration:

* **global**? : *undefined | false | true*

* **icon**: *string*

* **label**? : *undefined | string*

* **local**? : *undefined | false | true*

* **name**: *string*

* **renderForm**: *[FormBodyRenderer](globals.md#formbodyrenderer)‹P, D›*

* **useGetMenuOptions**? : *[UseGetMenuOptions](globals.md#usegetmenuoptions)‹P›*

___

###  EditButtonProps

Ƭ **EditButtonProps**: *object*

*Defined in [packages/bodiless-core/src/withEditButton.tsx:30](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/withEditButton.tsx#L30)*

*Defined in [packages/bodiless-core/src/Types/EditButtonTypes.tsx:18](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/Types/EditButtonTypes.tsx#L18)*

#### Type declaration:

* **componentData**: *D*

* **isActive**? : *undefined | function*

* **setComponentData**(): *function*

  * (`componentData`: D): *void*

* **unwrap**? : *undefined | function*

___

###  FormBodyProps

Ƭ **FormBodyProps**: *ContextMenuFormBodyProps‹D› & object*

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:56](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L56)*

*Defined in [packages/bodiless-core/src/withEditButton.tsx:24](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/withEditButton.tsx#L24)*

___

###  FormBodyRenderer

Ƭ **FormBodyRenderer**: *function*

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:61](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L61)*

*Defined in [packages/bodiless-core/src/withEditButton.tsx:28](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/withEditButton.tsx#L28)*

#### Type declaration:

▸ (`p`: [FormBodyProps](globals.md#formbodyprops)‹P, D›): *ReactNode*

**Parameters:**

Name | Type |
------ | ------ |
`p` | [FormBodyProps](globals.md#formbodyprops)‹P, D› |

___

###  FormProps

Ƭ **FormProps**: *object*

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:50](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L50)*

#### Type declaration:

* **aria-label**? : *undefined | string*

* **closeForm**(): *function*

  * (): *void*

* **ui**? : *[UI](globals.md#ui)*

___

###  FullUI

Ƭ **FullUI**: *object*

*Defined in [packages/bodiless-core/src/components/PageOverlay.tsx:21](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/PageOverlay.tsx#L21)*

#### Type declaration:

* **Button**: *ComponentType‹HTMLProps‹HTMLButtonElement›› | string*

* **Message**: *ComponentType‹HTMLProps‹HTMLDivElement›› | string*

* **OverlayWrapper**: *ComponentType‹HTMLProps‹HTMLDivElement›› | string*

* **PopupWrapper**: *ComponentType‹HTMLProps‹HTMLDivElement›› | string*

* **Spinner**: *ComponentType‹HTMLProps‹HTMLDivElement›› | string*

___

###  Getters

Ƭ **Getters**: *object*

*Defined in [packages/bodiless-core/src/ContentNode.ts:35](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/ContentNode.ts#L35)*

#### Type declaration:

* **getKeys**(): *string[]*

* **getNode**(`path`: string[]): *any*

___

###  HOC

Ƭ **HOC**: *function*

*Defined in [packages/bodiless-core/src/asBodilessComponent.tsx:34](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/asBodilessComponent.tsx#L34)*

*Defined in [packages/bodiless-core/src/withSidecarNodes.tsx:70](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/withSidecarNodes.tsx#L70)*

#### Type declaration:

▸ (`Component`: ComponentType‹any›): *ComponentType‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentType‹any› |

___

###  HasDataProp

Ƭ **HasDataProp**: *object*

*Defined in [packages/bodiless-core/src/withData.tsx:17](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/withData.tsx#L17)*

#### Type declaration:

* **componentData**: *D*

___

###  HookOptions

Ƭ **HookOptions**: *[Options](globals.md#options)‹D› & object*

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:125](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L125)*

___

###  IContextMenuItemProps

Ƭ **IContextMenuItemProps**: *object*

*Defined in [packages/bodiless-core/src/Types/ContextMenuTypes.tsx:78](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/Types/ContextMenuTypes.tsx#L78)*

#### Type declaration:

* **index**: *number*

* **option**: *[TMenuOption](globals.md#tmenuoption)*

* **ui**? : *[UI](globals.md#ui)*

___

###  IContextMenuProps

Ƭ **IContextMenuProps**: *object & HTMLProps‹HTMLElement›*

*Defined in [packages/bodiless-core/src/Types/ContextMenuTypes.tsx:70](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/Types/ContextMenuTypes.tsx#L70)*

___

###  IconVariantProps

Ƭ **IconVariantProps**: *HTMLProps‹HTMLSpanElement› & object*

*Defined in [packages/bodiless-core/src/Types/ContextMenuTypes.tsx:35](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/Types/ContextMenuTypes.tsx#L35)*

___

###  MenuOptionWithNodeKey

Ƭ **MenuOptionWithNodeKey**: *[TMenuOption](globals.md#tmenuoption) & object*

*Defined in [packages/bodiless-core/src/Contentful/withResetButton.ts:24](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/Contentful/withResetButton.ts#L24)*

___

###  NodeMap

Ƭ **NodeMap**: *object*

*Defined in [packages/bodiless-core/src/NodeProvider.tsx:18](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/NodeProvider.tsx#L18)*

#### Type declaration:

* **activeCollection**: *string*

* **collections**(): *object*

___

###  Notification

Ƭ **Notification**: *object*

*Defined in [packages/bodiless-core/src/NotificationProvider.tsx:25](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/NotificationProvider.tsx#L25)*

#### Type declaration:

* **id**: *string*

* **message**: *string*

___

###  NotificationProviderItem

Ƭ **NotificationProviderItem**: *[Notification](globals.md#notification) & object*

*Defined in [packages/bodiless-core/src/NotificationProvider.tsx:30](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/NotificationProvider.tsx#L30)*

___

###  NotificationsContextType

Ƭ **NotificationsContextType**: *object*

*Defined in [packages/bodiless-core/src/NotificationProvider.tsx:36](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/NotificationProvider.tsx#L36)*

#### Type declaration:

* **notifications**: *[Notification](globals.md#notification)[]*

___

###  Notifier

Ƭ **Notifier**: *function*

*Defined in [packages/bodiless-core/src/NotificationProvider.tsx:34](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/NotificationProvider.tsx#L34)*

#### Type declaration:

▸ (`owner`: string, `notifications`: [Notification](globals.md#notification)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`owner` | string |
`notifications` | [Notification](globals.md#notification)[] |

___

###  NotifyContextType

Ƭ **NotifyContextType**: *object*

*Defined in [packages/bodiless-core/src/NotificationProvider.tsx:39](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/NotificationProvider.tsx#L39)*

#### Type declaration:

* **notify**: *[Notifier](globals.md#notifier)*

___

###  Options

Ƭ **Options**: *[EditButtonOptions](globals.md#editbuttonoptions)‹P, D› & object*

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:43](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L43)*

*Defined in [packages/bodiless-core/src/hoc.tsx:75](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/hoc.tsx#L75)*

*Defined in [packages/bodiless-core/src/asBodilessComponent.tsx:17](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/asBodilessComponent.tsx#L17)*

Options for making a component "bodiless".

___

###  Path

Ƭ **Path**: *string | string[]*

*Defined in [packages/bodiless-core/src/ContentNode.ts:40](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/ContentNode.ts#L40)*

___

###  Props

Ƭ **Props**: *object & HTMLProps‹HTMLDivElement›*

*Defined in [packages/bodiless-core/src/NodeProvider.tsx:56](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/NodeProvider.tsx#L56)*

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:62](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L62)*

*Defined in [packages/bodiless-core/src/Types/PageContextProviderTypes.tsx:18](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/Types/PageContextProviderTypes.tsx#L18)*

*Defined in [packages/bodiless-core/src/components/PageEditor.tsx:35](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/PageEditor.tsx#L35)*

*Defined in [packages/bodiless-core/src/Types/ContextWrapperTypes.tsx:25](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/Types/ContextWrapperTypes.tsx#L25)*

___

###  ReactTagsFieldProps

Ƭ **ReactTagsFieldProps**: *object & Omit‹ReactTagsProps, "handleDelete" | "handleAddition"›*

*Defined in [packages/bodiless-core/src/components/ReactTagsField.tsx:30](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/ReactTagsField.tsx#L30)*

___

###  TFullOverlaySettings

Ƭ **TFullOverlaySettings**: *object*

*Defined in [packages/bodiless-core/src/Types/PageOverlayTypes.tsx:15](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/Types/PageOverlayTypes.tsx#L15)*

Copyright © 2019 Johnson & Johnson

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

#### Type declaration:

* **hasCloseButton**: *boolean*

* **hasSpinner**: *boolean*

* **isActive**: *boolean*

* **maxTimeoutInSeconds**: *number | null*

* **message**: *string*

* **onClose**(): *function*

  * (): *void*

___

###  TMenuOption

Ƭ **TMenuOption**: *object*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:19](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/types.ts#L19)*

#### Type declaration:

* **global**? : *undefined | false | true*

* **group**? : *undefined | string*

* **handler**? : *undefined | function*

* **icon**? : *undefined | string*

* **isActive**? : *undefined | function*

* **isDisabled**? : *undefined | function*

* **isHidden**? : *undefined | function*

* **label**? : *undefined | string*

* **local**? : *undefined | false | true*

* **name**: *string*

___

###  TMenuOptionGetter

Ƭ **TMenuOptionGetter**: *function*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:32](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/types.ts#L32)*

*Defined in [packages/bodiless-core/src/Types/PageContextProviderTypes.tsx:17](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/Types/PageContextProviderTypes.tsx#L17)*

#### Type declaration:

▸ (): *[TMenuOption](globals.md#tmenuoption)[]*

___

###  TOverlaySettings

Ƭ **TOverlaySettings**: *Partial‹[TFullOverlaySettings](globals.md#tfulloverlaysettings)›*

*Defined in [packages/bodiless-core/src/Types/PageOverlayTypes.tsx:24](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/Types/PageOverlayTypes.tsx#L24)*

___

###  TPageOverlayStore

Ƭ **TPageOverlayStore**: *object*

*Defined in [packages/bodiless-core/src/PageEditContext/types.ts:34](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/types.ts#L34)*

#### Type declaration:

* **data**: *[TOverlaySettings](globals.md#toverlaysettings)*

* **timeoutId**: *number*

___

###  ToggleHook

Ƭ **ToggleHook**: *function*

*Defined in [packages/bodiless-core/src/withFlowToggle.tsx:19](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/withFlowToggle.tsx#L19)*

#### Type declaration:

▸ (`props`: any): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

___

###  UI

Ƭ **UI**: *Partial‹[FullUI](globals.md#fullui)›*

*Defined in [packages/bodiless-core/src/Types/ContextMenuTypes.tsx:39](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/Types/ContextMenuTypes.tsx#L39)*

*Defined in [packages/bodiless-core/src/components/PageEditor.tsx:33](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/PageEditor.tsx#L33)*

*Defined in [packages/bodiless-core/src/Types/ContextWrapperTypes.tsx:21](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/Types/ContextWrapperTypes.tsx#L21)*

*Defined in [packages/bodiless-core/src/components/PageOverlay.tsx:37](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/PageOverlay.tsx#L37)*

___

###  UseGetMenuOptions

Ƭ **UseGetMenuOptions**: *function*

*Defined in [packages/bodiless-core/src/hoc.tsx:70](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/hoc.tsx#L70)*

#### Type declaration:

▸ (`props`: P, `context`: [PageEditContextInterface](interfaces/pageeditcontextinterface.md)): *[TMenuOptionGetter](globals.md#tmenuoptiongetter) | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P |
`context` | [PageEditContextInterface](interfaces/pageeditcontextinterface.md) |

___

###  VariantProps

Ƭ **VariantProps**: *object*

*Defined in [packages/bodiless-core/src/Types/ContextWrapperTypes.tsx:17](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/Types/ContextWrapperTypes.tsx#L17)*

#### Type declaration:

* **isActive**? : *undefined | false | true*

___

###  WithNodeKeyProps

Ƭ **WithNodeKeyProps**: *string | Partial‹[WithNodeProps](globals.md#withnodeprops)›*

*Defined in [packages/bodiless-core/src/Types/NodeTypes.tsx:21](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/Types/NodeTypes.tsx#L21)*

___

###  WithNodeProps

Ƭ **WithNodeProps**: *object*

*Defined in [packages/bodiless-core/src/Types/NodeTypes.tsx:16](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/Types/NodeTypes.tsx#L16)*

Copyright © 2019 Johnson & Johnson

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

#### Type declaration:

* **nodeCollection**? : *undefined | string*

* **nodeKey**: *string*

## Variables

### `Private` `Const` ContextMenuOverlay

• **ContextMenuOverlay**: *FunctionComponent‹object›* = observer<{}>(() => {
  const context = useEditContext();
  const { LocalContextMenu: Menu } = useUI();
  const { contextMenuOptions } = context;
  const options = contextMenuOptions.filter((option: TMenuOption) => Boolean(option.local));
  return <Menu options={options} />;
})

*Defined in [packages/bodiless-core/src/components/LocalContextMenu.tsx:46](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/LocalContextMenu.tsx#L46)*

___

### `Const` DefaultDiv

• **DefaultDiv**: *(Anonymous function)* = withoutProps<HTMLProps<HTMLDivElement>>(['isActive'])('div')

*Defined in [packages/bodiless-core/src/components/ContextWrapper.tsx:21](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/ContextWrapper.tsx#L21)*

___

### `Const` GlobalContextMenu

• **GlobalContextMenu**: *FC‹[Props](globals.md#props)›* = observer(() => {
  const { GlobalContextMenu: Menu } = useUI();
  const context = useEditContext();
  const { contextMenuOptions, isPositionToggled } = context;
  const options = contextMenuOptions.filter(
    (op: TMenuOption) => op.global !== false,
  );
  return <Menu options={options} isPositionToggled={isPositionToggled} />;
})

*Defined in [packages/bodiless-core/src/components/PageEditor.tsx:46](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/PageEditor.tsx#L46)*

___

### `Const` NodeConsumer

• **NodeConsumer**: *ExoticComponent‹ConsumerProps‹object››* = context.Consumer

*Defined in [packages/bodiless-core/src/NodeProvider.tsx:32](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/NodeProvider.tsx#L32)*

___

### `Const` NotificationContext

• **NotificationContext**: *Context‹object›* = React.createContext<NotificationsContextType>({
  notifications: [],
})

*Defined in [packages/bodiless-core/src/NotificationProvider.tsx:43](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/NotificationProvider.tsx#L43)*

___

### `Const` NotifyContext

• **NotifyContext**: *Context‹object›* = React.createContext<NotifyContextType>({
  notify: () => undefined,
})

*Defined in [packages/bodiless-core/src/NotificationProvider.tsx:49](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/NotificationProvider.tsx#L49)*

___

### `Const` OverlayPortal

• **OverlayPortal**: *(Anonymous function)* = observer(({ store, ui }) => {
  const root = typeof window !== 'undefined' ? window.document.body : null;
  return store.data.isActive
  && root
  && ReactDOM.createPortal(
    <Overlay settings={{ ...store.data }} ui={ui} />,
    root,
  );
})

*Defined in [packages/bodiless-core/src/components/PageOverlay.tsx:83](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/PageOverlay.tsx#L83)*

___

### `Const` SidecarNodeContext

• **SidecarNodeContext**: *Context‹object[]›* = createContext<ContentNode<any>[]>([])

*Defined in [packages/bodiless-core/src/withSidecarNodes.tsx:20](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/withSidecarNodes.tsx#L20)*

___

### `Const` UIContext

• **UIContext**: *Context‹object›* = createContext<UI>({})

*Defined in [packages/bodiless-core/src/components/ContextMenuItem.tsx:37](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/ContextMenuItem.tsx#L37)*

___

### `Const` activateOnEffect

• **activateOnEffect**: *Context‹object›* = React.createContext(defaultActivateOnEffectState)

*Defined in [packages/bodiless-core/src/ActivateContext.tsx:30](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/ActivateContext.tsx#L30)*

___

### `Const` context

• **context**: *Context‹object›* = React.createContext<NodeMap<any>>({
  activeCollection: '_default',
  collections: {
    _default: DefaultContentNode.dummy(),
  },
})

*Defined in [packages/bodiless-core/src/NodeProvider.tsx:25](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/NodeProvider.tsx#L25)*

___

### `Const` defaultStore

• **defaultStore**: *PageEditStore‹›* = new PageEditStore()

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:139](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/index.tsx#L139)*

___

### `Const` ifEditable

• **ifEditable**: *(Anonymous function)* = ifToggledOn(useEditToggle)

*Defined in [packages/bodiless-core/src/withEditToggle.tsx:23](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/withEditToggle.tsx#L23)*

___

### `Const` ifReadOnly

• **ifReadOnly**: *(Anonymous function)* = ifToggledOff(useEditToggle)

*Defined in [packages/bodiless-core/src/withEditToggle.tsx:25](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/withEditToggle.tsx#L25)*

___

### `Const` staticContext

• **staticContext**: *[StaticContext](classes/staticcontext.md)‹›* = new StaticContext()

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:69](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/StaticPage.tsx#L69)*

___

### `Const` uiContext

• **uiContext**: *Context‹object›* = createContext<CompleteUI>({
  GlobalContextMenu: ContextMenu,
  LocalContextMenu: ContextMenu,
})

*Defined in [packages/bodiless-core/src/components/PageEditor.tsx:39](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/PageEditor.tsx#L39)*

___

### `Const` withActivateOnEffect

• **withActivateOnEffect**: *(Anonymous function)* = (
  <P extends Object> (Component:React.FunctionComponent<P>) => (props:P) => (
    <ActivateOnEffectProvider><Component {...props} /></ActivateOnEffectProvider>
  )
)

*Defined in [packages/bodiless-core/src/ActivateContext.tsx:41](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/ActivateContext.tsx#L41)*

WithActivateContext is a HOC that wraps the Component in a ActivateContextProvider

**`param`** The component to wrap

## Functions

### `Const` ActivateOnEffectProvider

▸ **ActivateOnEffectProvider**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/ActivateContext.tsx:31](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/ActivateContext.tsx#L31)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |

**Returns:** *Element‹›*

___

### `Const` ContextMenu

▸ **ContextMenu**(`props`: IProps): *null | Element‹›*

*Defined in [packages/bodiless-core/src/components/ContextMenu.tsx:39](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/ContextMenu.tsx#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | IProps |

**Returns:** *null | Element‹›*

___

### `Const` ContextMenuForm

▸ **ContextMenuForm**‹**D**›(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:66](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L66)*

**Type parameters:**

▪ **D**: *object*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`closeForm` | function | - |
`hasSubmit` | Boolean | true |
`initialValues` | D | {} as D |
`onClose` | undefined &#124; function | - |
`rest` | rest | - |
`ui` | undefined &#124; object | - |
`children` |  | - |
`submitValues` |  | - |

**Returns:** *Element‹›*

___

### `Const` ContextMenuItem

▸ **ContextMenuItem**(`__namedParameters`: object): *null | Element‹›*

*Defined in [packages/bodiless-core/src/components/ContextMenuItem.tsx:43](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/ContextMenuItem.tsx#L43)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`index` | number |
`option` | object |
`ui` | undefined &#124; object |

**Returns:** *null | Element‹›*

___

### `Const` ContextWrapper

▸ **ContextWrapper**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/components/ContextWrapper.tsx:23](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/ContextWrapper.tsx#L23)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |
`clickable` | undefined &#124; false &#124; true |
`onClick` | undefined &#124; bivarianceHack |
`rest` | rest |
`ui` | undefined &#124; object |

**Returns:** *Element‹›*

___

### `Const` LocalContextMenu

▸ **LocalContextMenu**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/components/LocalContextMenu.tsx:58](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/LocalContextMenu.tsx#L58)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |

**Returns:** *Element‹›*

___

### `Const` NodeProvider

▸ **NodeProvider**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/NodeProvider.tsx:61](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/NodeProvider.tsx#L61)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |
`collection` | undefined &#124; string |
`node` | object |

**Returns:** *Element‹›*

___

### `Const` NotificationButtonProvider

▸ **NotificationButtonProvider**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/NotificationButtonProvider.tsx:55](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/NotificationButtonProvider.tsx#L55)*

Provide a component to display notifications.

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |

**Returns:** *Element‹›*

___

### `Const` NotificationList

▸ **NotificationList**(): *Element‹›*

*Defined in [packages/bodiless-core/src/NotificationButtonProvider.tsx:22](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/NotificationButtonProvider.tsx#L22)*

**Returns:** *Element‹›*

___

### `Const` NotificationProvider

▸ **NotificationProvider**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/NotificationProvider.tsx:59](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/NotificationProvider.tsx#L59)*

A component used to provide notifications.

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |

**Returns:** *Element‹›*

___

### `Const` Overlay

▸ **Overlay**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/components/PageOverlay.tsx:41](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/PageOverlay.tsx#L41)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`settings` | object |
`ui` | object |

**Returns:** *Element‹›*

___

### `Const` PageContextProvider

▸ **PageContextProvider**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/PageContextProvider.tsx:21](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageContextProvider.tsx#L21)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |
`getMenuOptions` | undefined &#124; function |
`id` | undefined &#124; string |
`name` | undefined &#124; string |

**Returns:** *Element‹›*

___

### `Const` PageEditor

▸ **PageEditor**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/components/PageEditor.tsx:56](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/PageEditor.tsx#L56)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |
`ui` | undefined &#124; object |

**Returns:** *Element‹›*

___

### `Const` PageOverlay

▸ **PageOverlay**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/components/PageOverlay.tsx:93](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/PageOverlay.tsx#L93)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`ui` | object |

**Returns:** *Element‹›*

___

### `Const` ReactTagsField

▸ **ReactTagsField**(`props`: [ReactTagsFieldProps](globals.md#reacttagsfieldprops)): *Element‹›*

*Defined in [packages/bodiless-core/src/components/ReactTagsField.tsx:34](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/ReactTagsField.tsx#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [ReactTagsFieldProps](globals.md#reacttagsfieldprops) |

**Returns:** *Element‹›*

___

### `Const` RenderForm

▸ **RenderForm**(`props`: ContextMenuFormProps): *Element‹›*

*Defined in [packages/bodiless-core/src/NotificationButtonProvider.tsx:37](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/NotificationButtonProvider.tsx#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | ContextMenuFormProps |

**Returns:** *Element‹›*

___

### `Const` StaticPage

▸ **StaticPage**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/components/StaticPage.tsx:71](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/StaticPage.tsx#L71)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |

**Returns:** *Element‹›*

___

### `Const` SwitcherButtonProvider

▸ **SwitcherButtonProvider**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-core/src/SwitcherButtonProvider.tsx:25](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/SwitcherButtonProvider.tsx#L25)*

Provide a component Button to switch the position of the global menu.

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |

**Returns:** *Element‹›*

___

### `Const` asBodilessComponent

▸ **asBodilessComponent**‹**P**, **D**›(`options`: [Options](globals.md#options)‹P, D›): *[AsBodiless](globals.md#asbodiless)‹P, D›*

*Defined in [packages/bodiless-core/src/asBodilessComponent.tsx:66](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/asBodilessComponent.tsx#L66)*

Makes a component "Bodiless" by connecting it to the Bodiless-jS data flow and giving it
a form which can be used to edit its props. Returns a standard `asBodiless...` function,
which takes `nodeKey` and `defaultData` parameters, and returns an HOC which yields an editable
version of the base component.

**Type parameters:**

▪ **P**: *object*

▪ **D**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [Options](globals.md#options)‹P, D› | An object describing how this component should be made editable.  |

**Returns:** *[AsBodiless](globals.md#asbodiless)‹P, D›*

___

### `Const` asStatic

▸ **asStatic**(`Component`: ComponentType‹any› | string): *withStatic*

*Defined in [packages/bodiless-core/src/asStatic.tsx:24](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/asStatic.tsx#L24)*

Wraps given component in StaticPage component making the component and its children read-only

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`Component` | ComponentType‹any› &#124; string |   |

**Returns:** *withStatic*

___

### `Const` contextMenuForm

▸ **contextMenuForm**‹**D**›(`options`: [Options](globals.md#options)‹D›): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:115](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L115)*

**Type parameters:**

▪ **D**: *object*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [Options](globals.md#options)‹D› | {} |

**Returns:** *(Anonymous function)*

___

### `Const` createMenuOptionHook

▸ **createMenuOptionHook**‹**P**, **D**›(`__namedParameters`: object): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/withEditButton.tsx:65](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/withEditButton.tsx#L65)*

**Type parameters:**

▪ **P**: *object*

▪ **D**: *object*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`global` | undefined &#124; false &#124; true |
`icon` | string |
`label` | undefined &#124; string |
`local` | undefined &#124; false &#124; true |
`name` | string |
`renderForm` | function |
`useGetMenuOptions` | undefined &#124; function |

**Returns:** *(Anonymous function)*

___

### `Const` endSidecarNodes

▸ **endSidecarNodes**‹**P**›(`Component`: ComponentType‹P›): *EndSidecarNodes*

*Defined in [packages/bodiless-core/src/withSidecarNodes.tsx:52](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/withSidecarNodes.tsx#L52)*

`endSidecarNodes` is an HOC which restores the ContentNode preserved
by `startSidecarNodes`.

**`see`** `withSidecarNodes`

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`Component` | ComponentType‹P› | Any component which uses the Bodiless ContentNode system.  |

**Returns:** *EndSidecarNodes*

___

### `Const` getDivider

▸ **getDivider**(`index`: Number): *[TMenuOption](globals.md#tmenuoption)*

*Defined in [packages/bodiless-core/src/components/ContextMenu.tsx:26](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/ContextMenu.tsx#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | Number |

**Returns:** *[TMenuOption](globals.md#tmenuoption)*

___

### `Const` getFromSessionStorage

▸ **getFromSessionStorage**(`key`: string, `defValue`: any): *any*

*Defined in [packages/bodiless-core/src/SessionStorage.ts:16](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/SessionStorage.ts#L16)*

Copyright © 2020 Johnson & Johnson

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`key` | string | - |
`defValue` | any | null |

**Returns:** *any*

___

### `Const` getRelativeNodeKey

▸ **getRelativeNodeKey**(`basePath`: [Path](globals.md#path), `nodePath`: [Path](globals.md#path)): *string*

*Defined in [packages/bodiless-core/src/Contentful/ContentfulNode.ts:17](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/Contentful/ContentfulNode.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`basePath` | [Path](globals.md#path) |
`nodePath` | [Path](globals.md#path) |

**Returns:** *string*

___

### `Const` getUI

▸ **getUI**(`ui`: [UI](globals.md#ui)): *object*

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:41](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L41)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`ui` | [UI](globals.md#ui) | {} |

**Returns:** *object*

▸ **getUI**(`ui`: [UI](globals.md#ui)): *object*

*Defined in [packages/bodiless-core/src/components/ContextMenuItem.tsx:31](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/ContextMenuItem.tsx#L31)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`ui` | [UI](globals.md#ui) | {} |

**Returns:** *object*

▸ **getUI**(`ui`: [UI](globals.md#ui)): *object*

*Defined in [packages/bodiless-core/src/components/ContextMenu.tsx:33](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/ContextMenu.tsx#L33)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`ui` | [UI](globals.md#ui) | {} |

**Returns:** *object*

▸ **getUI**(`ui`: [UI](globals.md#ui)): *object*

*Defined in [packages/bodiless-core/src/components/PageOverlay.tsx:39](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/PageOverlay.tsx#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`ui` | [UI](globals.md#ui) |

**Returns:** *object*

___

### `Const` ifToggledOff

▸ **ifToggledOff**(`useToggle`: [ToggleHook](globals.md#togglehook)): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/withFlowToggle.tsx:41](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/withFlowToggle.tsx#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`useToggle` | [ToggleHook](globals.md#togglehook) |

**Returns:** *(Anonymous function)*

___

### `Const` ifToggledOn

▸ **ifToggledOn**(`useToggle`: [ToggleHook](globals.md#togglehook)): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/withFlowToggle.tsx:34](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/withFlowToggle.tsx#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`useToggle` | [ToggleHook](globals.md#togglehook) |

**Returns:** *(Anonymous function)*

___

### `Private` `Const` onPopupAlign

▸ **onPopupAlign**(`domNode`: Element): *void*

*Defined in [packages/bodiless-core/src/components/LocalContextMenu.tsx:32](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/LocalContextMenu.tsx#L32)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`domNode` | Element | The element to which the popup is attached.  |

**Returns:** *void*

___

### `Const` reduceRecursively

▸ **reduceRecursively**‹**T**›(`accumulator`: T[], `callback`: function, `context?`: [PageEditContext](classes/pageeditcontext.md)): *T[]*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:33](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/index.tsx#L33)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

▪ **accumulator**: *T[]*

▪ **callback**: *function*

▸ (`c`: [PageEditContext](classes/pageeditcontext.md)): *T[]*

**Parameters:**

Name | Type |
------ | ------ |
`c` | [PageEditContext](classes/pageeditcontext.md) |

▪`Optional`  **context**: *[PageEditContext](classes/pageeditcontext.md)*

**Returns:** *T[]*

___

### `Const` renderForm

▸ **renderForm**(`props`: ContextMenuFormProps): *Element‹›*

*Defined in [packages/bodiless-core/src/NotificationButtonProvider.tsx:47](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/NotificationButtonProvider.tsx#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | ContextMenuFormProps |

**Returns:** *Element‹›*

___

### `Const` saveToSessionStorage

▸ **saveToSessionStorage**(`key`: string, `val`: any): *void*

*Defined in [packages/bodiless-core/src/SessionStorage.ts:30](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/SessionStorage.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`val` | any |

**Returns:** *void*

___

### `Const` startSidecarNodes

▸ **startSidecarNodes**‹**P**›(`Component`: ComponentType‹P›): *StartSidecarNodes*

*Defined in [packages/bodiless-core/src/withSidecarNodes.tsx:30](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/withSidecarNodes.tsx#L30)*

`startSidecarNodes` is an HOC which records the current ContentNode so that
it can later be restored.

**`see`** `withSidecarNodes`

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`Component` | ComponentType‹P› | Any component which uses the Bodiless ContentNode system.  |

**Returns:** *StartSidecarNodes*

___

### `Const` useActivateOnEffect

▸ **useActivateOnEffect**(): *object*

*Defined in [packages/bodiless-core/src/ActivateContext.tsx:50](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/ActivateContext.tsx#L50)*

useActivateContext is a hook that returns the ActivateContext

**Returns:** *object*

* **id**: *string*

* **setId**(): *function*

  * (`id`: string): *void*

___

### `Const` useActivateOnEffectActivator

▸ **useActivateOnEffectActivator**(`uuid`: string): *void*

*Defined in [packages/bodiless-core/src/ActivateContext.tsx:57](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/ActivateContext.tsx#L57)*

useActivateOnEffect is a hook that will check if a id is stored in the ActivateContext
if it is it will run the iseContextActivator hook

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | id of the component to check  |

**Returns:** *void*

___

### `Const` useContextActivator

▸ **useContextActivator**(`event`: string, `handler?`: EventHandler‹any›): *object*

*Defined in [packages/bodiless-core/src/hooks.ts:23](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/hooks.ts#L23)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`event` | string | "onClick" |
`handler?` | EventHandler‹any› | - |

**Returns:** *object*

* **[event]**: *undefined | bivarianceHack* = handler

___

### `Const` useContextMenuForm

▸ **useContextMenuForm**‹**D**›(`options`: [HookOptions](globals.md#hookoptions)‹D›): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:129](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L129)*

**Type parameters:**

▪ **D**: *object*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [HookOptions](globals.md#hookoptions)‹D› | {} |

**Returns:** *(Anonymous function)*

___

### `Const` useEditContext

▸ **useEditContext**(): *[PageEditContextInterface](interfaces/pageeditcontextinterface.md)*

*Defined in [packages/bodiless-core/src/hooks.ts:19](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/hooks.ts#L19)*

**Returns:** *[PageEditContextInterface](interfaces/pageeditcontextinterface.md)*

___

### `Const` useEditFormProps

▸ **useEditFormProps**‹**P**, **D**›(`__namedParameters`: object): *object*

*Defined in [packages/bodiless-core/src/withEditButton.tsx:49](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/withEditButton.tsx#L49)*

**Type parameters:**

▪ **P**: *object*

▪ **D**: *object*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`componentData` | D |
`onSubmit` | undefined &#124; function |
`setComponentData` | function |

**Returns:** *object*

* **initialValues**: *D* = componentData

* **submitValues**: *submitValues*

___

### `Const` useEditToggle

▸ **useEditToggle**(): *boolean*

*Defined in [packages/bodiless-core/src/withEditToggle.tsx:18](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/withEditToggle.tsx#L18)*

**Returns:** *boolean*

___

### `Const` useGetMenuOptions

▸ **useGetMenuOptions**(`menuOptionWithNodeKey?`: [MenuOptionWithNodeKey](globals.md#menuoptionwithnodekey)): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/Contentful/withResetButton.ts:28](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/Contentful/withResetButton.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`menuOptionWithNodeKey?` | [MenuOptionWithNodeKey](globals.md#menuoptionwithnodekey) |

**Returns:** *(Anonymous function)*

___

### `Const` useNode

▸ **useNode**‹**D**›(`collection?`: undefined | string): *object*

*Defined in [packages/bodiless-core/src/NodeProvider.tsx:34](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/NodeProvider.tsx#L34)*

**Type parameters:**

▪ **D**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`collection?` | undefined &#124; string |

**Returns:** *object*

* **node**(): *object*

  * **data**: *D*

  * **delete**(): *function*

    * (`path?`: [Path](globals.md#path)): *void*

  * **keys**: *string[]*

  * **path**: *string[]*

  * **setData**(): *function*

    * (`data`: D): *void*

  * **child**‹**E**›(`path`: string): *[ContentNode](globals.md#contentnode)‹E›*

  * **peer**‹**E**›(`path`: [Path](globals.md#path)): *[ContentNode](globals.md#contentnode)‹E›*

___

### `Const` useNodeDataHandlers

▸ **useNodeDataHandlers**‹**D**›(`collection?`: undefined | string, `defaultValue`: D): *object*

*Defined in [packages/bodiless-core/src/NodeProvider.tsx:45](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/NodeProvider.tsx#L45)*

**Type parameters:**

▪ **D**: *object*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`collection?` | undefined &#124; string | - |
`defaultValue` | D | {} as D |

**Returns:** *object*

* **setComponentData**(`data`: D): *void*

* ### **componentData**: *object*

___

### `Const` useNotifications

▸ **useNotifications**(): *object*

*Defined in [packages/bodiless-core/src/NotificationProvider.tsx:47](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/NotificationProvider.tsx#L47)*

**Returns:** *object*

* **notifications**: *[Notification](globals.md#notification)[]*

___

### `Const` useNotify

▸ **useNotify**(`notifications`: [Notification](globals.md#notification)[]): *void*

*Defined in [packages/bodiless-core/src/NotificationProvider.tsx:92](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/NotificationProvider.tsx#L92)*

The useNotify() hook allows you to register notifications which should be
displayed to the user upon clicking the "Notifications" button on the main
menu.

Note that you are responsible for maintaining and persisting the notifications
you want to display. Every time your component re-renders, all the notifications
it owns will be regenerated from the list provided to this hook.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`notifications` | [Notification](globals.md#notification)[] | An array of Notification objects which should be displayed.  |

**Returns:** *void*

___

### `Const` useUI

▸ **useUI**(): *object*

*Defined in [packages/bodiless-core/src/components/ContextMenuItem.tsx:38](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/ContextMenuItem.tsx#L38)*

**Returns:** *object*

▸ **useUI**(): *object*

*Defined in [packages/bodiless-core/src/components/PageEditor.tsx:44](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/PageEditor.tsx#L44)*

**Returns:** *object*

* **GlobalContextMenu**: *React.ComponentType‹ContextMenuProps›*

* **LocalContextMenu**: *React.ComponentType‹ContextMenuProps›*

* **PageOverlay**? : *FC*

___

### `Const` useUUID

▸ **useUUID**(): *string*

*Defined in [packages/bodiless-core/src/hooks.ts:21](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/hooks.ts#L21)*

**Returns:** *string*

___

### `Private` `Const` withActivatorWrapper

▸ **withActivatorWrapper**‹**P**›(`event`: string, `Wrapper`: CT‹any› | string): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/asBodilessComponent.tsx:45](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/asBodilessComponent.tsx#L45)*

Given an event name and a wrapper component, provides an HOC which will wrap the base component
the wrapper, passing the event prop to the wrapper, and all other props to the base compoent.

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | string | The event name. |
`Wrapper` | CT‹any› &#124; string | The component to wrap with |

**Returns:** *(Anonymous function)*

___

### `Const` withChild

▸ **withChild**(`Child`: CT): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/withChild.tsx:17](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/withChild.tsx#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`Child` | CT |

**Returns:** *(Anonymous function)*

___

### `Const` withContextActivator

▸ **withContextActivator**(`event`: string): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/hoc.tsx:33](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/hoc.tsx#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |

**Returns:** *(Anonymous function)*

___

### `Const` withData

▸ **withData**‹**P**, **D**›(`Component`: CT‹P | D› | string): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/withData.tsx:21](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/withData.tsx#L21)*

**Type parameters:**

▪ **P**: *object*

▪ **D**: *Object*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | CT‹P &#124; D› &#124; string |

**Returns:** *(Anonymous function)*

___

### `Const` withDefaultContent

▸ **withDefaultContent**‹**P**›(`content`: object): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/Contentful/withDefaultContent.tsx:20](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/Contentful/withDefaultContent.tsx#L20)*

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`content` | object |

**Returns:** *(Anonymous function)*

___

### `Const` withEditButton

▸ **withEditButton**‹**P**, **D**›(`options`: [EditButtonOptions](globals.md#editbuttonoptions)‹P, D›): *function*

*Defined in [packages/bodiless-core/src/withEditButton.tsx:107](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/withEditButton.tsx#L107)*

**Type parameters:**

▪ **P**: *object*

▪ **D**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [EditButtonOptions](globals.md#editbuttonoptions)‹P, D› |

**Returns:** *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` withFlowToggle

▸ **withFlowToggle**(`useToggle`: [ToggleHook](globals.md#togglehook)): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/withFlowToggle.tsx:29](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/withFlowToggle.tsx#L29)*

Allow components to be toggled on/off based on the value of useToggle function

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`useToggle` | [ToggleHook](globals.md#togglehook) |   Define the conditions to toggle on/off. |

**Returns:** *(Anonymous function)*

  (On: React.ComponentType<P>, Off: React.ComponentType<Q>) => any}

___

### `Const` withLocalContextMenu

▸ **withLocalContextMenu**(`Component`: CT‹any› | string): *WithLocalContextMenu*

*Defined in [packages/bodiless-core/src/hoc.tsx:40](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/hoc.tsx#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | CT‹any› &#124; string |

**Returns:** *WithLocalContextMenu*

___

### `Const` withMenuOptions

▸ **withMenuOptions**‹**P**›(`__namedParameters`: object): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/hoc.tsx:81](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/hoc.tsx#L81)*

**Type parameters:**

▪ **P**: *object*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`id` | undefined &#124; string |
`name` | undefined &#124; string |
`useGetMenuOptions` | undefined &#124; function |

**Returns:** *(Anonymous function)*

___

### `Const` withNode

▸ **withNode**‹**P**, **D**›(`Component`: CT‹P›): *WithNode*

*Defined in [packages/bodiless-core/src/withNode.tsx:20](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/withNode.tsx#L20)*

**Type parameters:**

▪ **P**: *object*

▪ **D**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | CT‹P› |

**Returns:** *WithNode*

___

### `Const` withNodeAndHandlers

▸ **withNodeAndHandlers**(`defaultData?`: any): *function*

*Defined in [packages/bodiless-core/src/hoc.tsx:64](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/hoc.tsx#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`defaultData?` | any |

**Returns:** *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` withNodeDataHandlers

▸ **withNodeDataHandlers**(`defaultData?`: any): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/hoc.tsx:54](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/hoc.tsx#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`defaultData?` | any |

**Returns:** *(Anonymous function)*

___

### `Const` withNodeKey

▸ **withNodeKey**‹**P**›(`nodeKeys`: string | Partial‹[WithNodeProps](globals.md#withnodeprops)›): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/withNode.tsx:36](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/withNode.tsx#L36)*

**Type parameters:**

▪ **P**: *object*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`nodeKeys` | string &#124; Partial‹[WithNodeProps](globals.md#withnodeprops)› | {} |

**Returns:** *(Anonymous function)*

___

### `Const` withResetButton

▸ **withResetButton**(`menuOptionWithNodeKey?`: [MenuOptionWithNodeKey](globals.md#menuoptionwithnodekey)): *function*

*Defined in [packages/bodiless-core/src/Contentful/withResetButton.ts:46](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/Contentful/withResetButton.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`menuOptionWithNodeKey?` | [MenuOptionWithNodeKey](globals.md#menuoptionwithnodekey) |

**Returns:** *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` withSidecarNodes

▸ **withSidecarNodes**(...`hocs`: [HOC](globals.md#hoc)[]): *function*

*Defined in [packages/bodiless-core/src/withSidecarNodes.tsx:96](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/withSidecarNodes.tsx#L96)*

`withSidecarNodes` allows you to establish a `ContentNode` sub-hierarchiy which should
be used by a series of one or more HOC's. Any nodes created by the HOC's enclosed in this
wrapper will not affect the hierarchy for subsequent HOC's *outside* the wrapper. For
example:
```js
flowRight(
  ...
  withNodeKey('foo'), withNode,  // ...$foo
  withSidecarNodes(
    withNodeKey('bar'), withNode,  // ...$foo$bar
  ),
  withNodeKey('baz'); withNode, // ...$foo$baz (otherwise would be ...$foo$bar$baz)
  ...
)
```
This is useful, for example, if you want to apply an enhancment HOC which uses its own
content node(s) without affecting the node paths of other children of the wrapped compoenent.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...hocs` | [HOC](globals.md#hoc)[] | A list of HOC's to be applied using the parallel node hierarchy.  These will             be composed using lodash `flowRight`  |

**Returns:** *function*

an HOC which can wrap any Component using the Bodiless `ContentNode` system.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` withoutProps

▸ **withoutProps**‹**Q**›(`keys`: string[]): *(Anonymous function)*

*Defined in [packages/bodiless-core/src/hoc.tsx:27](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/hoc.tsx#L27)*

**Type parameters:**

▪ **Q**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | string[] |

**Returns:** *(Anonymous function)*

## Object literals

### `Const` defaultActivateOnEffectState

### ▪ **defaultActivateOnEffectState**: *object*

*Defined in [packages/bodiless-core/src/ActivateContext.tsx:22](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/ActivateContext.tsx#L22)*

###  id

• **id**: *string* = ""

*Defined in [packages/bodiless-core/src/ActivateContext.tsx:23](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/ActivateContext.tsx#L23)*

###  setId

▸ **setId**(): *undefined*

*Defined in [packages/bodiless-core/src/ActivateContext.tsx:24](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/ActivateContext.tsx#L24)*

**Returns:** *undefined*

___

### `Const` defaultOverlaySettings

### ▪ **defaultOverlaySettings**: *object*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:66](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/index.tsx#L66)*

###  hasCloseButton

• **hasCloseButton**: *false* = false

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:68](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/index.tsx#L68)*

###  hasSpinner

• **hasSpinner**: *true* = true

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:69](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/index.tsx#L69)*

###  isActive

• **isActive**: *false* = false

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:67](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/index.tsx#L67)*

###  maxTimeoutInSeconds

• **maxTimeoutInSeconds**: *null* = null

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:71](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/index.tsx#L71)*

###  message

• **message**: *string* = ""

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:70](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/index.tsx#L70)*

###  onClose

▸ **onClose**(): *void*

*Defined in [packages/bodiless-core/src/PageEditContext/index.tsx:72](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/PageEditContext/index.tsx#L72)*

**Returns:** *void*

___

### `Const` defaultUI

### ▪ **defaultUI**: *object*

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:22](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L22)*

*Defined in [packages/bodiless-core/src/components/ContextMenuItem.tsx:22](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/ContextMenuItem.tsx#L22)*

*Defined in [packages/bodiless-core/src/components/ContextMenu.tsx:21](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/ContextMenu.tsx#L21)*

*Defined in [packages/bodiless-core/src/components/PageOverlay.tsx:29](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/PageOverlay.tsx#L29)*

###  Button

• **Button**: *string* = "button"

*Defined in [packages/bodiless-core/src/components/PageOverlay.tsx:32](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/PageOverlay.tsx#L32)*

###  ComponentFormButton

• **ComponentFormButton**: *string* = "button"

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:26](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L26)*

###  ComponentFormCloseButton

• **ComponentFormCloseButton**: *string* = "button"

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:27](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L27)*

###  ComponentFormDescription

• **ComponentFormDescription**: *string* = "div"

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:38](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L38)*

###  ComponentFormError

• **ComponentFormError**: *string* = "div"

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:32](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L32)*

###  ComponentFormLabel

• **ComponentFormLabel**: *string* = "label"

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:25](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L25)*

###  ComponentFormList

• **ComponentFormList**: *string* = "ul"

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:36](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L36)*

###  ComponentFormListItem

• **ComponentFormListItem**: *string* = "li"

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:37](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L37)*

###  ComponentFormSubmitButton

• **ComponentFormSubmitButton**: *string* = "button"

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:28](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L28)*

###  ComponentFormText

• **ComponentFormText**: *Text* = Text

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:30](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L30)*

###  ComponentFormTextArea

• **ComponentFormTextArea**: *TextArea* = TextArea

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:31](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L31)*

###  ComponentFormTitle

• **ComponentFormTitle**: *string* = "h3"

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:24](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L24)*

###  ComponentFormUnwrapButton

• **ComponentFormUnwrapButton**: *string* = "button"

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:29](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L29)*

###  ComponentFormWarning

• **ComponentFormWarning**: *string* = "div"

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:33](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L33)*

###  Form

• **Form**: *string* = "form"

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:34](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L34)*

*Defined in [packages/bodiless-core/src/components/ContextMenuItem.tsx:27](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/ContextMenuItem.tsx#L27)*

###  FormWrapper

• **FormWrapper**: *string* = "div"

*Defined in [packages/bodiless-core/src/components/ContextMenuItem.tsx:25](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/ContextMenuItem.tsx#L25)*

###  Icon

• **Icon**: *string* = "span"

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:23](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L23)*

*Defined in [packages/bodiless-core/src/components/ContextMenuItem.tsx:23](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/ContextMenuItem.tsx#L23)*

###  Message

• **Message**: *string* = "div"

*Defined in [packages/bodiless-core/src/components/PageOverlay.tsx:34](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/PageOverlay.tsx#L34)*

###  OverlayWrapper

• **OverlayWrapper**: *string* = "div"

*Defined in [packages/bodiless-core/src/components/PageOverlay.tsx:30](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/PageOverlay.tsx#L30)*

###  PopupWrapper

• **PopupWrapper**: *string* = "div"

*Defined in [packages/bodiless-core/src/components/PageOverlay.tsx:31](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/PageOverlay.tsx#L31)*

###  ReactTags

• **ReactTags**: *[ReactTagsField](globals.md#const-reacttagsfield)* = ReactTagsField

*Defined in [packages/bodiless-core/src/contextMenuForm.tsx:35](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/contextMenuForm.tsx#L35)*

###  Spinner

• **Spinner**: *string* = "div"

*Defined in [packages/bodiless-core/src/components/PageOverlay.tsx:33](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/PageOverlay.tsx#L33)*

###  Toolbar

• **Toolbar**: *string* = "div"

*Defined in [packages/bodiless-core/src/components/ContextMenu.tsx:22](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/ContextMenu.tsx#L22)*

###  ToolbarButton

• **ToolbarButton**: *string* = "div"

*Defined in [packages/bodiless-core/src/components/ContextMenuItem.tsx:24](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/ContextMenuItem.tsx#L24)*

###  ToolbarDivider

• **ToolbarDivider**: *string* = "hr"

*Defined in [packages/bodiless-core/src/components/ContextMenuItem.tsx:26](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/ContextMenuItem.tsx#L26)*

*Defined in [packages/bodiless-core/src/components/ContextMenu.tsx:23](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/ContextMenu.tsx#L23)*

###  Tooltip

• **Tooltip**: *Tooltip* = ReactTooltip

*Defined in [packages/bodiless-core/src/components/ContextMenuItem.tsx:28](https://github.com/johnsonandjohnson/Bodiless-JS/blob/14e7594/packages/bodiless-core/src/components/ContextMenuItem.tsx#L28)*
