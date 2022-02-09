import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Cards from './components/Cards';
import Footer from './components/Footer';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {

  const [Mode, setMode] = useState('light');

  const changemode = () => {
    if (Mode === 'light') {
      setMode("dark");

      document.body.style.backgroundColor = "#312f2f";
    }
    else {
      setMode("light");

      document.body.style.backgroundColor = "white";

    }
  }

  return (
    <>
      
        <Navbar home="Home" mode={Mode} changemode={changemode} /> {/*these are props */}
 <TextForm heading="Write your words here" mode={Mode} />
 <About mode={Mode} changemode={changemode} />
 
  <Cards mode={Mode} />
  <Footer mode={Mode} />
{/* <Router>
        <Switch>
          <Route exact path="/">
           
          
          </Route>
          <Route exact path="/About">
           
          </Route>
        </Switch>
       
      </Router> */}


    </>

  );
}

export default App;