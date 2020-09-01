import React from 'react';

import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Banner from './components/banner';
import Welcome from './components/welcome';
import Feature from './components/feature';
import Project from './components/project';
import Terminal from './components/terminal';
import Blogs from './components/blogs';
import Footer from './components/footer';
function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Welcome/>
      <Feature/>
      <Project/>
      <Terminal/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
