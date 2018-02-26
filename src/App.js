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
   
  render(){
      let concerts = this.state.concerts
      return (
        <div>
          {concerts.map((aConcert, i)=> 
            <div key={i}>
            <div>{aConcert.name}</div>
            <div>{aConcert.eventDateName}</div>
            </div>)}
        </div>
      );
  }
}


export default App;
