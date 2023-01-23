
let conditipnsFunction=(index,cells,occuppied_Cells,player,rows)=>{
  let result = null;
  
  let definedCondition=cells[occuppied_Cells[index].id +2] !==undefined & cells[occuppied_Cells[index].id +1] !==undefined;
  if(definedCondition & cells[occuppied_Cells[index].id].whose===player ){
    let onOneRowHorizontalCondition=Math.floor(cells[occuppied_Cells[index].id].id/rows) ===Math.floor(cells[occuppied_Cells[index].id+1].id/rows) & Math.floor(cells[occuppied_Cells[index].id].id/rows ===Math.floor(cells[occuppied_Cells[index].id+2].id/rows));
    let horizontalCpndition=cells[occuppied_Cells[index].id +1].whose==player & cells[occuppied_Cells[index].id +2].whose==player;
    if(horizontalCpndition){
      debugger;
      if(onOneRowHorizontalCondition){
        debugger;
        result=player;
        return result;
      } 
    }
  }
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