import React, { Component } from 'react';

const api = {
    key: process.env.REACT_APP_API_KEY,
    base: "https://api.openweathermap.org/data/2.5/"
}

class Search extends Component {
     //get api response
     search = evt => {
        if (evt.key === 'Enter'){
            fetch(`${api.base}weather?q=${this.props.query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                this.props.onSearch(result);
                // this.setState({query: ''});
                console.log(result);
            });
        }
     }

     //update query when there is a change in search bar input
     handleChange(e) {
         this.props.onChange(e.target.value);
     }

    render() { 
        // const { onChange, query } = this.props;
        return (
            //search box
            <div className='search-box'>
                <input
                type='text'
                className='search-bar'
                placeholder='Search...'
                onChange={(e) => {this.handleChange(e)}}
                value={this.props.query}
                onKeyPress={this.search}
                />
            </div>
        );
    }
}
 
export default Search;