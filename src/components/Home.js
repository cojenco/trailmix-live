import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import axios from 'axios';
import TrailSearch from './TrailSearch';


const Home = () => {

  return (

    <div className="d-flex flex-column justify-content-around align-items-center flex-wrap home-second">

      <div className="container d-flex flex-column text-center second-block">
        <h2 className="mb-3" > Ten Essentials </h2>
        <blockquote className="blockquote text-center">
          <p className="mb-0"> Navigation. Sun Protection. Insulation. Illumination. First-Aid Supplies. Fire. </p>
          <p className="mb-0"> Repair Kit and Tools. Nutrition. Hydration. Emergency Shelter.  </p>
          <p className="mb-0 text-muted"> (Also, check out Trail Mix Live!) </p>
          <footer className="blockquote-footer">  <a href="https://www.nps.gov/articles/10essentials.htm" className="text-dark" > <cite title="Source Title">National Park Service</cite> </a> </footer>
        </blockquote>

        <a href="https://www.nps.gov/articles/10essentials.htm" className="align-self-center" >           
          <img
            alt="Hiking map and water by Markus Spiske"
            src="https://lh3.googleusercontent.com/pw/ACtC-3cWZ7htgVNd05B7ZzDhUNFGaoxAq51lE0n6LWIhjtWsdtQS5p5sEGdDl8R4Z1BOGTLFWxtcdvOhL9gA5xUoyMO0a0HE9Rlf8YuHyvsntZ9bKeAMXPkFlxpLkO1fD5K5CsEBxYpH8kUhWuwkaHLBJbI=w1852-h1234-no?authuser=0"
            className="d-inline-block align-top w-75"
          /> 
        </a>
      </div>

       
      <div className="d-flex flex-column justify-content-around align-items-center flex-wrap text-center third-block">
        <blockquote className="blockquote text-center">
          <a href="https://www.wta.org/news/signpost/building-trail-smart-hikers-in-2020" className="align-self-center" >           
          <img
            alt="Recreate Responsibly"
            src="https://www.wta.org/45f42b31-0280-49dc-bd35-2ff052bc85cb.jpg/@@images/4f15d932-f528-4ae8-8e9a-3065713383e5.jpeg"
            className="d-inline-block align-top w-50"
          /> 
          </a>
          {/* <footer className="blockquote-footer">  <a href="https://www.wta.org/go-outside/trail-smarts" className="text-light" > <cite title="Source Title">Washington Trails Association, Washington’s Recreate Responsibly Coalition</cite> </a> </footer> */}
        </blockquote>
        <h2 className="hashtag-line" > #RecreateResponsibly </h2>

        {/* <article>
          <p>Remember to recreate responsibly. Your actions can have an impact on trails and wildlife. </p>
          <p>WTA/RRC reminds us that, "We all have a role to play in keeping people, places and communities safe as we enjoy the outdoors this summer and beyond."</p>
        </article> */}

        <blockquote className="blockquote text-center">
          <p>Your actions can have an impact on trails and wildlife. </p>
          <p>"We all have a role to play in keeping people, places and communities safe as we enjoy the outdoors this summer and beyond."</p>
          <footer className="blockquote-footer">  <a href="https://www.wta.org/go-outside/trail-smarts" className="text-light" > <cite title="Source Title">Washington Trails Association, Recreate Responsibly Coalition</cite> </a> </footer>
        </blockquote>
      </div>

    </div>
    
  )
}

export default Home;