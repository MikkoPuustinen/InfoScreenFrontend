import React, { useState, useEffect } from 'react';

import './App.css';


const View = () => {
  return (
    <div className='View'>
      <p>meeting</p>
    </div>
  )

}

const Sidebar = () => {

  return (
    <div className='Sidebar'>
      <p>side</p>
    </div>
  )
}


function App() {
  const [meetings, setMeetings] = useState([])

  useEffect(() => {
    fetch('./build-front/data/meetings.json')
      .then(r => r.json())
      .then(function(d) {
        setMeetings(d)
      } )
  })
  
  
  return (
    <div className="App">
      <View></View>
      <Sidebar></Sidebar>
      
    </div>
  );
}

export default App;
