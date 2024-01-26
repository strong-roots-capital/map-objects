/**
 * map-objects
 * Map key-value pairs treating deeply-equal keys as equivalent objects
 */

import deepEqual from "deep-equal";

/**
 * Extend built-in `Map` to treat deeply-equal keys as equivalent
 * objects.
 */
export default class MapObjects<K = any, V = any> extends Map<K, V> {
  delete(key: K): boolean {
    let equalKey = key;
    for (const k of this.keys()) {
      if (deepEqual(key, k)) {
        equalKey = k;
        break;
      }
    }
    return super.delete(equalKey);
  }

  has(key: K): boolean {
    let equalKey = key;
    for (const k of this.keys()) {
      if (deepEqual(key, k)) {
        equalKey = k;
        break;
      }
    }
    return super.has(equalKey);
  }

  get(key: K): V | undefined {
    let equalKey = key;
    for (const k of this.keys()) {
      if (deepEqual(key, k)) {
        equalKey = k;
        break;
      }
    }
    return super.get(equalKey);
  }

  set(key: K, value: V): this {
    let equalKey = key;
    for (const k of this.keys()) {
      if (deepEqual(key, k)) {
        equalKey = k;
        break;
      }
    }
    return super.set(equalKey, value);
  }
}
