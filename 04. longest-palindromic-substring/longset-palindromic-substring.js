const findLongestPalindromicSubstring = (str) => { // O(n^2)
  const n = str.length;
  if (n < 2) {
    return str
  }
  const table = new Array(n);
  for (let i = 0; i < n; i++) {
    table[i] = new Array(n);
  }
  for (let i = 0; i < n; i++) {
    table[i][i] = true;
  }

  let start = 0;
  let maxLength = 1;

  for (let i = 0; i < n - 1; ++i) {
    if (str[i] === str[i + 1]) {
      table[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }

  for (let k = 3; k <= n; k++) {
    for (let i = 0; i < n - k + 1; i++) {
      let j = i + k - 1; 
      if (table[i + 1][j - 1] && str[i] === str[j]) {
        table[i][j] = true;
        if (k > maxLength) {
          start = i;
          maxLength = k;
        }
      }
    }
  }
  return str.slice(start, start + maxLength)
}

const res = findLongestPalindromicSubstring('xabad')
console.log(res);

