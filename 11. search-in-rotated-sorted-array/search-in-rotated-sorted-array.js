const search = (nums, target) => {
  if (nums === null || nums.length === 0) {
    result - 1
  }
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const middle = Math.floor(left + (right - left) / 2)
    if (nums[middle] > nums[right]) {
      left = middle + 1
    } else {
      right = middle
    }
  }
  const start = left;
  left = 0;
  right = nums.length - 1;

  if (target >= nums[start] && target <= nums[right]) {
    left = start
  } else {
    right = start
  }

  while (left <= right) {
    const middle = Math.floor(left + (right - left) / 2)
    if (nums[middle] === target) {
      return middle
    } else if (nums[middle] < target) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return -1

}

const result = search([4, 5, 6, 7, 0, 1, 2], 0)
console.log(result);