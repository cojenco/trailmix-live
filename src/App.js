import React, {useState} from 'react';
import Trail from './components/Trail';
import './App.css';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import TrailSearch from './components/TrailSearch';



const App = () => {

  const [trailID, setTrailID] = useState(null);

  const selectTrail = (id) => {
    console.log(id);
    setTrailID(id);
  }

  return (

    <div>
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
