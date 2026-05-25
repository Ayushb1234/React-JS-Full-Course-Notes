import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'


const year = 2026;

function App() {


  return (
      <div className="Details">

        <h1>Name: </h1>
        <p>Ayush Choudhary</p>
        <hr />
        <h1>Role:</h1>
        <p>AI Developer</p>
        <hr />
        <h1>Skills:</h1>

        <ul>
          <li>React</li>
          <li>Python</li>
          <li>Machine Learning</li>
        </ul>

        <hr />

        <h1>Year:</h1>
        <p>{year}</p>

      </div>

      
  );
  }


export default App
