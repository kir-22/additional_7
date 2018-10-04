module.exports = function solveSudoku(matrix) {
  // hack
    const zeroIndex=[];
    
    for(let i=0, len = matrix.length; i < len; i++){
      for(let j=0, len1 = matrix[i].length; j < len1; j++){
        if(matrix[i][j]==0){ 
          zeroIndex.push([i,j]);
        }
      }
    }

    mySolve(matrix,zeroIndex);

    function mySolve(mtr, posZero){
      let row, col, val, found;
      for(let i=0; i < posZero.length;){
        row = posZero[i][0];
        col = posZero[i][1];
        val = mtr[row][col]+1;
        found=false;
        while(!found && val <= 9){
          if(checkVal(mtr,col,row,val)){
            found=true;
            mtr[row][col]=val;
            i++;
            } 
          else{
            val++;
          }
        }
        if(!found){
          mtr[row][col] = 0;
          i--;
        }
      }
    }

    function checkVal(mtr,col,row,val){
      if(checkRow(mtr,row,val)&&checkCol(mtr,col,val)&&checkBlock(mtr,col,row,val)){
        return true;
      }
    
    return false;
      
    }

    function checkRow(mtr,row,val){
      for(let i=0, len=mtr[row].length;i<len;i++){
        if(mtr[row][i]===val){
          return false;
        }
      }
      return true;
    }
    function checkCol(mtr,col,val){
      for(let i=0, len=mtr.length; i<len ;i++){
        if(mtr[i][col]===val)
        return false
      }
      return true;
    }
    function checkBlock(mtr,col,row,val){
      let col_1=0;
      let row_1=0;
      
     
      while(col>=col_1+3){
        col_1+=3;
      }
      while(row>=row_1+3){
        row_1+=3;
      }
      for (let i = row_1, len=row_1+3; i < len; i++) {
        for(let j = col_1, len1=col_1+3; j < len1; j++){
          if(mtr[i][j] === val){
            return false;
          }
        }
        
      }
      return true;
    }

    
  return matrix;
}
