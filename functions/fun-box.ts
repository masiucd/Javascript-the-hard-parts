export const isVowel = (str: string): boolean => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  return vowels.includes(str)
}

const swap = (xs: string[], left: number, right: number) =>
  ([xs[left], xs[right]] = [xs[right], xs[left]])

function reverseVowels(s: string): string {
  let left = 0
  let right = s.length - 1
  let xs = s.split("")

  while (left < right) {
    if (isVowel(xs[left]) && isVowel(xs[right])) {
      swap(xs, left, right)
      ++left
      --right
    }
    if (!isVowel(xs[left])) {
      ++left
    }
    if (!isVowel(xs[right])) {
      --right
    }
  }

  return xs.join("")
}

export function isSubsequence(s: string, t: string): boolean {
  // s should be a subsequence of t
  if (s === t) return true
  let j = 0
  for (let i = 0; i < t.length; i++) {
    if (s[j] === t[i]) {
      j++
    }
  }

  return j === s.length
}

const makeCharCount = (s: string) => {
  const obj: Record<string, number> = {}
  for (let char of s) {
    obj[char] ? (obj[char] += 1) : (obj[char] = 1)
  }

  return obj
}

function containsDuplicate(nums: number[]): boolean {
  const numCount: Record<string, number> = {}

  for (const n of nums) {
    if (!numCount[n]) {
      numCount[n] = 1
    } else {
      numCount[n]++
    }
  }

  return Object.values(numCount).some(x => x > 1)
}

const flattList = (xs: any[]): any[] => {
  return xs.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flattList(toFlatten) : toFlatten)
  }, [])
}

function judgeCircle(moves: string): boolean {
  let upp = 0
  let down = 0
  let left = 0
  let right = 0

  for (let c of moves) {
    switch (c) {
      case "U":
        upp++
        break
      case "D":
        down++
        break
      case "L":
        left++
        break
      case "R":
        right++
        break
      default:
        break
    }
  }

  return upp - down === 0 && left - right === 0
}

const average = (xs: number[]): number => {
  return xs.reduce((a, b) => a + b) / xs.length
}

const median = (xs: number[]) => {
  let low = 0
  let high = xs.length - 1
  let middleIndex = Math.floor((high + low) / 2)
  if (xs.length % 2 !== 0) {
    return xs[middleIndex]
  } else {
    let m1 = xs[middleIndex]
    let m2 = xs[middleIndex + 1]
    return (m1 + m2) / 2
  }
}

const defangIPaddr = (address: string): string => address.slice().replace(/[\.]/g, "[.]")

console.log(foo("1.1.1.1"))
console.log(foo("255.100.50.0"))
