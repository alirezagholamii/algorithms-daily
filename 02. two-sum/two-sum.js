const calcTwoSum = (nums, target) => {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      return [map[nums[i]], i]
    } else {
      map[target - nums[i]] = i
    }
  }
}

const res = calcTwoSum([2, 7, 11, 15], 9)
console.log(res);

