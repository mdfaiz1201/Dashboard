// src/App.js
import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';
import './index.css';

const App = () => (
  <div className="flex flex-1 flex-col h-screen">
    <Header />
    <div className="flex flex-1">
      <Sidebar />
      <MainContent />
    </div>
  </div>
);

export default App;
