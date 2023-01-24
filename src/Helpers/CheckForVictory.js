

let conditipnsFunction=(index,cells,occuppied_Cells,player,rows)=>{
  let result = null;
  let definedHorizontalCondition=cells[occuppied_Cells[index].id +2] !==undefined & cells[occuppied_Cells[index].id +1] !==undefined;;
  let definedVerticalCondition=cells[occuppied_Cells[index].id +rows] !==undefined & cells[occuppied_Cells[index].id +rows+rows] !==undefined;;
  let definedLeftDiagonalCondition=cells[occuppied_Cells[index].id +rows+1] !== undefined & cells[occuppied_Cells[index].id +2*(rows+1)]!==undefined;
  let definedRightDiagonal=cells[occuppied_Cells[index].id +rows-1] !== undefined & cells[occuppied_Cells[index].id +2*(rows-1)]!==undefined;



  
  if(cells[occuppied_Cells[index].id].whose===player){
    if(definedHorizontalCondition){

      let onOneRowHorizontalCondition=Math.floor(cells[occuppied_Cells[index].id].id/rows) ===Math.floor(cells[occuppied_Cells[index].id+1].id/rows) & Math.floor(cells[occuppied_Cells[index].id].id/rows ===Math.floor(cells[occuppied_Cells[index].id+2].id/rows));
      let horizontalCpndition=cells[occuppied_Cells[index].id +1].whose==player & cells[occuppied_Cells[index].id +2].whose==player;    
      if(horizontalCpndition & onOneRowHorizontalCondition){
        debugger;
        result=player;
      }
    }
    if(definedVerticalCondition){
      let verticalCondition=cells[occuppied_Cells[index].id +rows].whose==player & cells[occuppied_Cells[index].id +rows+rows].whose==player;
      if(verticalCondition){
        debugger;
        result=player;
      }
    }
    if(definedLeftDiagonalCondition){
      let LeftDiagonalCondition = cells[occuppied_Cells[index].id +rows+1].whose==player & cells[occuppied_Cells[index].id +2*(rows+1)].whose==player;
      if(LeftDiagonalCondition){
        debugger;
        result=player;
      }
    }
    if(definedRightDiagonal){
      let RightDiagonalCondition = cells[occuppied_Cells[index].id +rows-1].whose==player & cells[occuppied_Cells[index].id +2*(rows-1)].whose==player;
      let rowsArray=[cells[occuppied_Cells[index].id].id/rows,cells[occuppied_Cells[index].id+rows-1].id/rows,cells[occuppied_Cells[index].id+2*(rows-1)].id/rows];
      let NotOnOneRow=true;
      for(let i=0;i<rowsArray.length;i++){
        if((rowsArray[i]+1)%rows==0){
          rowsArray[i]=rowsArray[i]+1;
          break;
        }
      }
      for(let i=0;i<rowsArray.length;i++){
        rowsArray[i] = Math.ceil(rowsArray[i]);
      }
      for(let i=0;i<rowsArray.length;i++){
        for(let ii=0;ii<rowsArray.length;ii++){
          if(rowsArray[i] == rowsArray[ii] & i!==ii){
            NotOnOneRow=false;
          }
        }
      }
      if(RightDiagonalCondition & NotOnOneRow){
        debugger;
        result=player;
      }
    }
  }
  return result;
}
 let CheckForVictory=(cells,occuppied_Cells,rows)=>{
  let result = null;
  for(let i=0;i<occuppied_Cells.length;i++){
    result =  conditipnsFunction(i,cells,occuppied_Cells,'cross',rows);
   if(result){
      break;
   }
  }
  return result;
}

export default CheckForVictory;