import logo from './logo.svg';
import "./sass/style.scss";
import Start from './components/Start';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import BoxCaroussel from './components/BoxCaroussel';
import Article from './components/Article';

function App() {

  return (
    <>
    <Start />
    <div className='contenerPage'>
 <Header/>
 <BoxCaroussel/>
 <Article/>
  <Footer/>
  </div>
 </>
  );
}

export default App;
