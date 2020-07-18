import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TrailSearch.css';
import axios from 'axios';
import SearchResult from './SearchResult';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";


const TrailSearch = ({ onSelectTrail }) => {

  const [ stateSelected, setStateSelected ] = useState({value: ''});
  const [ searchBar, setSearchBar ] = useState('');
  const [ searchResults, setSearchResults ] = useState([]);
  const [ keywordResults, setKeywordResults ] = useState([]);
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
    console.log(stateSelected);

    axios
    .get(`${BASE_URL}/all-trails/${event.target.value}`)
    .then((response) => {
      const newSearchResults = response.data.trails;
      setSearchResults(newSearchResults);
    })
    .catch((error) => {
      console.log(error.message);
    })
  };


  const onSearchSubmit = (event) => {
    event.preventDefault();

    const newKeywordResults = searchResults.filter(trail => trail.name.toLowerCase().includes(searchBar.toLowerCase()));
    setKeywordResults(newKeywordResults);
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


  return (
    <div className="d-flex flex-column trailsearch-main-container" >

      {/* <form onSubmit={onSelectSubmit}> */}
        <select value={stateSelected.value} onChange={onSelectState} className="custom-select rounded mb-3" id="state-select" >
          <option defaultValue> 1 * Select State </option>

          <option value="WA">WA</option>

          {stateOptions}
        </select>
      {/* </form> */}


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
            value="Search"
            onClick={ onSearchSubmit }
          />
        </div>
      </form>

      <section className="results-section" >

        {allKeywordResults}

      </section>
    </div>
  )
}


const USA = [
  'AK','AL','AR','AZ','CA','CO','CT','DE','FL','GA',
  'HI','IA','ID','IL','IN','KS','KY','LA','MA','MD',
  'ME','MI','MN','MO','MS','MT','NC','ND','NE','NH',
  'NJ','NM','NV','NY','OH','OK','OR','PA','RI','SC',
  'SD','TN','TX','UT','VA','VT','WA','WI','WV','WY']

export default TrailSearch;