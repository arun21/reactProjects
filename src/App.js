import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
       <Header/>
       <Menu/>
       <Footer/>
       </div>
    );
  }
}
