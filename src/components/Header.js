import React, { Component } from 'react';
import logo from './../logo.svg';
import './../styles/Header.css';
export default class Header extends Component{
    render(){
        return (
            <div className="App">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>The Library</h2>
              </div>
            </div>
        );
    }
}
