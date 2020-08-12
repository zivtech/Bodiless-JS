[@bodiless/components](../README.md) › [Globals](../globals.md) › [BackendSave](backendsave.md)

# Class: BackendSave

## Hierarchy

* **BackendSave**

## Index

### Constructors

* [constructor](backendsave.md#constructor)

### Properties

* [cancelTokenSource](backendsave.md#private-canceltokensource)
* [prefix](backendsave.md#private-prefix)
* [root](backendsave.md#private-root)

### Methods

* [cancel](backendsave.md#cancel)
* [post](backendsave.md#post)
* [saveFile](backendsave.md#savefile)

## Constructors

###  constructor

\+ **new BackendSave**(`baseUrl?`: undefined | string, `prefix?`: undefined | string): *[BackendSave](backendsave.md)*

*Defined in [packages/bodiless-components/src/BackendSave.tsx:24](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6883c5b/packages/bodiless-components/src/BackendSave.tsx#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`baseUrl?` | undefined &#124; string |
`prefix?` | undefined &#124; string |

**Returns:** *[BackendSave](backendsave.md)*

## Properties

### `Private` cancelTokenSource

• **cancelTokenSource**: *CancelTokenSource*

*Defined in [packages/bodiless-components/src/BackendSave.tsx:24](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6883c5b/packages/bodiless-components/src/BackendSave.tsx#L24)*

___

### `Private` prefix

• **prefix**: *string*

*Defined in [packages/bodiless-components/src/BackendSave.tsx:20](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6883c5b/packages/bodiless-components/src/BackendSave.tsx#L20)*

___

### `Private` root

• **root**: *string*

*Defined in [packages/bodiless-components/src/BackendSave.tsx:18](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6883c5b/packages/bodiless-components/src/BackendSave.tsx#L18)*

## Methods

###  cancel

▸ **cancel**(`reason`: string): *void*

*Defined in [packages/bodiless-components/src/BackendSave.tsx:51](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6883c5b/packages/bodiless-components/src/BackendSave.tsx#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`reason` | string |

**Returns:** *void*

___

###  post

▸ **post**(`resourcePath`: string, `data`: any, `config`: any): *Promise‹AxiosResponse‹any››*

*Defined in [packages/bodiless-components/src/BackendSave.tsx:37](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6883c5b/packages/bodiless-components/src/BackendSave.tsx#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`resourcePath` | string |
`data` | any |
`config` | any |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  saveFile

▸ **saveFile**(`file`: string): *Promise‹AxiosResponse‹any››*

*Defined in [packages/bodiless-components/src/BackendSave.tsx:41](https://github.com/johnsonandjohnson/Bodiless-JS/blob/6883c5b/packages/bodiless-components/src/BackendSave.tsx#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`file` | string |

**Returns:** *Promise‹AxiosResponse‹any››*
