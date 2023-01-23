import classes from './FieldGame.module.scss';
import Space from './Space';

let GameField=(props)=>{
  let SpacArray=props.cells.map((S)=>{ return <Space  PlayersMoveThunk={props.PlayersMoveThunk} occuppied_Cells={props.occuppied_Cells} id={S.id} whose={S.whose} FILL_SPACE_WITH_CROSS_AC={props.FILL_SPACE_WITH_CROSS_AC} FILL_SPACE_WITH_ZERO_AC={props.FILL_SPACE_WITH_ZERO_AC}/>})
  return(
 <div className={classes.GameField}>
    {SpacArray}
  </div>
  ) 
}
export default GameField;