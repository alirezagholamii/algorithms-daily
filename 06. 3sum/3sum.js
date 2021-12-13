const calc3sum = (nums) => { // O(n)
  nums.sort((a, b) => a - b);
  const result = []
  const store = []

  for (let i = 0; i < nums.length - 2; i++) {
    let low = i + 1
    let high = nums.length - 1
    let sum = 0 - nums[i]

    while (low < high) {
      const isMatch = nums[low] + nums[high] === sum
      if (isMatch) {
        const duplicate = store.includes(`${nums[i]}${nums[low]}${nums[high]}`)
        if (!duplicate) {
          result.push([nums[i], nums[low], nums[high]])
          store.push(`${nums[i]}${nums[low]}${nums[high]}`)
        }
        low++
        high--
      } else if (nums[low] + nums[high] > sum) {
        high--
      } else {
        low++
      }
    }

  }

  return result

}

const result = calc3sum([-1, 0, 1, 2, -1, -4])
console.log(result);