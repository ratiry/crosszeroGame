

let conditipnsFunction=(index,cells,occuppied_Cells,player,rows)=>{
  let result = null;
  let winning_consequence=[];
  let definedHorizontalCondition=cells[occuppied_Cells[index].id +2] !==undefined & cells[occuppied_Cells[index].id +1] !==undefined;;
  let definedVerticalCondition=cells[occuppied_Cells[index].id +rows] !==undefined & cells[occuppied_Cells[index].id +rows+rows] !==undefined;;
  let definedLeftDiagonalCondition=cells[occuppied_Cells[index].id +rows+1] !== undefined & cells[occuppied_Cells[index].id +2*(rows+1)]!==undefined;
  let definedRightDiagonal=cells[occuppied_Cells[index].id +rows-1] !== undefined & cells[occuppied_Cells[index].id +2*(rows-1)]!==undefined;



  
  if(cells[occuppied_Cells[index].id].whose===player){
    if(definedHorizontalCondition){

      let onOneRowHorizontalCondition=Math.floor(cells[occuppied_Cells[index].id].id/rows) ===Math.floor(cells[occuppied_Cells[index].id+1].id/rows) & Math.floor(cells[occuppied_Cells[index].id].id/rows ===Math.floor(cells[occuppied_Cells[index].id+2].id/rows));
      let horizontalCpndition=cells[occuppied_Cells[index].id +1].whose==player & cells[occuppied_Cells[index].id +2].whose==player;    
      if(horizontalCpndition & onOneRowHorizontalCondition){
        result=player;
        winning_consequence=[cells[occuppied_Cells[index].id].id,cells[occuppied_Cells[index].id+1].id,cells[occuppied_Cells[index].id+2].id]
        debugger;
      }
    }
    if(definedVerticalCondition){
      let verticalCondition=cells[occuppied_Cells[index].id +rows].whose==player & cells[occuppied_Cells[index].id +rows+rows].whose==player;
      if(verticalCondition){
        result=player;
        winning_consequence=[cells[occuppied_Cells[index].id].id,cells[occuppied_Cells[index].id+rows].id,cells[occuppied_Cells[index].id+2*(rows)].id]
        debugger;
      }
    }
    if(definedLeftDiagonalCondition){
      let LeftDiagonalCondition = cells[occuppied_Cells[index].id +rows+1].whose==player & cells[occuppied_Cells[index].id +2*(rows+1)].whose==player;
      if(LeftDiagonalCondition){
        result=player;
        winning_consequence=[cells[occuppied_Cells[index].id].id,cells[occuppied_Cells[index].id+rows+1].id,cells[occuppied_Cells[index].id+2*(rows+1)].id]
        debugger;

      }
    }
    if(definedRightDiagonal){
      let RightDiagonalCondition = cells[occuppied_Cells[index].id +rows-1].whose==player & cells[occuppied_Cells[index].id +2*(rows-1)].whose==player;
      let rowsArray=[cells[occuppied_Cells[index].id].id,cells[occuppied_Cells[index].id+rows-1].id,cells[occuppied_Cells[index].id+2*(rows-1)].id];
      let NotOnOneRow=true;
      let forbidden_array=[3,5];
      let counter=0;
      for(let i=0;i<rowsArray.length;i++){
        if(rowsArray[i] ==forbidden_array[0] || rowsArray[i] ==forbidden_array[1]){
          counter++;
          if(counter==2){
            NotOnOneRow=false;
            break;
          }
        }
      }
      if(RightDiagonalCondition & NotOnOneRow){
   
        result=player;
        winning_consequence=[cells[occuppied_Cells[index].id].id,cells[occuppied_Cells[index].id+rows-1].id,cells[occuppied_Cells[index].id+2*(rows-1)].id]
        debugger;
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