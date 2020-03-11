import test from 'ava'
import is from '@sindresorhus/is'
import deepEqual from 'deep-equal'


/**
 * Library under test
 */

import MapObjects from '../src/map-objects'

test('should return a map', t => {
    t.true(is.map(new MapObjects()))
})

test('`has` should return true for deeply-equal objects', t => {
    const a = {a: 1, b: 2}
    const b = {b: 2, a: 1}
    t.true(deepEqual(a, b))
    const map = new MapObjects()
    map.set(a, 'horse')
    t.true(map.has(b))
})

test('`has` should return false for non-deeply-equal objects', t => {
    const a = {a: 1}
    const b = {b: 2}
    const map = new MapObjects()
    map.set(a, 'horse')
    t.false(map.has(b))
})

test('`get` should return mapped value for deeply-equal objects', t => {
    const a = {a: 1, b: 2}
    const b = {b: 2, a: 1}
    const map = new MapObjects()
    const value = 'horse'
    map.set(a, value)
    t.deepEqual(value, map.get(b))
})

test('`get` should not return mapped value for non-deeply-equal objects', t => {
    const a = {a: 1, b: 2}
    const b = {b: 2}
    const map = new MapObjects()
    const value = 'horse'
    map.set(a, value)
    t.notDeepEqual(value, map.get(b))
})

test('`set` should overwrite mapped value for deeply-equal objects', t => {
    const a = {a: 1, b: 2}
    const b = {b: 2, a: 1}
    const map = new MapObjects()
    const value1 = 'horse'
    const value2 = 'pig'
    map.set(a, value1)
    map.set(b, value2)
    t.deepEqual(value2, map.get(a))
    t.deepEqual(value2, map.get(b))
})

test('`set` should not overwrite mapped value for non-deeply-equal objects', t => {
    const a = {a: 1, b: 2}
    const b = {b: 2}
    const map = new MapObjects()
    const value1 = 'horse'
    const value2 = 'pig'
    map.set(a, value1)
    map.set(b, value2)
    t.deepEqual(value1, map.get(a))
    t.deepEqual(value2, map.get(b))
})

test('`set` should return `this`', t => {
    const a = {a: 1, b: 2}
    const b = {b: 2}
    const map = new MapObjects()
    const value1 = 'horse'
    const value2 = 'pig'
    map.set(a, value1).set(b, value2)
    t.deepEqual(value1, map.get(a))
    t.deepEqual(value2, map.get(b))
})
