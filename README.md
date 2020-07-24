# Trail Mix Live
### A web application to share live status updates on trails.

Have you ever planned for the best weekend hike, and yet ended up arriving at the trailhead with no parking spots available? Or amid the COVID-19 pandemic, arrive at a recreation spot with too many people to practice social distancing and #RecreateResponsibly. Trail Mix Live provides an information hub where the community can share live updates on the parking status, visitors traffic, and locale weather.

Trail Mix Live was developed as a capstone project for [Ada Developers Academy](https://adadevelopersacademy.org/), a nonprofit full-stack web development program for women and gender diverse individuals in Seattle, Washington.

## App Features
-   User can search for trails in different states and search for trails nearby after enabling geolocation. 
-  User can get and post the lastest status updates on parking, visitors traffic, and weather of that trail.
-  User can subscribe to trails and receive SMS notifications in the next 24 hours if there are new status updates shared on this site.


<p align="center"> 
  <img height="400" src="https://lh3.googleusercontent.com/pw/ACtC-3d5aluy1XH5CVXu6L_voZd9Trk1WBn6UqJH7uAjQHc8WbYi10DaBPyJVNwvqXAPOxv2-A0msgX3Qaj_ZTqZsmXOKky4GXcMf9J_ChlA7GauJss3BePsHFi8ETToreR_kuqw9ilf_6eAMTNr6ZoC6GI=w682-h1396-no?authuser=0" alt="Home Page">
  <img height="400" src="https://lh3.googleusercontent.com/pw/ACtC-3d_VWo7UjrSTGMbtld1N32fXGxOJ_px6APUXC4tquWZ0fs0VJFnFkL9lGcsxfDpg1c-TMJaIR95bB2aVp6_WEF8kduqEe1op7WntJ8U1d_PwDhD1kj-4d7GRgYvq_8kO2L_oDRIDYxTQfksCQA7K6w=w676-h1396-no?authuser=0" alt="Latest Status">
  <img height="400" src="https://lh3.googleusercontent.com/pw/ACtC-3e3D0H5YJqr2I64zwoKucT7TrNLXKESvAQZVhScOCIdNIvFhiDx39rhb8DzS95MMGZfZ9tPYBmD7VpBc8FRnO1nK2TXLUDGJpZim37TxIkrFK-hyqPDt0plbI4VC780TDpD8gjsrMcwlZNq4WDXaLg=w678-h1396-no?authuser=0" alt="Receive SMS Notification">
</p>


## Technologies

  * Front End
    * [Deployed webapp](https://cojenco.github.io/trailmix-live/)
    * React 16.13.1
    * Deployed on Github Pages
    * Stored in this repository
    
  * Back End
    * [Deployed site](https://trailmix-base.wm.r.appspot.com/diamondtrails/)
    * Python 3.7.6 and Django 3.0.8 with Django Rest Framework
    * Deployed on Google Apps Engine
    * Stored in [back-end repository](https://github.com/cojenco/trailmix-be)
    
  * APIs
    * Hiking Project API
    * Quick Easy SMS API
    * Google Maps JavaScript API
    * Geolocation API
    
## Demo
Watch a video demo of the app [here](https://youtu.be/6MQidQ-K06E).
<p align="center" > 
<a href="https://youtu.be/6MQidQ-K06E" > <img height="300" src="https://lh3.googleusercontent.com/pw/ACtC-3cKCeYWbJOijVRuDGkAjN15XTRnliQNsHm3Lgu4ERO8ItD6QF_jBJfj5hjb0EzpxiQLQA79VW4fvW-5dB3RNXHe5uvXfJL_WcF-OrmE8FcuY1b-rahQmkxGjGUpPIb6e9eAaHH5b2e1Kbu4DfTMlZWR=w2520-h1390-no?authuser=0" alt="App Home Page"> </a>
</p>
    
## Installation

This responsive web app is powered by React JS. It allows easy access on your computer or mobile device.

* If this is your first time using Node.js and npm, [download Node.js](https://nodejs.org/en/).
* Clone this repository (feel free to find the dependencies in the package.json file)
* `npm install`
* `npm start` -- this will launch http://localhost:3000/ or whatever localhost your server is running on



If you want to use your own back-end, download the [back-end repository](https://github.com/cojenco/trailmix-be) and its dependencies, and deploy it to Google Apps Engine with the required environment variables. You will need to refresh the BASE_URL with your own deployed URLs.


* If this is your first time using Django, follow [Django's quick install guide](https://docs.djangoproject.com/en/3.0/intro/install/)
* If this is your first time using PostgreSQL, [download PostgreSQL](https://www.postgresql.org/download/)
* Clone [back-end repository](https://github.com/cojenco/trailmix-be)
* `pip install -r requirements.txt`
* `python manage.py runserver`
* Visit http://127.0.0.1:8000/ or whatever localhost your server is running on


## Learning Goals
- Develop a responsive web app using React
- Build an API wrapper back-end using Python and Django
- Leverage multiple external APIs and integrate with the API wrapper
- Hands-on experience deploying applications on different platforms
