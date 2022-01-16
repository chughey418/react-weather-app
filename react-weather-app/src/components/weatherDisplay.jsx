import React, { Component } from 'react';

class WeatherDisplay extends Component {
    state = { 
     } 

     //get weather result
     //...

     //get current date
     dateBuilder = (d) => {
         let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
         let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

         let day = days[d.getDay()];
         let date = d.getDate();
         let month = months[d.getMonth()];
         let year = d.getFullYear();

         return `${day} ${date} ${month} ${year}`;
     }

    render() { 
        return (
            //weather display (location, date, temp, weather descriptor)
            <div>
                <div className="location-box">
                    <div className='location'>State, Country</div>
                    <div className='date'>{this.dateBuilder(new Date())}</div>
                </div>
                <div className='weather-box'>
                    <div className='temp'>°c</div>
                    <div className='weather'>Weather Descriptor</div>
                </div>
            </div>
        );
    }
}
 
export default WeatherDisplay;