const maxSubArray = (nums) => {
  let maxSub = nums[0]
  currentSum = 0
  for (const n of nums) {
    if (currentSum < 0) {
      currentSum = 0
    }
    currentSum += n
    maxSub = Math.max(maxSub, currentSum)
  }
  return maxSub
}

const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
console.log(result);