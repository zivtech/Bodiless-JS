[@bodiless/gatsby-theme-bodiless](../README.md) › [Globals](../globals.md) › [GatsbyMobxStoreItem](gatsbymobxstoreitem.md)

# Class: GatsbyMobxStoreItem

## Hierarchy

* **GatsbyMobxStoreItem**

## Index

### Constructors

* [constructor](gatsbymobxstoreitem.md#constructor)

### Properties

* [data](gatsbymobxstoreitem.md#data)
* [isDeleted](gatsbymobxstoreitem.md#isdeleted)
* [key](gatsbymobxstoreitem.md#key)
* [lockTimeout](gatsbymobxstoreitem.md#optional-locktimeout)
* [requestDelay](gatsbymobxstoreitem.md#requestdelay)
* [requestTimeout](gatsbymobxstoreitem.md#optional-requesttimeout)
* [state](gatsbymobxstoreitem.md#state)
* [store](gatsbymobxstoreitem.md#store)

### Methods

* [delete](gatsbymobxstoreitem.md#delete)
* [getResoucePath](gatsbymobxstoreitem.md#private-getresoucepath)
* [isClean](gatsbymobxstoreitem.md#isclean)
* [isPending](gatsbymobxstoreitem.md#ispending)
* [request](gatsbymobxstoreitem.md#private-request)
* [scheduleRequest](gatsbymobxstoreitem.md#private-schedulerequest)
* [setData](gatsbymobxstoreitem.md#private-setdata)
* [setLockTimeout](gatsbymobxstoreitem.md#private-setlocktimeout)
* [setState](gatsbymobxstoreitem.md#private-setstate)
* [shouldAccept](gatsbymobxstoreitem.md#private-shouldaccept)
* [shouldSave](gatsbymobxstoreitem.md#private-shouldsave)
* [update](gatsbymobxstoreitem.md#update)
* [updateState](gatsbymobxstoreitem.md#private-updatestate)

## Constructors

###  constructor

\+ **new GatsbyMobxStoreItem**(`store`: [GatsbyMobxStore](gatsbymobxstore.md), `key`: string, `initialData`: object, `event`: [ItemStateEvent](../enums/itemstateevent.md)): *[GatsbyMobxStoreItem](gatsbymobxstoreitem.md)*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:160](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L160)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`store` | [GatsbyMobxStore](gatsbymobxstore.md) | - |
`key` | string | - |
`initialData` | object | {} |
`event` | [ItemStateEvent](../enums/itemstateevent.md) | ItemStateEvent.UpdateFromBrowser |

**Returns:** *[GatsbyMobxStoreItem](gatsbymobxstoreitem.md)*

## Properties

###  data

• **data**: *object*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:34](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L34)*

#### Type declaration:

___

###  isDeleted

• **isDeleted**: *boolean* = false

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:38](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L38)*

___

###  key

• **key**: *string*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:40](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L40)*

___

### `Optional` lockTimeout

• **lockTimeout**? : *NodeJS.Timeout*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:44](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L44)*

___

###  requestDelay

• **requestDelay**: *number* = DEFAULT_REQUEST_DELAY

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:48](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L48)*

___

### `Optional` requestTimeout

• **requestTimeout**? : *NodeJS.Timeout*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:46](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L46)*

___

###  state

• **state**: *[ItemState](../enums/itemstate.md)* = ItemState.Clean

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:36](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L36)*

___

###  store

• **store**: *[GatsbyMobxStore](gatsbymobxstore.md)*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:42](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L42)*

## Methods

###  delete

▸ **delete**(): *void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:191](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L191)*

**Returns:** *void*

___

### `Private` getResoucePath

▸ **getResoucePath**(): *string*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:115](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L115)*

**Returns:** *string*

___

###  isClean

▸ **isClean**(): *boolean*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:200](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L200)*

**Returns:** *boolean*

___

###  isPending

▸ **isPending**(): *boolean*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:196](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L196)*

**Returns:** *boolean*

___

### `Private` request

▸ **request**(): *void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:131](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L131)*

**Returns:** *void*

___

### `Private` scheduleRequest

▸ **scheduleRequest**(): *void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:146](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L146)*

**Returns:** *void*

___

### `Private` setData

▸ **setData**(`data`: any): *void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:65](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

### `Private` setLockTimeout

▸ **setLockTimeout**(): *void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:153](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L153)*

**Returns:** *void*

___

### `Private` setState

▸ **setState**(`state`: [ItemState](../enums/itemstate.md)): *void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:70](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | [ItemState](../enums/itemstate.md) |

**Returns:** *void*

___

### `Private` shouldAccept

▸ **shouldAccept**(): *boolean*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:50](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L50)*

**Returns:** *boolean*

___

### `Private` shouldSave

▸ **shouldSave**(): *boolean*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:56](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L56)*

**Returns:** *boolean*

___

###  update

▸ **update**(`data`: object, `event`: [ItemStateEvent](../enums/itemstateevent.md)): *void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:174](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L174)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`data` | object | {} |
`event` | [ItemStateEvent](../enums/itemstateevent.md) | ItemStateEvent.UpdateFromBrowser |

**Returns:** *void*

___

### `Private` updateState

▸ **updateState**(`event`: [ItemStateEvent](../enums/itemstateevent.md)): *void*

*Defined in [packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts:74](https://github.com/johnsonandjohnson/Bodiless-JS/blob/8d6c5f3/packages/gatsby-theme-bodiless/src/dist/GatsbyMobxStoreItem.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | [ItemStateEvent](../enums/itemstateevent.md) |

**Returns:** *void*
