const {
  factorial,
  sum,
  count,
  max,
  min,
  binarySearch
} = require('../recursive')

const expect = require('expect')

const runTests = (tests, fn) => tests.forEach(([input, output]) => expect(fn(input)).toBe(output))

/* --- */

describe('recursive', function() {
  it('#factorial', function() {
    const tests = [
      [2, 2],
      [3, 6],
      [4, 24]
    ]

    runTests(tests, factorial)
  }),

  it('#sum', function() {
    const tests = [
      [[1], 1],
      [[1,2], 3],
      [[1,2,3], 6],
    ]

    runTests(tests, sum)
  }),

  it('#count', function() {
    const tests = [
      [[1], 1],
      [[1,2], 2],
      [[1,2,3], 3]
    ]

    runTests(tests, count)
  }),

  it('#max', function() {
    const tests = [
      [[], null],
      [[1], 1],
      [[1,2], 2],
      [[2,1], 2],
      [[1,2,5,3,4], 5],
      [[-1,-2,-5,-3,-4], -1]
    ]

    runTests(tests, max)
  }),

  it('#min', function() {
    const tests = [
      [[], null],
      [[1], 1],
      [[1,2], 1],
      [[2,1], 1],
      [[1,2,5,3,4], 1],
      [[-1,-2,-5,-3,-4], -5]
    ]

    runTests(tests, min)
  }),

  it('#binarySearch', function() {
    const tests = [
      [[], 0, -1],
      [[1,2,3,4,5], 3, 2],
      [[1,2,3,4,5], 6, -1]
    ]

    tests.forEach(([array, item, resultIndex]) => {
      expect(
        binarySearch(array, item)
      ).toBe(resultIndex)
    })
  }),

  it('#binarySearch w/custom comparator', function() {

    class Person {
      constructor(name, age) {
        this.name = name
        this.age = age
      }

      static compareAges(a, b) {
        return a.age - b.age
      }
    }

    const tests = [
      [
        [
          new Person('Albert', 13),
          new Person('Steve', 14)
        ],
        new Person('Steve', 14),
        Person.compareAges,
        1
      ],
      [
        [
          new Person('Albert', 13),
          new Person('Steve', 14)
        ],
        new Person('Albert', 13),
        Person.compareAges,
        0
      ],
      [
        [
          new Person('Albert', 13),
          new Person('Steve', 14),
          new Person('Bob', 15)
        ],
        new Person('Steve', 14),
        Person.compareAges,
        1
      ],
      [
        [
          new Person('Albert', 13),
          new Person('Steve', 14),
          new Person('Bob', 15)
        ],
        new Person('Veronika', 20),
        Person.compareAges,
        -1
      ],
    ]

    tests.forEach(([array, item, comparator, resultIndex]) => {
      expect(
        binarySearch(array, item, comparator)
      ).toBe(resultIndex)
    })
  })
})
