function max(matrix) {
  let maxValue = -Infinity;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > maxValue) {
        maxValue = matrix[i][j];
      }
    }
  }

  return maxValue;
}

console.log(max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));