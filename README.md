# map-objects

[![Build Status]](https://github.com/strong-roots-capital/map-objects/actions/workflows/release.yml)

[build status]: https://github.com/strong-roots-capital/map-objects/actions/workflows/release.yml/badge.svg?event=push

Map key-value pairs treating deeply-equal keys as equivalent objects

> [!NOTE]
> This project is functional, but not actively maintained.
> Please feel free to fork it!

## Install

```shell
npm install @strong-roots-capital/map-objects
```

This module uses the following settings in `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es6",
    "downlevelIteration": true
  }
}
```

## Use

```typescript
import mapObjects from "@strong-roots-capital/map-objects";
import deepEqual from "deep-equal";

const a = { a: 1, b: 2, c: 3 };
const b = { c: 3, b: 2, a: 1 };
console.log("a, b are equal:", deepEqual(a, b));

const value = "horse";

const map = new Map();
map.set(a, value);
console.log("map does not find value with deeply-equal object:", map.get(b));

const mapObject = new MapObjects();
mapObject.set(a, value);
console.log(
  "mapObject does find value with deeply-equal object:",
  mapObject.get(b),
);
```

## Acknowledgments

- [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

## Related

- [collections-deep-equal](https://github.com/leafac/collections-deep-equal)
