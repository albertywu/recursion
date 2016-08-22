const {
  factorial,
  sum,
  count,
  max,
  min,
  binarySearch,
  quicksort,
  isPalindrome
} = require('../recursive')

const expect = require('expect')

const runTests = (tests, fn) => tests.forEach(([input, output]) => expect(fn(input)).toBe(output))

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  static compareAges(a, b) {
    return a.age - b.age
  }
}

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

  it('#quicksort', function() {
    const tests = [
      [[3,2,1,0], [0,1,2,3]],
      [[3,2,1,2,3,0], [0,1,2,2,3,3]],
      [[-3,-2,-1,0,-2,1,-3], [-3,-3,-2,-2,-1,0,1]],
    ]

    tests.forEach(([input, output]) => {
      expect(
        quicksort(input)
      ).toEqual(output)
    })
  })

  it('#quicksort w/custom comparator', function() {

    const p1 = new Person('Bob', 24)
    const p2 = new Person('Steve', 32)
    const p3 = new Person('Albert', 15)

    const tests = [
      [
        [p1, p2, p3],
        [p3, p1, p2]
      ]
    ]

    tests.forEach(([input, output]) => {
      expect(
        quicksort(input, Person.compareAges)
      ).toEqual(output)
    })
  })

  it('#isPalindrome', function() {

    const tests = [
      ['foo', false],
      ['f', true],
      ['fof', true],
      ['foof', true],
      ['', true]
    ]

    tests.forEach(([input, output]) => {
      expect(
        isPalindrome(input)
      ).toBe(output)
    })

  })
})
