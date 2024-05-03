import './App.css';
import React from 'react';
import {BrowserRouter, Route,Routes, Link} from 'react-router-dom'
import { Regular } from './pages/Regular';
import { HomePage } from './pages/HomePage';
import { Hot } from './pages/Hot';
import { Mem } from './component/Mem';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Mem servis</h1>
       <ul>
        <li><Link to="/">Home page</Link></li>
        <li><Link to="/regular">Regular</Link></li>
        <li><Link to="/hot">Hot</Link></li>
      </ul>
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/regular" element={<Regular/>}/>
  <Route path="/hot" element={<Hot/>}/>
</Routes>
    </div>
    <div>
      <Regular/>
    </div>

    </BrowserRouter>
  
  );
}

export default App;
