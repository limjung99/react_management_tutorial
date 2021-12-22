import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component {
  render(){
    return (
      <div className="gray-background">
        <img src={logo} lat='logo' />
        <h2>Let's develop management system!</h2>
      </div>
    );
  }
}

export default App;
