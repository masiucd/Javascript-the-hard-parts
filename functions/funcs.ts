export const map = (fn: Function) => <T>(list: T[]): T[] => {
  const res = []
  for (let v of list) {
    res.push(fn(v))
  }

  return res
}

const xs = [1, 2, 3]

const double = (x: number) => x * 2
const add = (x: number) => x + 1

// now we can double whatever list we provide `(Partial application)`
const doubleList = map(double)
const incrementList = map(add)
incrementList(xs)
incrementList([10, 20, 30])

const fib = (n: number): number => {
  if (n <= 2) return n
  return fib(n - 1) + fib(n - 2)
}

const fnWrapper = (fn: Function) => {
  const cache = new Map<number, number>()

  return (n: number) => {
    if (cache.get(n)) {
      return cache.get(n)
    } else {
      cache.set(n, fn(n))
      return fn(n)
    }
  }
}

const identity = <T>(n: T): T => n
const lower = (s: string): string => s.toLowerCase()
