import React, {useState} from 'react';
import Trail from './components/Trail';
import './App.css';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import TrailSearch from './components/TrailSearch';
import Navbar from 'react-bootstrap/Navbar'



const App = () => {

  const [trailID, setTrailID] = useState(null);

  const selectTrail = (id) => {
    console.log(id);
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
        
        <TrailSearch onSelectTrail={selectTrail} /> 
      
      }
    </div>

    // <Router basename={`${process.env.PUBLIC_URL}/`} >
    //   <div>
    //     <nav>
    //     </nav>


    //     <Switch>
    //       <Route path="/trails-search">
    //         <TrailSearch />
    //       </Route>
    //       <Route path="/trail">
    //         <Trails />
    //       </Route>
    //       <Route exact path="/">
    //         <TrailSearch />
    //       </Route>

    //     </Switch>
    //   </div>
    // </Router>
  );
}

// const Trails = () => {
//   let match = useRouteMatch();

//   return (
//     <div>
//       <Switch>
//         <Route path={`${match.path}/:externalID`}>
//           <ATrail />
//         </Route>
//         {/* <Route path={match.path}>
//           <h3>Please select a topic. </h3>
//         </Route> */}
//       </Switch>
//     </div>
//   );
// }

// const ATrail = () => {
//   let { externalID } = useParams();
//   return (
//     <Trail externalID={externalID} />
//   );
// }

export default App;
