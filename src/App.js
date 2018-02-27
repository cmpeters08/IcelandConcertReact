import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = { concerts: [] }
  }
  
  componentWillMount(){
  fetch('http://apis.is/concerts')
   .then( responce => responce.json() )
   .then( ({results: concerts}) => this.setState({concerts}))
  }
  
  filter = (event) => {
    this.setState({filter: event.target.value.toLowerCase()})
  }

  stuffToFilter = (concert) =>{
    if(concert.eventDateName.toLowerCase().includes(this.state.filter)){
      return true;
    }
    if(concert.name.toLowerCase().includes(this.state.filter)){
      return true;
    }
    if(concert.eventDateName.toLowerCase().includes(this.state.filter)){
      return true;
    }
    if(concert.eventHallName.toLowerCase().includes(this.state.filter)){
      return true;
    }
    return false;
  }

  render(){
      let concerts = this.state.concerts;
      if(this.state.filter){
        concerts = concerts.filter(concert => this.stuffToFilter(concert))
      }

      return (
        <div>
          <h1>Concerts in Iceland</h1>
          Search:
          <input type="text" onChange={this.filter}/>
            {concerts.map((aConcert, i)=> 
            <div className="anEvent"key={i}>
            <img alt="event" src={aConcert.imageSource}></img>
            <div>Date and Time: {aConcert.dateOfShow}</div>
            <div>{aConcert.eventDateName}</div>
            <div>Venue: {aConcert.eventHallName}</div>
            <div>Notes: {aConcert.name}</div>
            </div>)}
        </div>
      )
  }
}

export default App;
