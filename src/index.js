module.exports = function solveSudoku(matrix) {
  // your solution
    var number = 0;

   for (var i=0;i<matrix.length;i++){
       var len=matrix[i].length;
       for(var j=0;j<len; j++){
           if (matrix[i][j] == 0) matrix[i][j] = number--;
       }
   }

    return matrix;

}
