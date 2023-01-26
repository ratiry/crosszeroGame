import CheckForVictory from "../Helpers/CheckForVictory";
const FILL_SPACE_WITH_ZERO='FILL_SPACE_WITH_ZERO';
const FILL_SPACE_WITH_CROSS='FILL_SPACE_WITH_CROSS';
const CHECK_FOR_VICTORY='CHECK_FOR_VICTORY';
let intialization={
  cells:[
    {whose:null, id:0},{whose:null,id:1},{whose:null,id:2},
    {whose:null,id:3},{whose:null,id:4},{whose:null,id:5},
    {whose:null,id:6},{whose:null,id:7},{whose:null,id:8},
  ],
  occuppied_Cells:{
    cross:[],
    zero:[]
  },
  rows:3,
  result:{
    player:null,
    winning_consequence:null,
    direction:null
  }
}

let cells_reducer=(State=intialization,action)=>{
  let make_new_occypied_space=(whose)=>({
    whose:whose,
    id:action.id
  })
  switch(action.type){
    case FILL_SPACE_WITH_CROSS:
      return {...State,
        cells:State.cells.map((c)=>{
          if(c.id===action.id){
            return {...c,whose:'cross'}
          }else{
            return c
          }
        }),
        occuppied_Cells:{
          cross:[...State.occuppied_Cells.cross , make_new_occypied_space('cross')],
          zero:State.occuppied_Cells.cross
        }
      }
    case FILL_SPACE_WITH_ZERO:
      return{
        ...State,
        cells:State.cells.map((c)=>{
          if(c.id===action.id){
            return {...c,whose:'zero'}
          }else{
            return c
          }
        }),
        occuppied_Cells:{
          zero:[...State.occuppied_Cells.zero , make_new_occypied_space('zero')],
          cross:State.occuppied_Cells.cross
        }
      }
    case CHECK_FOR_VICTORY:

      let result= CheckForVictory(State.cells,State.occuppied_Cells.cross,State.rows);
      if(result.player =='cross' || result.player=='zero'){
        return{
          ...State,
          result:result
        }
      }else{
        return State
      }
    default: return State
  }
}

export let PlayersMoveThunk=(id)=>(dispatch)=>{
  dispatch(FILL_SPACE_WITH_CROSS_AC(id));
  dispatch(CheckForVictoryAC());
}
export let FILL_SPACE_WITH_CROSS_AC=(id)=>({
  type:FILL_SPACE_WITH_CROSS,
  id
})
export let FILL_SPACE_WITH_ZERO_AC=(id)=>({
  type:FILL_SPACE_WITH_ZERO,
  id
})
export let CheckForVictoryAC=()=>({
  type:CHECK_FOR_VICTORY
})
export default cells_reducer;