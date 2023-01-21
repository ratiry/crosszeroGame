import './App.module.scss';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import classes from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Game from './components/Content/Game/Game';
import Welcome from './components/Content/Welcome/Welcome';
import { useReducer } from 'react';
const FILL_SPACE_WITH_ZERO='FILL_SPACE_WITH_ZERO';
const FILL_SPACE_WITH_CROSS='FILL_SPACE_WITH_CROSS';
let State={
  cells:[
    {whose:null, id:0},{whose:null,id:1},{whose:null,id:2},
    {whose:null,id:3},{whose:null,id:4},{whose:null,id:5},
    {whose:null,id:6},{whose:null,id:7},{whose:null,id:8},
  ],
  occuppied_Cells:[]
}
let reducer=(State,action)=>{
  switch(action.type){
    case FILL_SPACE_WITH_CROSS:
      return{
        ...State,
        cells:[...State.cells[action.id].whose='cross'],
        occuppied_Cells:[...State.occuppied_Cells , action.id]
      }
    case FILL_SPACE_WITH_ZERO:
      return{
        ...State,
        cells:[...State.cells[action.id].whose='zero'],
        occuppied_Cells:[...State.occuppied_Cells , action.id]
      }
    default: return State
  }
}

function App() {
  let [state,dispatch] = useReducer(State,reducer);
  let Fill_with_zeroAC=()=>{
    dispatch({type:FILL_SPACE_WITH_ZERO})
  }
  let Fill_with_crossAC=()=>{
    dispatch({type:FILL_SPACE_WITH_CROSS})
  }
  return (
    <BrowserRouter>
        <div className={classes.App}>
          <Header/>
          <div className={classes.Content}>
            <Routes>
              <Route path={'/'} element={<Welcome/>} />
              <Route path={'/Game' } element={<Game/>}/>
            </Routes>
          </div>
          <Footer/>
        </div>
    </BrowserRouter>
  )
}

export default App;
