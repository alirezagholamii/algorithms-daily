const groupAnagrams = (words) => { // n * mlog(m)
  const map = {}
  for (const word of words) {
    const sortedChars = word.split('').sort().join('')
    if (map[sortedChars] === undefined) {
      map[sortedChars] = []
    }
    map[sortedChars].push(word)
  }
  const result = Object.keys(map).map(key => map[key])
  return result
}

const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
console.log(result);