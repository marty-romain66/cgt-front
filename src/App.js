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
      <Route path="/article" element={<Test/>} />
      </Routes>
      
      </>
    
  );
}

export default App;
