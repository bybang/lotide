# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bybang/lotide`

**Require it:**

`const _ = require('@bybang/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`   : checking if the actual array and expected array are the same
* `assertEqual`         : checking if the actual value and expected value are the same
* `assertObjectsEqual`  : description
* `countLetters`        : description
* `countOnly`           : description
* `eqArrays`            : checking if the given arrays are the same
* `eqObject`            : descripttion
* `findKey`             : description
* `findKeyByValue`      : description
* `head`                : return the first value from the array
* `letterPositions`     : description
* `map`                 : description
* `middle`              : return middle value from the given array
                          (if array is odd, return one value. even => two values  in the middle)
* `tail`                : return an array except the first value, from the give array
* `takeUntil`           : description
* `withhout`            : description