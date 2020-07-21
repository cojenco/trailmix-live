import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TrailSearch.css';
import axios from 'axios';
import SearchResult from './SearchResult';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import Button from '@material-ui/core/Button';


const TrailSearch = ({ onSelectTrail }) => {

  const [ stateSelected, setStateSelected ] = useState({value: ''});
  const [ searchBar, setSearchBar ] = useState('');
  const [ keywordResults, setKeywordResults ] = useState([]);
  // const [ searchResults, setSearchResults ] = useState([]);
  // const BASE_URL = 'http://127.0.0.1:8000/diamondtrails'
  const BASE_URL = 'https://trailmix-base.wm.r.appspot.com/diamondtrails'


  const onInputChange = (event) => {
		let newSearch = { ...searchBar };
		newSearch = event.target.value;
    setSearchBar(newSearch);
  };


  const onSelectState = (event) => {
    setStateSelected({value: event.target.value});
    setKeywordResults([]);
  };


  const onSearchSubmit = (event) => {
    event.preventDefault();
    const state = stateSelected.value;

    axios
    .get(`${BASE_URL}/all-trails/${state}`)
    .then((response) => {
      const newSearchResults = response.data.trails;
      // setSearchResults(newSearchResults);
      const newKeywordResults = newSearchResults.filter(trail => trail.name.toLowerCase().includes(searchBar.toLowerCase()));
      setKeywordResults(newKeywordResults);
    })
    .catch((error) => {
      console.log(error.message);
    })

    setSearchBar('');
  }


  const allKeywordResults = keywordResults.map((trail) => {
    return (
      <SearchResult key={trail.id} trail={trail} onSelectTrail={onSelectTrail} />
    );
  })

  
  const stateOptions = USA.map((single_state) => {
    return (
    <option key={single_state} value={single_state}> {single_state} </option>
    );
  })


  ////////// NEW! Trails nearby using Geolocation ////////
  const success = position => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    axios
    .get(`${BASE_URL}/trails-nearby?lat=${lat}&lng=${lng}`)
    .then((response) => {
      // console.log(response.data);
      // console.log(response.data.trails);
      const newSearchResults = response.data.trails;
      setKeywordResults(newSearchResults);
    })
    .catch((error) => {
      console.log(error.message);
    })

    setSearchBar('');
    setStateSelected({value: ''});
  };
  
  
  const onSearchNearbyClick = () => {
    navigator.geolocation.getCurrentPosition(success);
  }
    

  return (
    <div className="d-flex flex-column trailsearch-main-container text-center" >

      <h1> Find <span className="live-green" > LIVE </span> updates on your next hike </h1>

      <select value={stateSelected.value} onChange={onSelectState} className="custom-select rounded mb-3" id="state-select" >
        <option defaultValue> 1 * Select State </option>

        <option value="WA">WA</option>

        {stateOptions}
      </select>

      <form onSubmit={ onSearchSubmit } className="" >
        <div className="input-group d-flex flex-column flex-wrap" id="input-section" >
          <input
            type='type'
            name='query'
            className='searchbox rounded mb-3'
            id='search-form'
            placeholder="  2   Enter Keyword OR Click Search"
            onChange={onInputChange}
            value={searchBar}
          />

          <input
            className="btn btn-secondary btn-style bg-dark rounded mb-3"
            id="search-btn"
            type="submit"
            name="submit"
            value="SEARCH"
            onClick={ onSearchSubmit }
          />
        </div>
      </form>

      <Button
        variant="contained"
        color="default"
        size="large"
        className="shadow rounded"
        startIcon={<MyLocationIcon />}
        onClick={onSearchNearbyClick}
        id="nearby-btn"
      >
        Find Trails Nearby
      </Button>

      {/* <button type="button" id="nearby-btn" className="btn btn-secondary rounded mb-3" onClick={onSearchNearbyClick} >
        <MyLocationIcon />Find Trails Nearby
      </button> */}

      <section className="results-section" >

        {allKeywordResults}

      </section>
    </div>
  )
}


TrailSearch.propTypes = {
  onSelectTrail: PropTypes.func.isRequired,
};


const USA = [
  'AK','AL','AR','AZ','CA','CO','CT','DE','FL','GA',
  'HI','IA','ID','IL','IN','KS','KY','LA','MA','MD',
  'ME','MI','MN','MO','MS','MT','NC','ND','NE','NH',
  'NJ','NM','NV','NY','OH','OK','OR','PA','RI','SC',
  'SD','TN','TX','UT','VA','VT','WA','WI','WV','WY']

export default TrailSearch;