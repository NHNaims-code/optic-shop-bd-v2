import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Navbar/Topbar';
import Home from './components/Pages/Home/Home';
import Footer from './components/Footer/Footer';
import Admin from './components/Pages/Admin/Admin';
import Cartier from './components/Pages/Brands/Cartier';
import Contact from './components/Pages/Contact/Contact';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createContext, useEffect, useState } from 'react';
import Loading from './components/utility/Loading/Loading';
import Product from './components/Pages/Product/Product';

export const PublicContext = createContext();

function App() {

  const [currentMenu, setCurrentMenu] = useState("home");
  const [cart, setCart] = useState(0);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    window.addEventListener('load', () => {
        setLoad(true)
    })
})

  return (
    <div className="App">
      <PublicContext.Provider  value={[setCurrentMenu, cart, setCart]} >
      <Topbar/>
        <Router>
      <Navbar currentMenu={currentMenu} cart={cart}></Navbar>
      
      {
        !load && 
        <div className="loading-container-root">
        <div className="loading-container">
        <Loading/>
        </div>
        </div>
      }
    
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/admin">
              <Admin/>
            </Route>
            <Route path="/cartier">
              <Cartier/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/product">
              <Product/>
            </Route>
          </Switch>
        </Router>
      <Footer cart={cart}></Footer>
      </PublicContext.Provider>
    
    </div>
  );
}

export default App;
