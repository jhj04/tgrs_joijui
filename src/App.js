// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, {useEffect, useRef} from "react";
import{BrowserRouter, Route, Routes}from "react-router-dom";

import HomeView from "./views/HomeView";
import lenis from "./utils/smooth";
import link from "./utils/link";

const App = () => {
    useEffect(() => {
        lenis();
        link();
    }, []);
    return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomeView />} />
      </Routes>
  </BrowserRouter>
  );
};

export default App;