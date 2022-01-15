import React, { Component } from 'react';

const api = {
    key: process.env.REACT_APP_API_KEY,
    base: "https://api.openweathermap.org/data/2.5/"
}

class Search extends Component {
    state = { 
        query: ''
     }

     //get api response
     search = evt => {
        if (evt.key === 'Enter'){
            fetch(`${api.base}weather?q=${this.state.query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                // setWeather(result); PASS IN PROPS??
                this.setState({query: ''});
                console.log(result);
            });
        }
     }

     //update query variable when there is a change in search bar input
     handleSearchChange (e) {
         this.setState({query: e.target.value});
     }

    render() { 
        return (
            //search box
            <div className='search-box'>
                <input
                type='text'
                className='search-bar'
                placeholder='Search...'
                onChange={(e) => {this.handleSearchChange(e)}}
                value={this.state.query}
                onKeyPress={this.search}
                />
            </div>
        );
    }
}
 
export default Search;