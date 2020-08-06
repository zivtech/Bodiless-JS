[@bodiless/core-ui](README.md) › [Globals](globals.md)

# @bodiless/core-ui

## Index

### Type aliases

* [ButtonProps](globals.md#buttonprops)
* [VariantProps](globals.md#variantprops)

### Variables

* [ContextWrapperDiv](globals.md#const-contextwrapperdiv)
* [FormWrapper](globals.md#const-formwrapper)
* [Message](globals.md#const-message)
* [OverlayWrapper](globals.md#const-overlaywrapper)
* [PopupWrapper](globals.md#const-popupwrapper)
* [Toolbar](globals.md#const-toolbar)
* [ToolbarDivider](globals.md#const-toolbardivider)
* [ToolbarRight](globals.md#const-toolbarright)

### Functions

* [Button](globals.md#const-button)
* [ContextWrapper](globals.md#const-contextwrapper)
* [GlobalContextMenu](globals.md#const-globalcontextmenu)
* [GlobalTooltip](globals.md#const-globaltooltip)
* [LocalContextMenu](globals.md#const-localcontextmenu)
* [LocalTooltip](globals.md#const-localtooltip)
* [PageEditor](globals.md#const-pageeditor)
* [PageOverlay](globals.md#const-pageoverlay)
* [ReactTagsField](globals.md#const-reacttagsfield)
* [WrappedSpinner](globals.md#const-wrappedspinner)

### Object literals

* [ui](globals.md#const-ui)

## Type aliases

###  ButtonProps

Ƭ **ButtonProps**: *object*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:34](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/PageOverlay.tsx#L34)*

#### Type declaration:

* **onClick**(): *function*

  * (): *void*

___

###  VariantProps

Ƭ **VariantProps**: *object*

*Defined in [packages/bodiless-core-ui/src/ContextWrapper.tsx:25](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/ContextWrapper.tsx#L25)*

#### Type declaration:

* **isActive**? : *undefined | false | true*

## Variables

### `Const` ContextWrapperDiv

• **ContextWrapperDiv**: *any* = flow(
  withoutProps<VariantProps>(['isActive']),
  addClasses('bl-border bl-border-transparent').flow,
  flowIf(hasProp('isActive'))(
    addClasses('bl-border-red').removeClasses('bl-border-transparent'),
  ),
)(Div)

*Defined in [packages/bodiless-core-ui/src/ContextWrapper.tsx:29](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/ContextWrapper.tsx#L29)*

___

### `Const` FormWrapper

• **FormWrapper**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses('bl-flex')(Div)

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:45](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L45)*

___

### `Const` Message

• **Message**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses([
  'bl-text-gray-100 bl-text-center bl-text-lg bl-whitespace-pre-line clear-right',
])(Div)

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:53](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/PageOverlay.tsx#L53)*

___

### `Const` OverlayWrapper

• **OverlayWrapper**: *function* = flow(
  addClasses([
    'bl-p-20', 'bl-py-10', 'bl-w-full', 'bl-h-full', 'bl-fixed', 'bl-top-0', 'bl-z-max',
    'bl-flex', 'bl-flex-col', 'bl-justify-center', 'bl-items-center', 'bl-bg-black-transparent',
  ]),
  addProps({
    id: 'page-overlay',
  }),
)(Div)

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:22](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/PageOverlay.tsx#L22)*

#### Type declaration:

▸ (`props`: P): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P |

___

### `Const` PopupWrapper

• **PopupWrapper**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses('bl-p-5 bl-rounded bl-bg-black')(Div)

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:32](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/PageOverlay.tsx#L32)*

___

### `Const` Toolbar

• **Toolbar**: *function* = flow(
  addClasses('bl-flex'),
  addProps({ role: 'toolbar', 'aria-label': 'Local Context Menu' }),
)(Div)

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:34](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L34)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:32](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L32)*

#### Type declaration:

▸ (`props`: P): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P |

___

### `Const` ToolbarDivider

• **ToolbarDivider**: *FunctionComponent‹HTMLProps‹HTMLHRElement› & object›* = addClasses(
  'bl-bg-grey bl-w-auto bl-my-grid-3 bl-h-px',
)(Hr)

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:47](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L47)*

___

### `Const` ToolbarRight

• **ToolbarRight**: *function* = flow(
  addClasses('bl-right-grid-0'),
  removeClasses('bl-left-grid-0'),
  addProps({ 'aria-label': 'Global Context Menu Right' }),
)(Toolbar)

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:39](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L39)*

#### Type declaration:

▸ (`props`: P): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P |

## Functions

### `Const` Button

▸ **Button**(`props`: [ButtonProps](globals.md#buttonprops)): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:38](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/PageOverlay.tsx#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [ButtonProps](globals.md#buttonprops) |

**Returns:** *Element‹›*

___

### `Const` ContextWrapper

▸ **ContextWrapper**(`props`: object & HTMLProps‹HTMLDivElement› & object): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/ContextWrapper.tsx:41](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/ContextWrapper.tsx#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & HTMLProps‹HTMLDivElement› & object |

**Returns:** *Element‹›*

___

### `Const` GlobalContextMenu

▸ **GlobalContextMenu**(`props`: object & HTMLProps‹HTMLElement› & object): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:106](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & HTMLProps‹HTMLElement› & object |

**Returns:** *Element‹›*

___

### `Const` GlobalTooltip

▸ **GlobalTooltip**(`props`: object & object & object): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:51](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & object & object |

**Returns:** *Element‹›*

___

### `Const` LocalContextMenu

▸ **LocalContextMenu**(`props`: object & HTMLProps‹HTMLElement› & object): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:69](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & HTMLProps‹HTMLElement› & object |

**Returns:** *Element‹›*

___

### `Const` LocalTooltip

▸ **LocalTooltip**(`props`: object & object & object): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:37](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & object & object |

**Returns:** *Element‹›*

___

### `Const` PageEditor

▸ **PageEditor**(`props`: object): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/PageEditor.tsx:27](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/PageEditor.tsx#L27)*

**Parameters:**

▪ **props**: *object*

Name | Type |
------ | ------ |
`children?` | ReactNode |

**Returns:** *Element‹›*

___

### `Const` PageOverlay

▸ **PageOverlay**(`props`: any): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:65](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/PageOverlay.tsx#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

**Returns:** *Element‹›*

___

### `Const` ReactTagsField

▸ **ReactTagsField**(`props`: object & object & object): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/ReactTags.tsx:18](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/ReactTags.tsx#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & object & object |

**Returns:** *Element‹›*

___

### `Const` WrappedSpinner

▸ **WrappedSpinner**(): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:48](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/PageOverlay.tsx#L48)*

**Returns:** *Element‹›*

## Object literals

### `Const` ui

### ▪ **ui**: *object*

*Defined in [packages/bodiless-core-ui/src/ContextWrapper.tsx:37](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/ContextWrapper.tsx#L37)*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:76](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L76)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:44](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L44)*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:57](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/PageOverlay.tsx#L57)*

*Defined in [packages/bodiless-core-ui/src/PageEditor.tsx:21](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/PageEditor.tsx#L21)*

###  Button

• **Button**: *[Button](globals.md#const-button)*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:60](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/PageOverlay.tsx#L60)*

###  ComponentFormButton

• **ComponentFormButton**: *FunctionComponent‹HTMLProps‹HTMLButtonElement› & object›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:89](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L89)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:54](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L54)*

###  ComponentFormCheckBox

• **ComponentFormCheckBox**: *FunctionComponent‹FieldProps‹any, any› & object›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:84](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L84)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:49](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L49)*

###  ComponentFormCloseButton

• **ComponentFormCloseButton**: *function*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:90](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L90)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:55](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L55)*

#### Type declaration:

▸ (`props`: HTMLProps‹HTMLButtonElement› & StylableProps): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLButtonElement› & StylableProps |

###  ComponentFormDescription

• **ComponentFormDescription**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:79](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L79)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:60](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L60)*

###  ComponentFormError

• **ComponentFormError**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:93](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L93)*

###  ComponentFormFieldTitle

• **ComponentFormFieldTitle**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:83](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L83)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:48](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L48)*

###  ComponentFormFieldWrapper

• **ComponentFormFieldWrapper**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:82](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L82)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:47](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L47)*

###  ComponentFormLabel

• **ComponentFormLabel**: *FunctionComponent‹HTMLProps‹HTMLLabelElement› & object›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:78](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L78)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:59](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L59)*

###  ComponentFormList

• **ComponentFormList**: *FunctionComponent‹HTMLProps‹HTMLUListElement› & object›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:95](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L95)*

###  ComponentFormListItem

• **ComponentFormListItem**: *FunctionComponent‹HTMLProps‹HTMLLIElement› & object›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:96](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L96)*

###  ComponentFormOption

• **ComponentFormOption**: *object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:88](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L88)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:53](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L53)*

#### Type declaration:

▸ (`props`: ChildFieldProps‹any, any› & StylableProps): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | ChildFieldProps‹any, any› & StylableProps |

* **displayName**: *string*

###  ComponentFormRadio

• **ComponentFormRadio**: *FunctionComponent‹ChildFieldProps‹any, any› & object›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:85](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L85)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:50](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L50)*

###  ComponentFormRadioGroup

• **ComponentFormRadioGroup**: *FunctionComponent‹FieldProps‹any, any› & object›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:86](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L86)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:51](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L51)*

###  ComponentFormSelect

• **ComponentFormSelect**: *FunctionComponent‹SelectFieldProps‹any, any› & object›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:87](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L87)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:52](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L52)*

###  ComponentFormSubmitButton

• **ComponentFormSubmitButton**: *function*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:91](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L91)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:57](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L57)*

#### Type declaration:

▸ (`props`: HTMLProps‹HTMLButtonElement›): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLButtonElement› |

###  ComponentFormText

• **ComponentFormText**: *FunctionComponent‹FieldProps‹any, any› & object›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:80](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L80)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:45](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L45)*

###  ComponentFormTextArea

• **ComponentFormTextArea**: *FunctionComponent‹FieldProps‹any, any› & object›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:81](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L81)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:46](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L46)*

###  ComponentFormTitle

• **ComponentFormTitle**: *FunctionComponent‹HTMLProps‹HTMLHeadingElement› & object›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:77](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L77)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:58](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L58)*

###  ComponentFormUnwrapButton

• **ComponentFormUnwrapButton**: *FunctionComponent‹HTMLProps‹HTMLButtonElement› & object›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:92](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L92)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:56](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L56)*

###  ComponentFormWarning

• **ComponentFormWarning**: *any*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:94](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L94)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:61](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L61)*

###  ContextWrapper

• **ContextWrapper**: *any* = ContextWrapperDiv

*Defined in [packages/bodiless-core-ui/src/ContextWrapper.tsx:38](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/ContextWrapper.tsx#L38)*

###  FormWrapper

• **FormWrapper**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:101](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L101)*

###  GlobalContextMenu

• **GlobalContextMenu**: *FunctionComponent‹object & HTMLProps‹HTMLElement››*

*Defined in [packages/bodiless-core-ui/src/PageEditor.tsx:23](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/PageEditor.tsx#L23)*

###  Icon

• **Icon**: *any*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:97](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L97)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:62](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L62)*

###  LocalContextMenu

• **LocalContextMenu**: *FunctionComponent‹object & HTMLProps‹HTMLElement››*

*Defined in [packages/bodiless-core-ui/src/PageEditor.tsx:22](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/PageEditor.tsx#L22)*

###  Message

• **Message**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:62](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/PageOverlay.tsx#L62)*

###  OverlayWrapper

• **OverlayWrapper**: *function*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:58](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/PageOverlay.tsx#L58)*

#### Type declaration:

▸ (`props`: P): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P |

###  PageOverlay

• **PageOverlay**: *[PageOverlay](globals.md#const-pageoverlay)*

*Defined in [packages/bodiless-core-ui/src/PageEditor.tsx:24](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/PageEditor.tsx#L24)*

###  PopupWrapper

• **PopupWrapper**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:59](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/PageOverlay.tsx#L59)*

###  ReactTags

• **ReactTags**: *ComponentClass‹object & object, any› | FunctionComponent‹object & object›* = ReactTagsField

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:103](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L103)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:66](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L66)*

###  Spinner

• **Spinner**: *[WrappedSpinner](globals.md#const-wrappedspinner)* = WrappedSpinner

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:61](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/PageOverlay.tsx#L61)*

###  Toolbar

• **Toolbar**: *function*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:98](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L98)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:63](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L63)*

#### Type declaration:

▸ (`props`: P): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P |

###  ToolbarButton

• **ToolbarButton**: *any*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:99](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L99)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:64](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L64)*

###  ToolbarDivider

• **ToolbarDivider**: *FunctionComponent‹HTMLProps‹HTMLHRElement› & object›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:100](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L100)*

###  Tooltip

• **Tooltip**: *FunctionComponent‹object & object›* = LocalTooltip

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:102](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L102)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:65](https://github.com/johnsonandjohnson/Bodiless-JS/blob/ad06710/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L65)*
