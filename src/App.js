import React, {useState} from 'react';
import Trail from './components/Trail';
import './App.css';
import TrailSearch from './components/TrailSearch';
import Home from './components/Home';
import Navbar from 'react-bootstrap/Navbar'


const App = () => {

  const [trailID, setTrailID] = useState(null);

  const selectTrail = (id) => {
    // console.log(id);
    setTrailID(id);
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/trailmix-live/">
          <img
            alt=""
            src="https://lh3.googleusercontent.com/pw/ACtC-3dcvjHB07jx8qG3JCbZRfxZTH6jnB2DPr3LeRoKYcI5QAl3M9xk9mXTYdrME2swfPhRz7XipbrIAotgXvXJPeec5WGOjou-vaQn0TJzGjEloWVsdxB-51w8NlIUOtIxxLlNSCJPuvmGXh-th_tF2Uw=s200-no?authuser=0"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <span className="text-light" >  TRAIL MIX <span> LIVE </span> </span>
        </Navbar.Brand>
      </Navbar>


      { trailID ? 

        <Trail externalID={trailID} /> : 
        
        <div className="main-div" >
          <TrailSearch onSelectTrail={selectTrail} /> 
          <Home />
        </div>
      
      }
      

      <footer className="footer p-t-1 bg-dark app-footer">
        <div className="container d-flex flex-column text-center">
          <a href="/trailmix-live/" className="align-self-center" >           
            <img
              alt="Trail Mix Live"
              src="https://lh3.googleusercontent.com/pw/ACtC-3dcvjHB07jx8qG3JCbZRfxZTH6jnB2DPr3LeRoKYcI5QAl3M9xk9mXTYdrME2swfPhRz7XipbrIAotgXvXJPeec5WGOjou-vaQn0TJzGjEloWVsdxB-51w8NlIUOtIxxLlNSCJPuvmGXh-th_tF2Uw=s200-no?authuser=0"
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> 
          </a>
          <p className="text-light text-muted" > TRAIL MIX LIVE © 2020 </p>
        </div>
      </footer>
    </div>
  );
}


export default App;