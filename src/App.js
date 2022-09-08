<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./componantes/Home";
import Animation from "./componantes/Animation";
import Test from './componantes/Test';
import "./sass/style.scss";
import Contact from './componantes/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article:id" element={<Test/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
      
      </>
    
  );
}

export default App;
=======
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./componantes/Home";
import Animation from "./componantes/Animation";
import Test from './componantes/Test';
import "./sass/style.scss";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article:id" element={<Test/>} />
      </Routes>
      
      </>
    
  );
}

export default App;
>>>>>>> dd2bc0808bb2e5a832a07f6642df42a9f633014a
