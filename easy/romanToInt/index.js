/* eslint-disable prefer-const */
/**
 * @param {string} s
 * @return {number}
 */
const fn = s => {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let val;
    if (values[s[i]] < values[s[i + 1]]) {
      val = values[s[i + 1]] - values[s[i]];
      i++;
    } else {
      val = values[s[i]];
    }

    res += val;
  }
  return res;
};

// console.log(fn('III')); // 3
console.log(fn('IV')); // 4
// console.log(fn('IX')); // 9
// console.log(fn('LVIII')); // 58

/**
 * Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
 */
