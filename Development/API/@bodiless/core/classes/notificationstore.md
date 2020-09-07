[@bodiless/core](../README.md) › [Globals](../globals.md) › [NotificationStore](notificationstore.md)

# Class: NotificationStore

## Hierarchy

* **NotificationStore**

## Index

### Properties

* [notificationsMap](notificationstore.md#private-notificationsmap)

### Accessors

* [hasNotifications](notificationstore.md#hasnotifications)
* [notifications](notificationstore.md#notifications)

### Methods

* [setNotifications](notificationstore.md#setnotifications)

## Properties

### `Private` notificationsMap

• **notificationsMap**: *Map‹string, object & object[]›* = new Map<string, NotificationProviderItem[]>()

*Defined in [packages/bodiless-core/src/NotificationProvider.tsx:57](https://github.com/johnsonandjohnson/Bodiless-JS/blob/884ce3b/packages/bodiless-core/src/NotificationProvider.tsx#L57)*

## Accessors

###  hasNotifications

• **get hasNotifications**(): *boolean*

*Defined in [packages/bodiless-core/src/NotificationProvider.tsx:59](https://github.com/johnsonandjohnson/Bodiless-JS/blob/884ce3b/packages/bodiless-core/src/NotificationProvider.tsx#L59)*

**Returns:** *boolean*

___

###  notifications

• **get notifications**(): *any[]*

*Defined in [packages/bodiless-core/src/NotificationProvider.tsx:63](https://github.com/johnsonandjohnson/Bodiless-JS/blob/884ce3b/packages/bodiless-core/src/NotificationProvider.tsx#L63)*

**Returns:** *any[]*

## Methods

###  setNotifications

▸ **setNotifications**(`owner`: string, `notifications`: [NotificationProviderItem](../globals.md#notificationprovideritem)[]): *void*

*Defined in [packages/bodiless-core/src/NotificationProvider.tsx:67](https://github.com/johnsonandjohnson/Bodiless-JS/blob/884ce3b/packages/bodiless-core/src/NotificationProvider.tsx#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`owner` | string |
`notifications` | [NotificationProviderItem](../globals.md#notificationprovideritem)[] |

**Returns:** *void*
