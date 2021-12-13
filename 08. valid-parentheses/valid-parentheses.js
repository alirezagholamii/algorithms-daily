const isValidParantheses = (str) => { //O(n)
  const arr = str.split('')
  if (arr.length % 2 !== 0) {
    return false
  }
  const stack = []
  const complements = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  for (const char of arr) {
    const isOpener = ['(', '{', '['].includes(char);

    if (isOpener) {
      stack.push(complements[char])
    } else {
      if (char === stack[stack.length - 1]) {
        stack.pop()
      } else {
        return false
      }
    }

  }
  return stack.length === 0
}

const result = isValidParantheses('(){}(([]))')
console.log(result);