// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <App/>
//       </div>
//   );
// }
// export default App;



// import './mp.css';
// import './rp.css';
// import Mainpage from './mp'
// import Returnpage from './rp'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// function App() {
// return(
// <Router>
// <div className='App'>
// <Routes>
// <Route exact path='/' element={<Mainpage />}></Route>
// <Route exact path='/mp' element={<Mainpage />}></Route>
// <Route exact path='/rp' element={<Returnpage />}></Route>
// </Routes>
// </div>
// </Router>
// )
// }
// export default App


import './App.css';
import * as React from 'react';
import Home from './home';
import {BrowserRouter} from "react-router-dom"



function App() {
  return (
   <div>
   <BrowserRouter>
   <Home />
   </BrowserRouter>
   </div>
   
   
  );
}

export default App;