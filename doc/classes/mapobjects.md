[map-objects](../README.md) › [Globals](../globals.md) › [MapObjects](mapobjects.md)

# Class: MapObjects <**K, V**>

Extend built-in `Map` to treat deeply-equal keys as equivalent
objects.

## Type parameters

▪ **K**

▪ **V**

## Hierarchy

* [Map](mapobjects.md#static-map)‹K, V›

  ↳ **MapObjects**

## Index

### Properties

* [[Symbol.toStringTag]](mapobjects.md#[symbol.tostringtag])
* [size](mapobjects.md#size)
* [Map](mapobjects.md#static-map)

### Methods

* [[Symbol.iterator]](mapobjects.md#[symbol.iterator])
* [clear](mapobjects.md#clear)
* [delete](mapobjects.md#delete)
* [entries](mapobjects.md#entries)
* [forEach](mapobjects.md#foreach)
* [get](mapobjects.md#get)
* [has](mapobjects.md#has)
* [keys](mapobjects.md#keys)
* [set](mapobjects.md#set)
* [values](mapobjects.md#values)

## Properties

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from [MapObjects](mapobjects.md).[[Symbol.toStringTag]](mapobjects.md#[symbol.tostringtag])*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

###  size

• **size**: *number*

*Inherited from [MapObjects](mapobjects.md).[size](mapobjects.md#size)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

### `Static` Map

▪ **Map**: *MapConstructor*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:36

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[K, V]›*

*Inherited from [MapObjects](mapobjects.md).[[Symbol.iterator]](mapobjects.md#[symbol.iterator])*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

Returns an iterable of entries in the map.

**Returns:** *IterableIterator‹[K, V]›*

___

###  clear

▸ **clear**(): *void*

*Inherited from [MapObjects](mapobjects.md).[clear](mapobjects.md#clear)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:22

**Returns:** *void*

___

###  delete

▸ **delete**(`key`: K): *boolean*

*Inherited from [MapObjects](mapobjects.md).[delete](mapobjects.md#delete)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *IterableIterator‹[K, V]›*

*Inherited from [MapObjects](mapobjects.md).[entries](mapobjects.md#entries)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** *IterableIterator‹[K, V]›*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from [MapObjects](mapobjects.md).[forEach](mapobjects.md#foreach)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts:24

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: V, `key`: K, `map`: [Map](mapobjects.md#static-map)‹K, V›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | V |
`key` | K |
`map` | [Map](mapobjects.md#static-map)‹K, V› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  get

▸ **get**(`key`: K): *V | undefined*

*Overrides void*

*Defined in [src/map-objects.ts:26](https://github.com/strong-roots-capital/map-objects/blob/9eebf6c/src/map-objects.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *V | undefined*

___

###  has

▸ **has**(`key`: K): *boolean*

*Overrides void*

*Defined in [src/map-objects.ts:15](https://github.com/strong-roots-capital/map-objects/blob/9eebf6c/src/map-objects.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *IterableIterator‹K›*

*Inherited from [MapObjects](mapobjects.md).[keys](mapobjects.md#keys)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

Returns an iterable of keys in the map

**Returns:** *IterableIterator‹K›*

___

###  set

▸ **set**(`key`: K, `value`: V): *this*

*Overrides void*

*Defined in [src/map-objects.ts:37](https://github.com/strong-roots-capital/map-objects/blob/9eebf6c/src/map-objects.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`value` | V |

**Returns:** *this*

___

###  values

▸ **values**(): *IterableIterator‹V›*

*Inherited from [MapObjects](mapobjects.md).[values](mapobjects.md#values)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:136

Returns an iterable of values in the map

**Returns:** *IterableIterator‹V›*
