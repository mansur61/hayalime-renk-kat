import  React  from "react";
import Navbar from '../src/components/Navbar'
import Home from '../src/components/Home'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import KayitGiris from '../src/components/KayitGiris'
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="container">
          <Route component={Home}  path="/" exact />
          <Route component={About}  path="/about"/>
          <Route component={Contact}  path="/contact"/>           
          <Route component={KayitGiris}  path="/kayit_giris"/>      
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App