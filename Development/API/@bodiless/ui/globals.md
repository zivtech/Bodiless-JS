[@bodiless/ui](README.md) › [Globals](globals.md)

# @bodiless/ui

## Index

### Interfaces

* [SpipperProps](interfaces/spipperprops.md)

### Variables

* [Anchor](globals.md#const-anchor)
* [BarsCount](globals.md#const-barscount)
* [Button](globals.md#const-button)
* [CheckBox](globals.md#const-checkbox)
* [ComponentFormButton](globals.md#const-componentformbutton)
* [ComponentFormCheckBox](globals.md#const-componentformcheckbox)
* [ComponentFormCloseButton](globals.md#const-componentformclosebutton)
* [ComponentFormDescription](globals.md#const-componentformdescription)
* [ComponentFormError](globals.md#const-componentformerror)
* [ComponentFormFieldTitle](globals.md#const-componentformfieldtitle)
* [ComponentFormFieldWrapper](globals.md#const-componentformfieldwrapper)
* [ComponentFormLabel](globals.md#const-componentformlabel)
* [ComponentFormList](globals.md#const-componentformlist)
* [ComponentFormListItem](globals.md#const-componentformlistitem)
* [ComponentFormOption](globals.md#const-componentformoption)
* [ComponentFormRadio](globals.md#const-componentformradio)
* [ComponentFormRadioGroup](globals.md#const-componentformradiogroup)
* [ComponentFormSelect](globals.md#const-componentformselect)
* [ComponentFormText](globals.md#const-componentformtext)
* [ComponentFormTextArea](globals.md#const-componentformtextarea)
* [ComponentFormTitle](globals.md#const-componentformtitle)
* [ComponentFormUnwrapButton](globals.md#const-componentformunwrapbutton)
* [ComponentFormWarning](globals.md#const-componentformwarning)
* [Div](globals.md#const-div)
* [Form](globals.md#const-form)
* [Hr](globals.md#const-hr)
* [Icon](globals.md#const-icon)
* [Img](globals.md#const-img)
* [Input](globals.md#const-input)
* [Label](globals.md#const-label)
* [MaxDegrees](globals.md#const-maxdegrees)
* [Option](globals.md#const-option)
* [Radio](globals.md#const-radio)
* [RadioGroup](globals.md#const-radiogroup)
* [ResizeHandle](globals.md#const-resizehandle)
* [Select](globals.md#const-select)
* [Span](globals.md#const-span)
* [Text](globals.md#const-text)
* [TextArea](globals.md#const-textarea)
* [Title](globals.md#const-title)
* [ToolbarButton](globals.md#const-toolbarbutton)
* [Warning](globals.md#const-warning)

### Functions

* [ComponentFormSpinner](globals.md#const-componentformspinner)
* [ComponentFormSubmitButton](globals.md#const-componentformsubmitbutton)
* [Spinner](globals.md#const-spinner)
* [SubmitButton](globals.md#const-submitbutton)

## Variables

### `Const` Anchor

• **Anchor**: *object* = stylable<HTMLProps<HTMLAnchorElement>>('a')

*Defined in [packages/bodiless-ui/src/elements.tsx:54](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L54)*

#### Type declaration:

▸ (`props`: P & StylableProps): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P & StylableProps |

* **displayName**: *string*

___

### `Const` BarsCount

• **BarsCount**: *12* = 12

*Defined in [packages/bodiless-ui/src/Spinner.tsx:18](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/Spinner.tsx#L18)*

___

### `Const` Button

• **Button**: *object* = stylable<HTMLProps<HTMLButtonElement>>('button')

*Defined in [packages/bodiless-ui/src/elements.tsx:44](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L44)*

#### Type declaration:

▸ (`props`: P & StylableProps): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P & StylableProps |

* **displayName**: *string*

___

### `Const` CheckBox

• **CheckBox**: *object* = stylable<FieldProps<any, any>>(BaseCheckBox)

*Defined in [packages/bodiless-ui/src/elements.tsx:51](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L51)*

#### Type declaration:

▸ (`props`: P & StylableProps): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P & StylableProps |

* **displayName**: *string*

___

### `Const` ComponentFormButton

• **ComponentFormButton**: *FunctionComponent‹HTMLProps‹HTMLButtonElement› & object›* = addClasses(
  'bl-text-grey-200 bl-cursor-pointer hover:bl-text-green',
)(Button)

*Defined in [packages/bodiless-ui/src/elements.tsx:121](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L121)*

___

### `Const` ComponentFormCheckBox

• **ComponentFormCheckBox**: *FunctionComponent‹FieldProps‹any, any› & object›* = addClasses(
  'bl-mr-grid-2 bl-mb-grid-2 align-baseline',
)(CheckBox)

*Defined in [packages/bodiless-ui/src/elements.tsx:110](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L110)*

___

### `Const` ComponentFormCloseButton

• **ComponentFormCloseButton**: *function* = flow(
  addClasses('hover:bl-text-red bl-float-right'),
  removeClasses('hover:bl-text-green'),
  withChild(() => <Icon>cancel</Icon>),
)(ComponentFormButton)

*Defined in [packages/bodiless-ui/src/elements.tsx:129](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L129)*

#### Type declaration:

▸ (`props`: P): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P |

___

### `Const` ComponentFormDescription

• **ComponentFormDescription**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses(
  'bl-text-xs bl-text-grey-100 bl-block bl-mb-grid-2 bl-max-w-xl-grid-1',
)(Div)

*Defined in [packages/bodiless-ui/src/elements.tsx:78](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L78)*

___

### `Const` ComponentFormError

• **ComponentFormError**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses(
  'bl-block bl-italic',
)(Div)

*Defined in [packages/bodiless-ui/src/elements.tsx:143](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L143)*

___

### `Const` ComponentFormFieldTitle

• **ComponentFormFieldTitle**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses(
  'bl-mb-grid-2 bl-font-bold bl-text-grey-100',
)(Div)

*Defined in [packages/bodiless-ui/src/elements.tsx:74](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L74)*

___

### `Const` ComponentFormFieldWrapper

• **ComponentFormFieldWrapper**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses(
  'bl-mb-grid-3 bl-w-full',
)(Div)

*Defined in [packages/bodiless-ui/src/elements.tsx:70](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L70)*

___

### `Const` ComponentFormLabel

• **ComponentFormLabel**: *FunctionComponent‹HTMLProps‹HTMLLabelElement› & object›* = addClasses(
  'bl-text-xs bl-text-grey-100 bl-block',
)(Label)

*Defined in [packages/bodiless-ui/src/elements.tsx:90](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L90)*

___

### `Const` ComponentFormList

• **ComponentFormList**: *FunctionComponent‹HTMLProps‹HTMLUListElement› & object›* = addClasses(
  'list-none bl-max-h-xl-grid-1 bl-overflow-y-scroll',
)(Ul)

*Defined in [packages/bodiless-ui/src/elements.tsx:86](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L86)*

___

### `Const` ComponentFormListItem

• **ComponentFormListItem**: *FunctionComponent‹HTMLProps‹HTMLLIElement› & object›* = addClasses(
  'first:bl-border-t-0 bl-border-t bl-py-grid-1 bl-px-grid-1 bl-max-w-xl-grid-1',
)(Li)

*Defined in [packages/bodiless-ui/src/elements.tsx:82](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L82)*

___

### `Const` ComponentFormOption

• **ComponentFormOption**: *object* = Option

*Defined in [packages/bodiless-ui/src/elements.tsx:119](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L119)*

#### Type declaration:

▸ (`props`: P & StylableProps): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P & StylableProps |

* **displayName**: *string*

___

### `Const` ComponentFormRadio

• **ComponentFormRadio**: *FunctionComponent‹ChildFieldProps‹any, any› & object›* = addClasses(
  'bl-mr-grid-2 bl-mb-grid-2 align-baseline',
)(Radio)

*Defined in [packages/bodiless-ui/src/elements.tsx:106](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L106)*

___

### `Const` ComponentFormRadioGroup

• **ComponentFormRadioGroup**: *FunctionComponent‹FieldProps‹any, any› & object›* = addClasses(
  'bl-mb-grid-2',
)(RadioGroup)

*Defined in [packages/bodiless-ui/src/elements.tsx:102](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L102)*

___

### `Const` ComponentFormSelect

• **ComponentFormSelect**: *FunctionComponent‹SelectFieldProps‹any, any› & object›* = addClasses(
  `bl-text-grey-900 bg-grey-100 bl-text-xs bl-w-full
  bl-min-w-xl-grid-1 bl-block bl-my-grid-2 bl-p-grid-1`,
)(Select)

*Defined in [packages/bodiless-ui/src/elements.tsx:114](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L114)*

___

### `Const` ComponentFormText

• **ComponentFormText**: *FunctionComponent‹FieldProps‹any, any› & object›* = addClasses(
  'bl-text-grey-900 bg-grey-100 bl-text-xs bl-w-full bl-min-w-xl-grid-1 bl-block bl-my-grid-2 bl-p-grid-1',
)(Text)

*Defined in [packages/bodiless-ui/src/elements.tsx:94](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L94)*

___

### `Const` ComponentFormTextArea

• **ComponentFormTextArea**: *FunctionComponent‹FieldProps‹any, any› & object›* = addClasses(
  'bl-resize bl-text-grey-900 bg-grey-100 bl-text-xs bl-w-full bl-min-w-xl-grid-1 bl-min-h-grid-16 bl-block bl-my-grid-2 bl-p-grid-1',
)(TextArea)

*Defined in [packages/bodiless-ui/src/elements.tsx:98](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L98)*

___

### `Const` ComponentFormTitle

• **ComponentFormTitle**: *FunctionComponent‹HTMLProps‹HTMLHeadingElement› & object›* = addClasses(
  'bl-text-lg bl-font-bold bl-text-grey-100 bl-block bl-mb-grid-2',
)(Title)

*Defined in [packages/bodiless-ui/src/elements.tsx:66](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L66)*

___

### `Const` ComponentFormUnwrapButton

• **ComponentFormUnwrapButton**: *FunctionComponent‹HTMLProps‹HTMLButtonElement› & object›* = addClasses(
  'bl-absolute bl-bottom-0 bl-left-0 bl-mb-5 bl-ml-3 bl-cursor-pointer bl-underline',
)(Button)

*Defined in [packages/bodiless-ui/src/elements.tsx:125](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L125)*

___

### `Const` ComponentFormWarning

• **ComponentFormWarning**: *any* = flow(
  addClasses('bl-float-left bl-flex bl-items-center'),
)(({ children, ...rest }: any) => (
  <Div {...rest}>
    <Warning />
    {children}
  </Div>
))

*Defined in [packages/bodiless-ui/src/elements.tsx:168](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L168)*

___

### `Const` Div

• **Div**: *object* = stylable<HTMLProps<HTMLDivElement>>('div')

*Defined in [packages/bodiless-ui/src/elements.tsx:42](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L42)*

#### Type declaration:

▸ (`props`: P & StylableProps): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P & StylableProps |

* **displayName**: *string*

___

### `Const` Form

• **Form**: *object* = stylable<HTMLProps<HTMLFormElement>>('form')

*Defined in [packages/bodiless-ui/src/elements.tsx:46](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L46)*

#### Type declaration:

▸ (`props`: P & StylableProps): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P & StylableProps |

* **displayName**: *string*

___

### `Const` Hr

• **Hr**: *object* = stylable<HTMLProps<HTMLHRElement>>('hr')

*Defined in [packages/bodiless-ui/src/elements.tsx:45](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L45)*

#### Type declaration:

▸ (`props`: P & StylableProps): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P & StylableProps |

* **displayName**: *string*

___

### `Const` Icon

• **Icon**: *any* = flow(
  addClasses('bl-rounded bl-p-grid-1 material-icons'),
  withoutProps<ButtonVariantProps>(['isActive']),
  addClasses('bl-text-3xl'),
  flowIf(hasProp('isActive'))(
    addClasses('bl-bg-primary'),
  ),
  addProps({ 'aria-hidden': true }),
)(Span)

*Defined in [packages/bodiless-ui/src/elements.tsx:56](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L56)*

___

### `Const` Img

• **Img**: *object* = stylable<HTMLProps<HTMLImageElement>>('img')

*Defined in [packages/bodiless-ui/src/elements.tsx:40](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L40)*

#### Type declaration:

▸ (`props`: P & StylableProps): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P & StylableProps |

* **displayName**: *string*

___

### `Const` Input

• **Input**: *object* = stylable<HTMLProps<HTMLInputElement>>('input')

*Defined in [packages/bodiless-ui/src/elements.tsx:41](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L41)*

#### Type declaration:

▸ (`props`: P & StylableProps): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P & StylableProps |

* **displayName**: *string*

___

### `Const` Label

• **Label**: *object* = stylable<HTMLProps<HTMLLabelElement>>('label')

*Defined in [packages/bodiless-ui/src/elements.tsx:39](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L39)*

#### Type declaration:

▸ (`props`: P & StylableProps): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P & StylableProps |

* **displayName**: *string*

___

### `Const` MaxDegrees

• **MaxDegrees**: *360* = 360

*Defined in [packages/bodiless-ui/src/Spinner.tsx:19](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/Spinner.tsx#L19)*

___

### `Const` Option

• **Option**: *object* = stylable<ChildFieldProps<any, any>>(BaseOption)

*Defined in [packages/bodiless-ui/src/elements.tsx:53](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L53)*

#### Type declaration:

▸ (`props`: P & StylableProps): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P & StylableProps |

* **displayName**: *string*

___

### `Const` Radio

• **Radio**: *object* = stylable<ChildFieldProps<any, any>>(BaseRadio)

*Defined in [packages/bodiless-ui/src/elements.tsx:50](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L50)*

#### Type declaration:

▸ (`props`: P & StylableProps): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P & StylableProps |

* **displayName**: *string*

___

### `Const` RadioGroup

• **RadioGroup**: *object* = stylable<FieldProps<any, any>>(BaseRadioGroup)

*Defined in [packages/bodiless-ui/src/elements.tsx:49](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L49)*

#### Type declaration:

▸ (`props`: P & StylableProps): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P & StylableProps |

* **displayName**: *string*

___

### `Const` ResizeHandle

• **ResizeHandle**: *FunctionComponent‹HTMLProps‹HTMLSpanElement› & object›* = addClasses(
  'bl-block bl-text-2xl bl-absolute material-icons bl-z-1 bl-text-red bl-rotate-45deg bl-bottom-grid-0 bl-right-grid-0',
)(Span)

*Defined in [packages/bodiless-ui/src/elements.tsx:158](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L158)*

___

### `Const` Select

• **Select**: *object* = stylable<SelectFieldProps<any, any>>(BaseSelect)

*Defined in [packages/bodiless-ui/src/elements.tsx:52](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L52)*

#### Type declaration:

▸ (`props`: P & StylableProps): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P & StylableProps |

* **displayName**: *string*

___

### `Const` Span

• **Span**: *object* = stylable<HTMLProps<HTMLSpanElement>>('span')

*Defined in [packages/bodiless-ui/src/elements.tsx:43](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L43)*

#### Type declaration:

▸ (`props`: P & StylableProps): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P & StylableProps |

* **displayName**: *string*

___

### `Const` Text

• **Text**: *object* = stylable<FieldProps<any, any>>(BaseText)

*Defined in [packages/bodiless-ui/src/elements.tsx:47](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L47)*

#### Type declaration:

▸ (`props`: P & StylableProps): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P & StylableProps |

* **displayName**: *string*

___

### `Const` TextArea

• **TextArea**: *object* = stylable<FieldProps<any, any>>(BaseTextArea)

*Defined in [packages/bodiless-ui/src/elements.tsx:48](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L48)*

#### Type declaration:

▸ (`props`: P & StylableProps): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P & StylableProps |

* **displayName**: *string*

___

### `Const` Title

• **Title**: *object* = stylable<HTMLProps<HTMLHeadingElement>>('h3')

*Defined in [packages/bodiless-ui/src/elements.tsx:38](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L38)*

#### Type declaration:

▸ (`props`: P & StylableProps): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P & StylableProps |

* **displayName**: *string*

___

### `Const` ToolbarButton

• **ToolbarButton**: *any* = flow(
  withoutProps<ButtonVariantProps>(['isActive', 'isFirst', 'isDisabled']),
  addClasses('bl-cursor-pointer bl-text-grey-200 bl-block'),
  flowIf(hasProp('isDisabled'))(
    addClasses('bl-text-grey-600').removeClasses('bl-text-grey-200'),
  ),
  addProps({ type: 'button' }),
)(Button)

*Defined in [packages/bodiless-ui/src/elements.tsx:149](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L149)*

___

### `Const` Warning

• **Warning**: *any* = flow(
  addClasses('bl-w-grid-7 bl-text-yellow-500'),
)((props: JSX.IntrinsicAttributes) => (
  <Icon {...props}>report_problem_outlined</Icon>
))

*Defined in [packages/bodiless-ui/src/elements.tsx:162](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L162)*

## Functions

### `Const` ComponentFormSpinner

▸ **ComponentFormSpinner**(): *Element‹›*

*Defined in [packages/bodiless-ui/src/Spinner.tsx:44](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/Spinner.tsx#L44)*

**Returns:** *Element‹›*

___

### `Const` ComponentFormSubmitButton

▸ **ComponentFormSubmitButton**(`props`: HTMLProps‹HTMLButtonElement›): *Element‹›*

*Defined in [packages/bodiless-ui/src/elements.tsx:135](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L135)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLButtonElement› |

**Returns:** *Element‹›*

___

### `Const` Spinner

▸ **Spinner**(`props`: any): *Element‹›*

*Defined in [packages/bodiless-ui/src/Spinner.tsx:25](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/Spinner.tsx#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

**Returns:** *Element‹›*

___

### `Const` SubmitButton

▸ **SubmitButton**(`props`: HTMLProps‹HTMLButtonElement› & object & object): *Element‹›*

*Defined in [packages/bodiless-ui/src/elements.tsx:147](https://github.com/johnsonandjohnson/Bodiless-JS/blob/08ccebe/packages/bodiless-ui/src/elements.tsx#L147)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLButtonElement› & object & object |

**Returns:** *Element‹›*
