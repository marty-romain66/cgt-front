import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./componantes/Home";
import Animation from "./componantes/Animation";
import Test from './componantes/Test';
import "./sass/style.scss";
import Contact from './componantes/Contact';
import Manif from './componantes/Manif';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article:id" element={<Test/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/manif" element={<Manif/>} />
      </Routes>
      
      </>
    
  );
}

export default App;
