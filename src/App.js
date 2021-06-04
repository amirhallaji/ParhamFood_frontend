import './App.css';
import { Component } from 'react';


import {HomePage} from './components/homepage/homepage.component';


class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }



  render() {
    return (
      <div className='App-header'>
        <HomePage></HomePage>
      </div>
    )
  }

}



export default App;
