[@bodiless/components](../README.md) › [Globals](../globals.md) › [BreadcrumbContext](breadcrumbcontext.md)

# Class: BreadcrumbContext

## Hierarchy

* **BreadcrumbContext**

## Implements

* object

## Index

### Constructors

* [constructor](breadcrumbcontext.md#constructor)

### Properties

* [parent](breadcrumbcontext.md#readonly-parent)
* [store](breadcrumbcontext.md#protected-store)
* [url](breadcrumbcontext.md#readonly-url)

### Accessors

* [isActive](breadcrumbcontext.md#isactive)

### Methods

* [activate](breadcrumbcontext.md#activate)
* [isAncestorOf](breadcrumbcontext.md#isancestorof)
* [isSubpathOf](breadcrumbcontext.md#issubpathof)
* [spawn](breadcrumbcontext.md#spawn)

## Constructors

###  constructor

\+ **new BreadcrumbContext**(`href`: string, `parent?`: [BreadcrumbContextInterface](../globals.md#breadcrumbcontextinterface)): *[BreadcrumbContext](breadcrumbcontext.md)*

*Defined in [packages/bodiless-components/src/asBreadcrumb.tsx:68](https://github.com/johnsonandjohnson/Bodiless-JS/blob/faa2219/packages/bodiless-components/src/asBreadcrumb.tsx#L68)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`href` | string | "/" |
`parent?` | [BreadcrumbContextInterface](../globals.md#breadcrumbcontextinterface) | - |

**Returns:** *[BreadcrumbContext](breadcrumbcontext.md)*

## Properties

### `Readonly` parent

• **parent**: *[BreadcrumbContextInterface](../globals.md#breadcrumbcontextinterface) | undefined*

*Defined in [packages/bodiless-components/src/asBreadcrumb.tsx:68](https://github.com/johnsonandjohnson/Bodiless-JS/blob/faa2219/packages/bodiless-components/src/asBreadcrumb.tsx#L68)*

___

### `Protected` store

• **store**: *[BreadcrumbStoreInterface](../globals.md#breadcrumbstoreinterface)* = defaultStore

*Defined in [packages/bodiless-components/src/asBreadcrumb.tsx:64](https://github.com/johnsonandjohnson/Bodiless-JS/blob/faa2219/packages/bodiless-components/src/asBreadcrumb.tsx#L64)*

___

### `Readonly` url

• **url**: *URL*

*Defined in [packages/bodiless-components/src/asBreadcrumb.tsx:66](https://github.com/johnsonandjohnson/Bodiless-JS/blob/faa2219/packages/bodiless-components/src/asBreadcrumb.tsx#L66)*

## Accessors

###  isActive

• **get isActive**(): *boolean*

*Defined in [packages/bodiless-components/src/asBreadcrumb.tsx:98](https://github.com/johnsonandjohnson/Bodiless-JS/blob/faa2219/packages/bodiless-components/src/asBreadcrumb.tsx#L98)*

**Returns:** *boolean*

## Methods

###  activate

▸ **activate**(): *void*

*Defined in [packages/bodiless-components/src/asBreadcrumb.tsx:102](https://github.com/johnsonandjohnson/Bodiless-JS/blob/faa2219/packages/bodiless-components/src/asBreadcrumb.tsx#L102)*

**Returns:** *void*

___

###  isAncestorOf

▸ **isAncestorOf**(`descendant?`: [BreadcrumbContextInterface](../globals.md#breadcrumbcontextinterface)): *boolean*

*Defined in [packages/bodiless-components/src/asBreadcrumb.tsx:83](https://github.com/johnsonandjohnson/Bodiless-JS/blob/faa2219/packages/bodiless-components/src/asBreadcrumb.tsx#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`descendant?` | [BreadcrumbContextInterface](../globals.md#breadcrumbcontextinterface) |

**Returns:** *boolean*

___

###  isSubpathOf

▸ **isSubpathOf**(`parent?`: [BreadcrumbContextInterface](../globals.md#breadcrumbcontextinterface)): *boolean*

*Defined in [packages/bodiless-components/src/asBreadcrumb.tsx:78](https://github.com/johnsonandjohnson/Bodiless-JS/blob/faa2219/packages/bodiless-components/src/asBreadcrumb.tsx#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`parent?` | [BreadcrumbContextInterface](../globals.md#breadcrumbcontextinterface) |

**Returns:** *boolean*

___

###  spawn

▸ **spawn**(`path`: string): *[BreadcrumbContextInterface](../globals.md#breadcrumbcontextinterface)*

*Defined in [packages/bodiless-components/src/asBreadcrumb.tsx:94](https://github.com/johnsonandjohnson/Bodiless-JS/blob/faa2219/packages/bodiless-components/src/asBreadcrumb.tsx#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *[BreadcrumbContextInterface](../globals.md#breadcrumbcontextinterface)*
