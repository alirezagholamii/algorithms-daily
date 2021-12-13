const rotate = (matrix) => {
  const n = matrix.length;
  // transpose
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
  // reverse of row
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = temp
    }
  }
  return matrix
}

const res = rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])
console.log(res);