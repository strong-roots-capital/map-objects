[map-objects](../README.md) > [MapObjects](../classes/mapobjects.md)

# Class: MapObjects

Extend built-in `Map` to treat deeply-equal keys as equivalent objects.

## Type parameters
#### K 
#### V 
## Hierarchy

 `Map`<`K`, `V`>

**↳ MapObjects**

## Index

### Properties

* [__@toStringTag](mapobjects.md#___tostringtag)
* [size](mapobjects.md#size)
* [Map](mapobjects.md#map)

### Methods

* [__@iterator](mapobjects.md#___iterator)
* [clear](mapobjects.md#clear)
* [delete](mapobjects.md#delete)
* [entries](mapobjects.md#entries)
* [forEach](mapobjects.md#foreach)
* [get](mapobjects.md#get)
* [has](mapobjects.md#has)
* [keys](mapobjects.md#keys)
* [set](mapobjects.md#set)
* [values](mapobjects.md#values)

---

## Properties

<a id="___tostringtag"></a>

###  __@toStringTag

**● __@toStringTag**: *"Map"*

*Inherited from Map.[Symbol.toStringTag]*

*Defined in /Users/eric/workspace/strong-roots-capital/map-objects/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130*

___
<a id="size"></a>

###  size

**● size**: *`number`*

*Inherited from Map.size*

*Defined in /Users/eric/workspace/strong-roots-capital/map-objects/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:28*

___
<a id="map"></a>

### `<Static>` Map

**● Map**: *`MapConstructor`*

*Defined in /Users/eric/workspace/strong-roots-capital/map-objects/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:35*

___

## Methods

<a id="___iterator"></a>

###  __@iterator

▸ **__@iterator**(): `IterableIterator`<[`K`, `V`]>

*Inherited from Map.[Symbol.iterator]*

*Defined in /Users/eric/workspace/strong-roots-capital/map-objects/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:113*

Returns an iterable of entries in the map.

**Returns:** `IterableIterator`<[`K`, `V`]>

___
<a id="clear"></a>

###  clear

▸ **clear**(): `void`

*Inherited from Map.clear*

*Defined in /Users/eric/workspace/strong-roots-capital/map-objects/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:22*

**Returns:** `void`

___
<a id="delete"></a>

###  delete

▸ **delete**(key: *`K`*): `boolean`

*Inherited from Map.delete*

*Defined in /Users/eric/workspace/strong-roots-capital/map-objects/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:23*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `K` |

**Returns:** `boolean`

___
<a id="entries"></a>

###  entries

▸ **entries**(): `IterableIterator`<[`K`, `V`]>

*Inherited from Map.entries*

*Defined in /Users/eric/workspace/strong-roots-capital/map-objects/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:118*

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** `IterableIterator`<[`K`, `V`]>

___
<a id="foreach"></a>

###  forEach

▸ **forEach**(callbackfn: *`function`*, thisArg?: *`any`*): `void`

*Inherited from Map.forEach*

*Defined in /Users/eric/workspace/strong-roots-capital/map-objects/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:24*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackfn | `function` |
| `Optional` thisArg | `any` |

**Returns:** `void`

___
<a id="get"></a>

###  get

▸ **get**(key: *`K`*): `any`

*Overrides Map.get*

*Defined in [map-objects.ts:26](https://github.com/strong-roots-capital/map-objects/blob/b842202/src/map-objects.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `K` |

**Returns:** `any`

___
<a id="has"></a>

###  has

▸ **has**(key: *`K`*): `boolean`

*Overrides Map.has*

*Defined in [map-objects.ts:15](https://github.com/strong-roots-capital/map-objects/blob/b842202/src/map-objects.ts#L15)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `K` |

**Returns:** `boolean`

___
<a id="keys"></a>

###  keys

▸ **keys**(): `IterableIterator`<`K`>

*Inherited from Map.keys*

*Defined in /Users/eric/workspace/strong-roots-capital/map-objects/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:123*

Returns an iterable of keys in the map

**Returns:** `IterableIterator`<`K`>

___
<a id="set"></a>

###  set

▸ **set**(key: *`K`*, value: *`V`*): `this`

*Overrides Map.set*

*Defined in [map-objects.ts:37](https://github.com/strong-roots-capital/map-objects/blob/b842202/src/map-objects.ts#L37)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `K` |
| value | `V` |

**Returns:** `this`

___
<a id="values"></a>

###  values

▸ **values**(): `IterableIterator`<`V`>

*Inherited from Map.values*

*Defined in /Users/eric/workspace/strong-roots-capital/map-objects/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:128*

Returns an iterable of values in the map

**Returns:** `IterableIterator`<`V`>

___

