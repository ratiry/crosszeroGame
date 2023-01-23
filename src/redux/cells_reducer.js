

const FILL_SPACE_WITH_ZERO='FILL_SPACE_WITH_ZERO';
const FILL_SPACE_WITH_CROSS='FILL_SPACE_WITH_CROSS';
let intialization={
  cells:[
    {whose:null, id:0},{whose:null,id:1},{whose:null,id:2},
    {whose:null,id:3},{whose:null,id:4},{whose:null,id:5},
    {whose:null,id:6},{whose:null,id:7},{whose:null,id:8},
  ],
  occuppied_Cells:[]
}
let cells_reducer=(State=intialization,action)=>{

  switch(action.type){
    case FILL_SPACE_WITH_CROSS:
      let new_occypied_space={
        whose:'cross',
        id:action.id
      }
      return {...State,
        cells:State.cells.map((c)=>{
          if(c.id===action.id){
            return {...c,whose:'cross'}
          }else{
            return c
          }
        }),
        occuppied_Cells:[...State.occuppied_Cells , new_occypied_space]
      }
    case FILL_SPACE_WITH_ZERO:
      return{
        ...State,
        cells:[...State.cells[action.id].whose='zero'],
      }
    default: return State
  }
}
export default cells_reducer;
export let FILL_SPACE_WITH_CROSS_AC=(id)=>({
  type:FILL_SPACE_WITH_CROSS,
  id
})
export let FILL_SPACE_WITH_ZERO_AC=(id)=>({
  type:FILL_SPACE_WITH_ZERO,
  id
})