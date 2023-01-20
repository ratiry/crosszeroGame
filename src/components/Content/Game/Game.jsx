import GameField from './FieldGame/FieldGame';
import classes from './Game.module.scss';
let Game=(props)=>{
  return(
    <div className={classes.Game_container}>
      <h1>Tic Tac Toe</h1>
      <GameField/>
    </div>
  )
}
export default Game;