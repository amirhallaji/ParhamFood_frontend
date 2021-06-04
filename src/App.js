import './App.css';
import 'antd/dist/antd.css';
import { Component } from 'react';


import { HomePage } from './components/homepage/homepage.component';


class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }



  render() {
    return (
      <HomePage></HomePage>
    )
  }

}



export default App;
