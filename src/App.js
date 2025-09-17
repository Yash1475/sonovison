// src/App.js
import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"; 
import Navbar from './Navbar';
import Home from './Home';
import SignIn from './SignIn';
import AboutUs from './About';
import Signup from './SignUp';
import SonographyBooking from './BookAppoinment';


const App = () => {
  return (
<BrowserRouter>
<Navbar/>
{/* <SonographyBooking/> */}
<Routes>
  <Route path='/home' element={<Home/>}></Route>
  <Route path='/signin' element={<SignIn/>}></Route>
  <Route path='/about' element={<AboutUs/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
  <Route path='/booking' element={<SonographyBooking/>}></Route>
</Routes>
</BrowserRouter>
    
    
  );
};





export default App;































// function App() {
//   return (
//     <div className="App">
//       {/* Navbar Section */}
//       <header>
//         <nav>
//           <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#services">SignUp</a></li>
//             <li><a href="#testimonials">SignIn</a></li>
//             <li><a href="#contact">About Us</a></li>
//           </ul>
//         </nav>
//       </header>

      

//       {/* Services Section */}
//       <section id="services" className="services">
//         <h2>Our Services</h2>
//         <div className="cards">
//           <div className="card">
//           <img src='https://img.freepik.com/free-vector/sonographer-doctor-examining-pregnant-woman-scanning-abdomen-using-ultrasound-scanner-vector-illustration-care-pregnancy-gynecology-medical-examination-concept_74855-13240.jpg' alt=''></img>
//             <h3>Abdominal Ultrasound</h3>
//             <p>High-resolution imaging for accurate results in abdominal diagnostics.</p>
//           </div>
//           <div className="card">
//           <img src='https://en.pimg.jp/098/644/698/1/98644698.jpg' alt=''></img>
//             <h3>Pregnancy Ultrasound</h3>
//             <p>Safe and detailed imaging to track pregnancy progress.</p>
//           </div>
//           <div className="card">
//           <img src='https://media.istockphoto.com/id/1399659308/vector/ultrasound-scan-and-examination-of-thyroid-glands-flat-vector-illustration-on-white.jpg?s=612x612&w=0&k=20&c=mrf6xHYLV44vh8pAg1QVJTTqoJ5yJ_cIskeHcHXb_L8=' alt=''></img>
//             <h3>Cardiac Ultrasound</h3>
//             <p>Assess heart health with non-invasive, detailed images.</p>
//           </div>
//         </div>
//       </section>

     

     

//       {/* Signup Section */}
//       <section id="signup" className="signup">
//         <h2>Thanks for visitong our website , Visit Again </h2>
//         <p>We can provide all technologies about the sonogrophy.</p>
//       </section>

//       {/* Footer Section */}
//       <footer>
//         <p>&copy; 2025 Sonography Services. All rights reserved.</p>
//       </footer>
//     </div>
    
//   );
// }

// export default App;

