import React, { Component } from 'react';

class WeatherDisplay extends Component {

     //get current date
     dateBuilder = (d) => {
         let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
         let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

         let day = days[d.getDay()];
         let date = d.getDate();
         let month = months[d.getMonth()];
         let year = d.getFullYear();

         return `${day} ${month} ${date}, ${year}`;
     }

    render() { 
        // const { weather } = this.props;
        return (
            //weather display (location, date, temp, weather descriptor)
            <div>
                <div className="location-box">
                    <div className='location'>{this.props.weather.name}, {this.props.weather.sys.country}</div>
                    <div className='date'>{this.dateBuilder(new Date())}</div>
                </div>
                <div className='weather-box'>
                    <div className='temp'>{Math.round(this.props.weather.main.temp)}°c</div>
                    <div className='weather'>{this.props.weather.weather[0].main}</div>
                </div>
            </div>
        );
    }
}
 
export default WeatherDisplay;