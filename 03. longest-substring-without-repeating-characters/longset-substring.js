const findLongestSubstring = (str) => {
  let i = 0;
  let j = 0;
  let max = 0;
  const hashSet = new Set()
  while (j < str.length) {
    if (!hashSet.has(str[j])) {
      hashSet.add(str[j])
      if (hashSet.size > max) {
        max = hashSet.size
      }
      j++
    } else {
      hashSet.delete(str[i])
      i++
    }
  }
  return max
}

const res = findLongestSubstring('abcabcbb')
console.log(res);

