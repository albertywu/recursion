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

// (a: any[], pivot: number, fn: (a, b) => boolean) => any[]
//
// w/reduce
//
// a.reduce((acc, curr) => fn(curr) ? acc.push([curr]) : acc, [])
const partition = (a, pivot, fn) => {
  let result = []
  for (let i = 0; i < a.length; i++) {
    if (i !== pivot && fn(a[i])) {
      result.push(a[i])
    }
  }
  return result
}

// (a: any[], comparer: (a: any, b: any) => number) => any[]
const quicksort = (a, comparer=defaultComparer) => {
  if (a.length === 0) {
    return []
  } else if (a.length === 1) {
    return a
  } else {
    const pivot = Math.floor(a.length/2)
    const partitionLeft = partition(a, pivot, (x) => comparer(x, a[pivot]) <= 0)
    const partitionRight = partition(a, pivot, (x) => comparer(x, a[pivot]) > 0)
    return quicksort(partitionLeft, comparer)
      .concat([a[pivot]])
      .concat(quicksort(partitionRight, comparer))
  }
}

// (s: string) => boolean
const isPalindrome = (s) => (
  s.length === 0 ||
  s.length === 1 ||
  s[0] === s[s.length-1] && isPalindrome(s.slice(1, s.length-1))
)

module.exports = {
  factorial,
  sum,
  count,
  max,
  min,
  binarySearch,
  quicksort,
  isPalindrome
}
