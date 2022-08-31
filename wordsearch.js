const transpose = function (matrix) {
    // create container array to house our new matrix
    const ourMatrix = [];
    // create new rows
    for (let i = 0; i < matrix[0].length; i++) { 
      let subArray = []; // create new subarray
      ourMatrix.push(subArray); // push new subarray
    }
    for (let i = 0; i < matrix.length; i++) { // i = rows of the matrix, columns of ourMatrix
      for (let j = 0; j < matrix[0].length; j++) { // j = columns of the matrix, rows of ourMatrix
        ourMatrix[j].push(matrix[i][j]);
      }
    }
    return ourMatrix;
  };
  
  const wordSearch = (lettersMatrix, word) => { 
    if (!lettersMatrix.length) { return undefined; }
  
    const horizontalJoin = lettersMatrix.map(row => row.join(''));
    for (row of horizontalJoin) {
      if (row.includes(word)) {
        return true;
      }
    }
    const newArray = transpose(lettersMatrix);
    const verticalJoin = newArray.map(row => row.join(''));
    for (row of verticalJoin) {
      if (row.includes(word)) {
        return true;
      }
    }
    return false;
  }
  
  module.exports = wordSearch