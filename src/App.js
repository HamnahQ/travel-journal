import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Entry from './components/Entry';
import data from './data';

function App() {
  const locs = data.map(item => {
    return (
      <Entry
      key = {item.id}
      item = {item}
      />

    )
  })

  return (
    <div>
      <Navbar/>
      {locs}

    </div>
   
   
  );
}

export default App;
