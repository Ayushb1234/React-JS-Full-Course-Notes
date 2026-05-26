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


// import { useState } from 'react';
// // import Skill from "./components/map&list";
// // import Fetch from "./components/userfetchapp";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// // import { Welcome, Profile } from './components/profile';


// function App() {

//   // const [count,setCount] = useState(0);
//   // const [name,setName] = useState("");
//   // const [role,setRole] = useState("");

//     return (
//         <div>
//             {/* <Welcome />

//             <Profile Name="Ayush" Role="AI Engineer" />
//             <Profile Name="Rahul" Role="Backend Developer" />
//             <Profile Name="Sneha" Role="Data Scientist" /> */}

//             {/* <h2>{count}</h2> */}

//             {/* <button onClick={() =>  setCount(count + 1)}> Increase </button>
//             <button onClick={() => { if (count > 0){
//                 setCount(count - 1);
//             }
//             }}> Decrease </button>
//             <button onClick={() => setCount(0)}> Reset </button> */}

//             {/* <input type="text" value={name} placeholder='Enter Name:' onChange={(e) => { setName(e.target.value); setCount(count+1)}} />

//             <br />
//             <br />


//             <input type="text"  value={role} placeholder='Enter Role:' onChange={(e) => {setRole(e.target.value); setCount(count+1)}} />

//              <h3>Name: {name}</h3>
//             <h3>Character Count: {name.length}</h3>

//             <h3>Role: {role}</h3>
//             <h3> ROLE Character Count: {role.length}</h3> */}

//             {/* <Skill /> */}
//             {/* <Fetch /> */}

//             <nav>

//                 <Link to={"/"}>Home</Link>

//                 <br />

//                 <Link to={"/about"}>About</Link>

//                 <br />

//                 <Link to={"/contact"}>Contact</Link>


//             </nav>

//             <Routes>

//                 <Route path='/' element={<Home />} />

//                 <Route path='/about' element={<About />} />

//                 <Route path ='/contact' element={<Contact />} />

//             </Routes>
            
            


//         </div>
//     );
// }

// export default App;




// import { Link, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <div>
//       <nav>
//         <Link to="/">Home</Link>
//         <br />
//         <Link to="/about">About</Link>
//         <br />
//         <Link to="/contact">Contact</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import ThemeProvider from "./context/ThemeContext";

function App() {

  return (

    <ThemeProvider>

      <Navbar />

      <Home />

    </ThemeProvider>

  );
}

export default App;
