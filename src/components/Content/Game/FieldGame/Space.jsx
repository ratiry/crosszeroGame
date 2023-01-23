import classes from './FieldGame.module.scss';
import { useMemo } from 'react';
let CheckOccupiedCell=(id,array)=>{
  let IsOccupied=false;
  for(let i=0;i<array.length;i++){
    if(array[i].id ==id){
      IsOccupied=true;
      break;
    }
  }
  return IsOccupied;
}
let Space=(props)=>{
  let IsOccupied =  CheckOccupiedCell(props.id,props.occuppied_Cells);
  let Cases=[
    <img src='https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png'/>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/></svg>,
  null
];
let FIll_SPACE_WITH_CROSS=()=>{
  if(!IsOccupied  & !props.result){
    debugger;
    props.PlayersMoveThunk(props.id);
  }  
}
  let Case=2;
  if(props.whose=='zero'){
    Case=1;
  }else if(props.whose=='cross'){
    Case=0;
  }
  return(
    <div className={classes.Space} onClick={FIll_SPACE_WITH_CROSS}>
      {Cases[Case]}
    </div>
  )
}
export default Space;