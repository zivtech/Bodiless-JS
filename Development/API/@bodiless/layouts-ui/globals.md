[@bodiless/layouts-ui](README.md) › [Globals](globals.md)

# @bodiless/layouts-ui

## Index

### Type aliases

* [TProps](globals.md#tprops)

### Functions

* [ComponentSelector](globals.md#const-componentselector)
* [DragHandle](globals.md#const-draghandle)
* [FlowContainer](globals.md#const-flowcontainer)
* [Reresizable](globals.md#const-reresizable)
* [ResizeHandle](globals.md#const-resizehandle)
* [Wrapper](globals.md#const-wrapper)

### Object literals

* [ui](globals.md#const-ui)

## Type aliases

###  TProps

Ƭ **TProps**: *object*

*Defined in [packages/bodiless-layouts-ui/src/ResizeHandle.tsx:18](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ResizeHandle.tsx#L18)*

#### Type declaration:

* **className**? : *undefined | string*

## Functions

### `Const` ComponentSelector

▸ **ComponentSelector**(`props`: object & object): *Element‹›*

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:131](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L131)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & object |

**Returns:** *Element‹›*

___

### `Const` DragHandle

▸ **DragHandle**(): *Element‹›*

*Defined in [packages/bodiless-layouts-ui/src/DragHandle.tsx:17](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/DragHandle.tsx#L17)*

**Returns:** *Element‹›*

___

### `Const` FlowContainer

▸ **FlowContainer**(`props`: object & object & object & object): *Element‹›*

*Defined in [packages/bodiless-layouts-ui/src/FlowContainer.tsx:29](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/FlowContainer.tsx#L29)*

A FlowContainer is a component which allows a content editor to select and place
components.

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & object & object & object |

**Returns:** *Element‹›*

___

### `Const` Reresizable

▸ **Reresizable**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-layouts-ui/src/Reresizable.tsx:18](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/Reresizable.tsx#L18)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`isEnabled` | undefined &#124; false &#124; true |
`rest` | rest |

**Returns:** *Element‹›*

___

### `Const` ResizeHandle

▸ **ResizeHandle**(`hocProps`: [TProps](globals.md#tprops)): *ReactElement‹[TProps](globals.md#tprops)›*

*Defined in [packages/bodiless-layouts-ui/src/ResizeHandle.tsx:22](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ResizeHandle.tsx#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`hocProps` | [TProps](globals.md#tprops) |

**Returns:** *ReactElement‹[TProps](globals.md#tprops)›*

___

### `Const` Wrapper

▸ **Wrapper**(`props`: object & SortableElementProps & object): *Element‹›*

*Defined in [packages/bodiless-layouts-ui/src/SortableResizableWrapper.tsx:32](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/SortableResizableWrapper.tsx#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & SortableElementProps & object |

**Returns:** *Element‹›*

## Object literals

### `Const` ui

### ▪ **ui**: *object*

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:25](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L25)*

*Defined in [packages/bodiless-layouts-ui/src/SortableResizableWrapper.tsx:26](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/SortableResizableWrapper.tsx#L26)*

*Defined in [packages/bodiless-layouts-ui/src/FlowContainer.tsx:20](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/FlowContainer.tsx#L20)*

###  AccordionCheckBox

• **AccordionCheckBox**: *FunctionComponent‹FieldProps‹any, any› & object›* = addClasses(
    'bl-ml-grid-1',
  )(CheckBox)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:85](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L85)*

###  AccordionCheckboxLabel

• **AccordionCheckboxLabel**: *FunctionComponent‹HTMLProps‹HTMLLabelElement› & object›* = addClasses(
    'bl-ml-grid-2 bl-font-semibold',
  )(Label)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:81](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L81)*

###  AccordionCheckboxWrapper

• **AccordionCheckboxWrapper**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses(
    'bl-italic bl-mt-grid-1',
  )(Div)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:73](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L73)*

###  AccordionItemWrapper

• **AccordionItemWrapper**: *FunctionComponent‹HTMLProps‹HTMLAnchorElement› & object›* = addClasses(
    'bl-flex bl-items-center bl-mt-grid-2 bl-text-base',
  )(Anchor)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:77](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L77)*

###  AccordionLabel

• **AccordionLabel**: *FunctionComponent‹HTMLProps‹HTMLLabelElement› & object›* = addClasses(
    'bl-inline-block',
  )(Label)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:97](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L97)*

###  AccordionWrapper

• **AccordionWrapper**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses(
    'bl-font-semibold',
  )(Div)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:69](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L69)*

###  AllCheckboxWrapper

• **AllCheckboxWrapper**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses(
    'bl-text-white',
  )(Div)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:65](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L65)*

###  ComponentDescriptionIcon

• **ComponentDescriptionIcon**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses(
    'bl-absolute bl-top-grid-0 bl-right-grid-0 material-icons bl-z-20 bl-text-grey-800 bl-m-grid-1',
  )(Div)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:117](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L117)*

###  ComponentDescriptionStyle

• **ComponentDescriptionStyle**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses(
    'bl-bg-white bl-text-red bl-w-xl-grid-0 bl-p-grid-2 bl-mt-grid-2 bl-h-xl-grid-0 bl-mb-grid-2',
  )(Div)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:113](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L113)*

###  ComponentDescriptionWrapper

• **ComponentDescriptionWrapper**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses(
    'bl-w-xl-grid-0 bl-min-h-32',
  )(Div)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:109](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L109)*

###  ComponentSelectButton

• **ComponentSelectButton**: *FunctionComponent‹HTMLProps‹HTMLButtonElement› & object›* = addClasses(
    'bl-absolute bl-z-10 bl-top-grid-0 bl-left-grid-0 bl-w-full bl-h-full bl-opacity-0',
  )(Button)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:121](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L121)*

###  ComponentSelectorWrapper

• **ComponentSelectorWrapper**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses(
    'bl-text-white bl-mr-grid-3  bl-whitespace-no-wrap',
  )(Div)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:57](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L57)*

###  ComponentTitleWrapper

• **ComponentTitleWrapper**: *FunctionComponent‹HTMLProps‹HTMLHeadingElement› & object›* = ComponentFormTitle

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:51](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L51)*

###  DragHandle

• **DragHandle**: *FunctionComponent‹HTMLProps‹HTMLSpanElement››*

*Defined in [packages/bodiless-layouts-ui/src/SortableResizableWrapper.tsx:29](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/SortableResizableWrapper.tsx#L29)*

###  FlexSection

• **FlexSection**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses('bl-pt-grid-16')(Div)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:27](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L27)*

###  FlexSectionFull

• **FlexSectionFull**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses('bl-pt-grid-16 bl-w-full')(Div)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:28](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L28)*

###  FlowContainerEmpty

• **FlowContainerEmpty**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses(
    'bl-border-2 bl-border-dashed bl-text-gray-600',
  )(Div)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:29](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L29)*

###  GridListBox

• **GridListBox**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses(
    'bl-text-xs bl-flex bl-flex-wrap bl-mb-grid-2 bl-bg-white',
  )(Div)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:43](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L43)*

###  GridListBoxInner

• **GridListBoxInner**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses(
    'bl-w-full bl-overflow-y-scroll bl-flex bl-flex-wrap bl-h-xl-grid-2',
  )(Div)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:39](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L39)*

###  GridListBoxWrapper

• **GridListBoxWrapper**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses(
    'bl-w-full bl-h-xl-grid-2',
  )(Div)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:36](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L36)*

###  IconWrapper

• **IconWrapper**: *FunctionComponent‹HTMLProps‹HTMLSpanElement› & object›* = addClasses(
    'bl-block bl-absolute bl-left-grid-0 bl-top-grid-0',
  )(Span)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:53](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L53)*

###  ItemBox

• **ItemBox**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses(
    'bl-bg-grey-200 bl-flex bl-flex-col bl-items-center bl-p-grid-2 bl-h-full bl-w-full bl-relative bl-overflow-hidden bl-cursor-pointer',
  )(Div)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:33](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L33)*

###  ItemBoxWrapper

• **ItemBoxWrapper**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses('bl-p-grid-2')(Div)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:32](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L32)*

###  MasterWrapper

• **MasterWrapper**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses('bl-flex bl-form-wrapper')(Div)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:26](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L26)*

###  Reresizable

• **Reresizable**: *FunctionComponent‹ResizableProps‹› & object›*

*Defined in [packages/bodiless-layouts-ui/src/SortableResizableWrapper.tsx:27](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/SortableResizableWrapper.tsx#L27)*

###  ResizeHandle

• **ResizeHandle**: *[ResizeHandle](globals.md#const-resizehandle)*

*Defined in [packages/bodiless-layouts-ui/src/SortableResizableWrapper.tsx:28](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/SortableResizableWrapper.tsx#L28)*

###  ScalingHeader

• **ScalingHeader**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses('bl-w-full bl-cursor-pointer bl-justify-end bl-text-grey-900 bl-p-grid-2 bl-flex')(Div)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:125](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L125)*

###  SearchBar

• **SearchBar**: *FunctionComponent‹HTMLProps‹HTMLInputElement› & object›* = addClasses(
    'bl-border bl-border-grey bl-p-grid-1 bl-w-full',
  )(Input)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:93](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L93)*

###  SearchBarWrapper

• **SearchBarWrapper**: *FunctionComponent‹HTMLProps‹HTMLDivElement› & object›* = addClasses(
    'bl-bg-white bl-content-center bl-h-grid-9 bl-font-sans bl-px-grid-2 bl-py-grid-1 bl-text-black',
  )(Div)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:89](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L89)*

###  SubmitButton

• **SubmitButton**: *FunctionComponent‹HTMLProps‹HTMLButtonElement› & object›* = addClasses(
    'bl-right-grid-0 bl-absolute tbl-ext-m bl-mr-grid-2',
  )(SubmitButtonBase)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:61](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L61)*

###  TitleWrapper

• **TitleWrapper**: *FunctionComponent‹HTMLProps‹HTMLSpanElement› & object›* = addClasses(
    'bl-font-semibold bl-text-sm bl-text-grey-800',
  )(Span)

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:47](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L47)*

###  Wrapper

• **Wrapper**: *FunctionComponent‹object & SortableElementProps›*

*Defined in [packages/bodiless-layouts-ui/src/FlowContainer.tsx:22](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/FlowContainer.tsx#L22)*

###  AccordionIconContract

▸ **AccordionIconContract**(): *Element‹›*

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:101](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L101)*

**Returns:** *Element‹›*

###  AccordionIconExpand

▸ **AccordionIconExpand**(): *Element‹›*

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:105](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L105)*

**Returns:** *Element‹›*

###  ScalingButtonFull

▸ **ScalingButtonFull**(`props`: MaterialIconDefaultProps): *Element‹›*

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:126](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | MaterialIconDefaultProps |

**Returns:** *Element‹›*

###  ScalingButtonHalf

▸ **ScalingButtonHalf**(`props`: MaterialIconDefaultProps): *Element‹›*

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:127](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L127)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | MaterialIconDefaultProps |

**Returns:** *Element‹›*

###  ScalingButtonQuarter

▸ **ScalingButtonQuarter**(`props`: MaterialIconDefaultProps): *Element‹›*

*Defined in [packages/bodiless-layouts-ui/src/ComponentSelector.tsx:128](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e7fc7a7/packages/bodiless-layouts-ui/src/ComponentSelector.tsx#L128)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | MaterialIconDefaultProps |

**Returns:** *Element‹›*
