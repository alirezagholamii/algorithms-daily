const findMaxArea = (bars) => { // O(n)
  let maxArea = 0;
  let left = 0;
  let right = bars.length - 1
  while (left < right) {
    const area = Math.min(bars[left], bars[right]) * (right - left)
    maxArea = Math.max(maxArea, area);
    if (bars[left] > bars[right]) {
      right--
    } else {
      left++
    }
  }
  return maxArea
}

const result = findMaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
console.log(result);