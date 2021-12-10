const combinationSum = (candidates, target) => {
  const result = [];
  const dfs = (i, current, total) => {
    if (total === target) {
      result.push([...current])
      return
    }
    if (i >= candidates.length || total > target) {
      return
    }
    current.push(candidates[i])
    dfs(i, current, total + candidates[i])
    current.pop()
    dfs(i + 1, current, total)
  }
  dfs(0, [], 0)
  return result
}

const res = combinationSum([2, 3, 6, 7], 7)
console.log(res);