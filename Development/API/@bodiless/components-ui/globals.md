[@bodiless/components-ui](README.md) › [Globals](globals.md)

# @bodiless/components-ui

## Index

### Type aliases

* [HOC](globals.md#hoc)

### Variables

* [Image](globals.md#const-image)
* [Input](globals.md#const-input)
* [MasterWrapper](globals.md#const-masterwrapper)
* [Wrapper](globals.md#const-wrapper)

### Functions

* [DragRejected](globals.md#const-dragrejected)
* [UploadArea](globals.md#const-uploadarea)
* [UploadFinished](globals.md#const-uploadfinished)
* [UploadStatus](globals.md#const-uploadstatus)
* [UploadTimeout](globals.md#const-uploadtimeout)
* [Uploading](globals.md#const-uploading)
* [asBodilessImage](globals.md#const-asbodilessimage)
* [withForwardedRef](globals.md#const-withforwardedref)
* [withForwardedRefEnd](globals.md#const-withforwardedrefend)
* [withForwardedRefStart](globals.md#const-withforwardedrefstart)
* [withUI](globals.md#const-withui)

### Object literals

* [imagePickerUI](globals.md#const-imagepickerui)

## Type aliases

###  HOC

Ƭ **HOC**: *function*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:48](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L48)*

#### Type declaration:

▸ (`Component`: ComponentType‹any›): *ComponentType‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentType‹any› |

## Variables

### `Const` Image

• **Image**: *any* = asBodilessImage()(Img)

*Defined in [packages/bodiless-components-ui/src/Image.tsx:107](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L107)*

___

### `Const` Input

• **Input**: *any* = withForwardedRef()('input')

*Defined in [packages/bodiless-components-ui/src/Image.tsx:69](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L69)*

___

### `Const` MasterWrapper

• **MasterWrapper**: *FunctionComponent‹HTMLProps‹HTMLElement› & object›* = addClasses('bl-container')(Section)

*Defined in [packages/bodiless-components-ui/src/Image.tsx:58](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L58)*

___

### `Const` Wrapper

• **Wrapper**: *any* = flowRight(
  withForwardedRef(
    addClasses(
      'bl-min-h-grid-16 bl-border bl-border-dashed bl-border-grey-800 bl-bg-grey-100 bl-p-grid-3 bl-mb-grid-3 bl-text-black',
    ),
    stylable,
  ),
)('div')

*Defined in [packages/bodiless-components-ui/src/Image.tsx:60](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L60)*

## Functions

### `Const` DragRejected

▸ **DragRejected**(): *Element‹›*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:77](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L77)*

**Returns:** *Element‹›*

___

### `Const` UploadArea

▸ **UploadArea**(): *Element‹›*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:71](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L71)*

**Returns:** *Element‹›*

___

### `Const` UploadFinished

▸ **UploadFinished**(): *Element‹›*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:84](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L84)*

**Returns:** *Element‹›*

___

### `Const` UploadStatus

▸ **UploadStatus**(`__namedParameters`: object): *Element‹›*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:85](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L85)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`statusText` | string |

**Returns:** *Element‹›*

___

### `Const` UploadTimeout

▸ **UploadTimeout**(): *Element‹›*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:80](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L80)*

**Returns:** *Element‹›*

___

### `Const` Uploading

▸ **Uploading**(): *Element‹›*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:83](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L83)*

**Returns:** *Element‹›*

___

### `Const` asBodilessImage

▸ **asBodilessImage**(`nodeKey?`: undefined | string): *function*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:101](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`nodeKey?` | undefined &#124; string |

**Returns:** *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` withForwardedRef

▸ **withForwardedRef**(...`hocs`: [HOC](globals.md#hoc)[]): *function*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:52](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`...hocs` | [HOC](globals.md#hoc)[] |

**Returns:** *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` withForwardedRefEnd

▸ **withForwardedRefEnd**(`Component`: ComponentType‹any›): *WithForwardedRefEnd*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:40](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentType‹any› |

**Returns:** *WithForwardedRefEnd*

___

### `Const` withForwardedRefStart

▸ **withForwardedRefStart**(`Component`: ComponentType‹any›): *ForwardRefExoticComponent‹RefAttributes‹unknown››*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:32](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentType‹any› |

**Returns:** *ForwardRefExoticComponent‹RefAttributes‹unknown››*

___

### `Const` withUI

▸ **withUI**(`ui`: TImagePickerUI): *function*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:99](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`ui` | TImagePickerUI |

**Returns:** *function*

▸ (`Component`: React.ComponentType‹P›): *function*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | React.ComponentType‹P› |

▸ (`props`: P): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P |

## Object literals

### `Const` imagePickerUI

### ▪ **imagePickerUI**: *object*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:87](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L87)*

###  DragRejected

• **DragRejected**: *[DragRejected](globals.md#const-dragrejected)*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:93](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L93)*

###  Input

• **Input**: *any*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:90](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L90)*

###  MasterWrapper

• **MasterWrapper**: *FunctionComponent‹HTMLProps‹HTMLElement› & object›*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:88](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L88)*

###  UploadArea

• **UploadArea**: *[UploadArea](globals.md#const-uploadarea)*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:91](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L91)*

###  UploadFinished

• **UploadFinished**: *[UploadFinished](globals.md#const-uploadfinished)*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:95](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L95)*

###  UploadStatus

• **UploadStatus**: *[UploadStatus](globals.md#const-uploadstatus)*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:96](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L96)*

###  UploadTimeout

• **UploadTimeout**: *[UploadTimeout](globals.md#const-uploadtimeout)*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:94](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L94)*

###  Uploading

• **Uploading**: *[Uploading](globals.md#const-uploading)*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:92](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L92)*

###  Wrapper

• **Wrapper**: *any*

*Defined in [packages/bodiless-components-ui/src/Image.tsx:89](https://github.com/johnsonandjohnson/Bodiless-JS/blob/e5d7a76/packages/bodiless-components-ui/src/Image.tsx#L89)*
