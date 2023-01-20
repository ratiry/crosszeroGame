import './App.module.scss';
import { BrowserRouter, Routes } from 'react-router-dom';
import classes from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <BrowserRouter>
        <div className={classes.App}>
          <Header/>
          <div></div>
          <Footer/>
        </div>
    </BrowserRouter>
  )
}

export default App;
