// import { useState } from 'react'
// import { Welcome, Profile } from './components/profile';
// // import reactLogo from './assets/react.svg'
// // import viteLogo from './assets/vite.svg'
// // import heroImg from './assets/hero.png'
// // import './App.css'


// // const year = 2026;

// function App() {


//   return (
//       // <div className="Details">

//       //   <h1>Name: </h1>
//       //   <p>Ayush Choudhary</p>
//       //   <hr />
//       //   <h1>Role:</h1>
//       //   <p>AI Developer</p>
//       //   <hr />
//       //   <h1>Skills:</h1>

//       //   <ul>
//       //     <li>React</li>
//       //     <li>Python</li>
//       //     <li>Machine Learning</li>
//       //   </ul>

//       //   <hr />

//       //   <h1>Year:</h1>
//       //   <p>{year}</p>

//       // </div>

//       <>

//       <Welcome />
//       <Profile Name = "Ayush"  Role = "AI Engineer" />
//       <Profile Name = "Rahul"  Role = "Backend Developer" />
//       <Profile Name = "Sneha"  Role = "Data Scientist" />
      
//       </>

      
//   );
//   }


// export default App;


import { useState } from 'react';
// import { Welcome, Profile } from './components/profile';



function App() {

  const [count,setCount] = useState(0);

    return (
        <div>
            {/* <Welcome />

            <Profile Name="Ayush" Role="AI Engineer" />
            <Profile Name="Rahul" Role="Backend Developer" />
            <Profile Name="Sneha" Role="Data Scientist" /> */}

            <h2>{count}</h2>

            <button onClick={() =>  setCount(count + 1)}> Increase </button>
            <button onClick={() => { if (count > 0){
                setCount(count - 1);
            }
            }}> Decrease </button>
            <button onClick={() => setCount(0)}> Reset </button>

        </div>
    );
}

export default App;
