import './App.module.scss';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import classes from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Welcome from './components/Content/Welcome/Welcome';
function App() {
  
  return (
    <BrowserRouter>
        <div className={classes.App}>
          <Header/>
          <div className={classes.Content}>
            <Routes>
              <Route path={'/'} element={<Welcome/>} />
              
            </Routes>
          </div>
          <Footer/>
        </div>
    </BrowserRouter>
  )
}

export default App;
