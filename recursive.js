// exercises in basic recursion...

// (n: number) => number
const factorial = (n) => (n === 0) ? 1 : n*factorial(n-1)

// (a: number[]) => number
const sum = (a) => (a.length === 0) ? 0 : a[0] + sum(a.slice(1))

// (a: number[]) => number
const count = (a) => (a.length === 0) ? 0 : 1 + count(a.slice(1))

// (a: number[]) => number|null
const max = (a) => {
  if (a.length === 0) {
    return null
  } else if (a.length === 1) {
    return a[0]
  } else {
    const tailMax = max(a.slice(1))
    return (a[0] >= tailMax) ? a[0] : tailMax
  }
}

// (a: number[]) => number|null
const min = (a) => {
  if (a.length === 0) {
    return null
  } else if (a.length === 1) {
    return a[0]
  } else {
    const tailMin = min(a.slice(1))
    return (a[0] <= tailMin) ? a[0] : tailMin
  }
}

const defaultComparer = (a, b) => a - b

// (a: any[], item: any, comparer: (a: any, b: any) => number) => number
const binarySearch = (a, item, comparer=defaultComparer) => {
  const mid = Math.floor(a.length/2)

  if (comparer(a[mid], item) === 0) {
    return mid
  } else if (comparer(a[mid], item) > 0 && a.length > 1) {
    return binarySearch(a.slice(0, mid), item, comparer)
  } else if (comparer(a[mid], item) < 0 && a.length > 1) {
    return binarySearch(a.slice(mid), item, comparer)
  } else {
    return -1 // not found
  }
}

module.exports = {
  factorial,
  sum,
  count,
  max,
  min,
  binarySearch
}
