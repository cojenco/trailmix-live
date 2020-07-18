import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './LiveUpdate.css';
import Modal from 'react-bootstrap4-modal';
import IconButton from '@material-ui/core/IconButton';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import GrainIcon from '@material-ui/icons/Grain';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Battery20Icon from '@material-ui/icons/Battery20';
import Battery50Icon from '@material-ui/icons/Battery50';
import Battery80Icon from '@material-ui/icons/Battery80';
import BatteryAlertIcon from '@material-ui/icons/BatteryAlert';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import Filter9PlusIcon from '@material-ui/icons/Filter9Plus';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter5Icon from '@material-ui/icons/Filter5';
import Forward5Icon from '@material-ui/icons/Forward5';
import Forward10Icon from '@material-ui/icons/Forward10';
import Forward30Icon from '@material-ui/icons/Forward30';
import SignalCellular0BarIcon from '@material-ui/icons/SignalCellular0Bar';
import SignalCellular1BarIcon from '@material-ui/icons/SignalCellular1Bar';
import SignalCellular2BarIcon from '@material-ui/icons/SignalCellular2Bar';
import SignalCellular3BarIcon from '@material-ui/icons/SignalCellular3Bar';
import SignalCellular4BarIcon from '@material-ui/icons/SignalCellular4Bar';
import Button from '@material-ui/core/Button';



const LiveUpdate = ({trail, refresh}) => {

  // const BASE_URL = 'http://127.0.0.1:8000/diamondtrails'
  const BASE_URL = 'https://trailmix-base.wm.r.appspot.com/diamondtrails'


  const [isOpen, setIsOpen] = useState(false);
  const [weatherUpdate, setWeatherUpdate] = useState(false);
  const [parkingUpdate, setParkingUpdate] = useState(false);
  const [visitorUpdate, setVisitorUpdate] = useState(false);


  const showModal = () => {
    setIsOpen(true);
  }


  const hideModal = () => {
    setWeatherUpdate(false);
    setParkingUpdate(false);
    setVisitorUpdate(false);
    setIsOpen(false);
  }


  const onLiveUpdateClick = () => {

    if (!parkingUpdate.message && !visitorUpdate.message && !weatherUpdate.message) {
      console.log('No updates tracked');
      return;
    } 

    const externalID = trail.id;
    const updates = [ parkingUpdate, visitorUpdate, weatherUpdate ];

    for (let update of updates) {
      if (update.message) {
        axios
        .post(`${BASE_URL}/trail/${externalID}/live-update`, update)
        .then((response) => {
          console.log('SENT OUT!!!')
        })
        .catch((error) => {
          console.log(error.message);
        });
      }
    }

    setWeatherUpdate(false);
    setParkingUpdate(false);
    setVisitorUpdate(false);
    setIsOpen(false);
    refresh();
  }


  const onWeatherClick = (event) => {
    const update = {
      'category': event.target.name,
      'message': event.target.id,
      'external_id': trail.id,
      'input': event.target.id,
    };

    setWeatherUpdate(update);
  }


  const onParkingClick = (event) => {
    const message = event.target.id + "% Full";
    const update = {
      'category': event.target.name,
      'message': message,
      'external_id': trail.id,
      'input': event.target.id,
    };

    setParkingUpdate(update);
  }


  const onVisitorClick = (event) => {
    const message = event.target.id + " Visitors within 300ft";
    const update = {
      'category': event.target.name,
      'message': message,
      'external_id': trail.id,
      'input': event.target.id,
    };

    setVisitorUpdate(update);
  }


  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className="shadow"
        startIcon={<FlashOnIcon />}
        onClick={showModal}
        value="Thunder"
      >
        Update Live Status
      </Button>


      <Modal visible={isOpen} onClickBackdrop={hideModal} className="text-center" >
        <div className="modal-header text-center">
          <h5 className="modal-title text-center"> Update Live Status </h5>
        </div>

        <div className="modal-body">
          <h6> {trail.name} <span> ({trail.length} mi)</span> </h6>
          <p className="text-muted"> {trail.location} </p>
        </div>

        <div className="modal-body">
          <h6> PARKING </h6>
        </div>

        <div className="d-flex flex-row justify-content-center" >
          <div className="custom-control custom-radio">
            <input type="radio" id="0" value="0" name="Parking" className="custom-control-input" onChange={onParkingClick} checked={ parkingUpdate && parkingUpdate.input === "0" } />
            <label className="custom-control-label" htmlFor="0">          
            <IconButton color="primary" aria-label="capacity-0-full" data-toggle="tooltip" data-placement="top" title="Parking Available 100%">
              <SignalCellular0BarIcon />
            </IconButton>
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="25" value="25" name="Parking" className="custom-control-input" onChange={onParkingClick} checked={ parkingUpdate && parkingUpdate.input === "25" } />
            <label className="custom-control-label" htmlFor="25">          
            <IconButton color="primary" aria-label="capacity-25-full" data-toggle="tooltip" data-placement="top" title="25% Full">
              <SignalCellular1BarIcon />
            </IconButton>
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="50" value="50" name="Parking" className="custom-control-input" onChange={onParkingClick} checked={ parkingUpdate && parkingUpdate.input === "50" } />
            <label className="custom-control-label" htmlFor="50">          
            <IconButton color="primary" aria-label="capacity-50-full" data-toggle="tooltip" data-placement="top" title="50% Full">
              <SignalCellular2BarIcon />
            </IconButton>
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="75" value="75" name="Parking" className="custom-control-input" onChange={onParkingClick} checked={ parkingUpdate && parkingUpdate.input === "75" } />
            <label className="custom-control-label" htmlFor="75">          
            <IconButton color="secondary" aria-label="capacity-75-full" data-toggle="tooltip" data-placement="top" title="75% Full">
              <SignalCellular3BarIcon />
            </IconButton>
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="100" value="100" name="Parking" className="custom-control-input" onChange={onParkingClick} checked={ parkingUpdate && parkingUpdate.input === "100" } />
            <label className="custom-control-label" htmlFor="100">          
            <IconButton color="secondary" aria-label="capacity-100-full" data-toggle="tooltip" data-placement="top" title="100% Full">
              <SignalCellular4BarIcon />
            </IconButton>
            </label>
          </div>
        </div>

        <div className="modal-body">
          <h6> VISITORS  </h6>
          <p className="text-muted" > (within 300ft) </p>
        </div>

        <div className="d-flex flex-row justify-content-center" >
          <div className="custom-control custom-radio">
            <input type="radio" id="1-5" value="1-5" name="Visitor" className="custom-control-input" onChange={onVisitorClick} checked={ visitorUpdate && visitorUpdate.input === "1-5" } />
            {/* <input type="radio" id="1-5" name="Visitor" className="custom-control-input" onClick={onVisitorClick} /> */}
            <label className="custom-control-label" htmlFor="1-5">          
            <IconButton color="primary" aria-label="1-5visitorsinsight" data-toggle="tooltip" data-placement="top" title="1-5 visitors in 300ft">
              <Filter1Icon />
            </IconButton>
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="5-9" value="5-9" name="Visitor" className="custom-control-input" onChange={onVisitorClick} checked={ visitorUpdate && visitorUpdate.input === "5-9" } />
            {/* <input type="radio" id="5-9" name="Visitor" className="custom-control-input" onClick={onVisitorClick} /> */}
            <label className="custom-control-label" htmlFor="5-9">          
            <IconButton color="primary" aria-label="5-9visitorsinsight" data-toggle="tooltip" data-placement="top" title="5-9 visitors in 300ft">
              <Filter5Icon />
            </IconButton>
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="9+" value="9+" name="Visitor" className="custom-control-input" onChange={onVisitorClick} checked={ visitorUpdate && visitorUpdate.input === "9+" } />
            {/* <input type="radio" id="9+" name="Visitor" className="custom-control-input" onClick={onVisitorClick} /> */}
            <label className="custom-control-label" htmlFor="9+">          
            <IconButton color="secondary" aria-label="9plusvisitorsinsight" data-toggle="tooltip" data-placement="top" title="9+ visitors in 300ft">
              <Filter9PlusIcon />
            </IconButton>
            </label>
          </div>
        </div>

        <div className="modal-body">
          <h6> WEATHER </h6>
        </div>

        <div className="d-flex flex-row justify-content-center" >
          <div className="custom-control custom-radio">
            <input type="radio" id="Sun" value="Sun" name="Weather" className="custom-control-input" onChange={onWeatherClick} checked={ weatherUpdate && weatherUpdate.input === "Sun" } />
            <label className="custom-control-label" htmlFor="Sun">          
            <IconButton color="secondary" aria-label="Sun" data-toggle="tooltip" data-placement="top" title="sun">
              <WbSunnyIcon />
            </IconButton>
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="Rain" value="Rain" name="Weather" className="custom-control-input" onChange={onWeatherClick} checked={ weatherUpdate && weatherUpdate.input === "Rain" } />
            <label className="custom-control-label" htmlFor="Rain">          
            <IconButton color="primary" aria-label="Rain" data-toggle="tooltip" data-placement="top" title="rain">
              <BeachAccessIcon />
            </IconButton>
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="Thunder" value="Thunder" name="Weather" className="custom-control-input" onChange={onWeatherClick} checked={ weatherUpdate && weatherUpdate.input === "Thunder" } />
            <label className="custom-control-label" htmlFor="Thunder">          
            <IconButton color="secondary" aria-label="Thunder" data-toggle="tooltip" data-placement="top" title="thunder" >
              <FlashOnIcon />
            </IconButton>
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="Hail" value="Hail" name="Weather" className="custom-control-input" onChange={onWeatherClick} checked={ weatherUpdate && weatherUpdate.input === "Hail" } />
            <label className="custom-control-label" htmlFor="Hail">          
            <IconButton color="secondary" aria-label="Hail" data-toggle="tooltip" data-placement="top" title="hail" >
              <GrainIcon />
            </IconButton>
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="Snow" value="Snow" name="Weather" className="custom-control-input" onChange={onWeatherClick} checked={ weatherUpdate && weatherUpdate.input === "Snow" } />
            <label className="custom-control-label" htmlFor="Snow">          
            <IconButton color="primary" aria-label="Snow" onClick={onWeatherClick} value="Snow" data-toggle="tooltip" data-placement="top" title="snow" >
              <AcUnitIcon name="Snow" />
            </IconButton>
            </label>
          </div>
        </div>


        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={hideModal}>
            Cancel
          </button>
          <button type="button" className="btn btn-danger" onClick={onLiveUpdateClick}>
            Update
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default LiveUpdate;