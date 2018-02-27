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
  
  filter(event){
    this.setState({filter: event.target.value})
  }

  render(){
      let concerts = this.state.concerts;
      if(this.state.filter){
        concerts = concerts.filter(concert => concert.eventDateName.toLowerCase()
        .includes(this.state.filter.toLowerCase()))
      }

      return (
        <div>
          <input type="text" onChange={this.filter.bind(this)}/>
            {concerts.map((aConcert, i)=> 
            <div key={i}>
            <img src={aConcert.imageSource}></img>
            <div>{aConcert.dateOfShow}</div>
            <div>{aConcert.name}</div>
            <div>{aConcert.eventDateName}</div>
            <div>{aConcert.eventHallName}</div>
            </div>)} 
        </div>
      )
  }
}

export default App;
