/**
 * map-objects
 * Map key-value pairs treating deeply-equal keys as equivalent objects
 */

import deepEqual from 'deep-equal'


/**
 * Extend built-in `Map` to treat deeply-equal keys as equivalent
 * objects.
 */
export default class MapObjects extends Map {

    has(key: any): boolean {
        let equalKey = key
        for (const k of this.keys()) {
            if (deepEqual(key, k)) {
                equalKey = k
                break
            }
        }
        return super.has(equalKey)
    }

    get(key: any): any {
        let equalKey = key
        for (const k of this.keys()) {
            if (deepEqual(key, k)) {
                equalKey = k
                break
            }
        }
        return super.get(equalKey)
    }

    set(key: any, value: any): any {
        let equalKey = key
        for (const k of this.keys()) {
            if (deepEqual(key, k)) {
                equalKey = k
                break
            }
        }
        return super.set(equalKey, value)
    }
}
