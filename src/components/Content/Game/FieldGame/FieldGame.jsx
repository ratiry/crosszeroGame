import classes from './FieldGame.module.scss';

let GameField=(props)=>{
  return(
 <div className={classes.GameField}>
    <div className={classes.Space}></div>
    <div className={classes.Space}></div>
    <div className={classes.Space}></div>
    <div className={classes.Space}></div>
    <div className={classes.Space}></div>
    <div className={classes.Space}></div>
    <div className={classes.Space}></div>
    <div className={classes.Space}></div>
    <div className={classes.Space}></div>
  </div>
  ) 
}
export default GameField;