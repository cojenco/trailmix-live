import React from 'react';
import PropTypes from 'prop-types';
import './SearchResult.css';


const SearchResult = ({ trail, onSelectTrail }) => {

  const handleClick = () => {
    console.log(trail.id);
    onSelectTrail(trail.id);
  }


  return (
    <div className="card w-75 align-self-center" id="result-card" >
      <div className="card-body">
        <h4 className="card-title"> <a href={`#${trail.id}`} onClick={handleClick} className="result-link" > {trail.name} </a> </h4>
        
        
        <p className="card-text mb-2 font-italic"> {trail.summary} </p>
        <span className="card-link"> {trail.location} </span>
        <span className="card-link"> {trail.length} mi </span>
      </div>
    </div>
  )
}


SearchResult.propTypes = {
  trail: PropTypes.object.isRequired,
  onSelectTrail: PropTypes.func.isRequired,
};


export default SearchResult;