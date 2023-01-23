import GameField from './FieldGame/FieldGame';
import classes from './Game.module.scss';
import { FILL_SPACE_WITH_CROSS_AC,FILL_SPACE_WITH_ZERO_AC } from '../../../redux/cells_reducer';
import { connect } from 'react-redux';
let Game=(props)=>{
  return(
    <div className={classes.Game_container}>
      <h1>Tic Tac Toe</h1>
      <GameField cells={props.cells} occuppied_Cells={props.occuppied_Cells} FILL_SPACE_WITH_CROSS_AC={props.FILL_SPACE_WITH_CROSS_AC} FILL_SPACE_WITH_ZERO_AC={props.FILL_SPACE_WITH_ZERO_AC} />
    </div>
  )
}
let mapDispatchToProps={
  FILL_SPACE_WITH_CROSS_AC,FILL_SPACE_WITH_ZERO_AC
}
let mapStateToProps=(state)=>({
  cells:state.cellsState.cells,
  occuppied_Cells:state.cellsState.occuppied_Cells
})
export default connect(mapStateToProps,mapDispatchToProps)(Game);