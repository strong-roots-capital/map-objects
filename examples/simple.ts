import MapObjects from '../src/map-objects'
import deepEqual from 'deep-equal'

const a = {a: 1, b: 2, c: 3}
const b = {c: 3, b: 2, a: 1}
console.log('a, b are equal:', deepEqual(a, b))

const value = 'horse'

const map = new Map()
map.set(a, value)
console.log('map does not find value with deeply-equal object:', map.get(b))

const mapObject = new MapObjects()
mapObject.set(a, value)
console.log('mapObject does find value with deeply-equal object:', mapObject.get(b))
