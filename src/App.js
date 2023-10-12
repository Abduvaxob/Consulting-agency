import React from 'react'
import { useEffect, useState } from 'react';
import { GlobalStyle } from "./globalStyles";
import Header from './Components/Header';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Corona from './Pages/Corona';
import Events from './Pages/Events';
import Language from '../src/Elements/Language.json';
import Connect from './Pages/Connect';



function App() { 
const [language,setLanguage] = useState("uz")
const [content,setContent] = useState({})

const handleChange = (event) => {
  setLanguage(event.target.value)
}

useEffect(() => {
  if(language === "uz") {
    setContent(Language.uz)
  }
  else if(language === "deutsch"){
    setContent(Language.deutsch)
  }
  else if(language === "english"){
    setContent(Language.english)
  }
})


  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle />
        <Header language={language} content={content} handleChange={handleChange} />
        <Routes>
          <Route exact path='/' element={<Home content={content} />} />
          <Route path='/blog' element={<Blog content={content}/>} />
          <Route path='/corona' element={<Corona content={content}/>} />
          <Route path='/events' element={<Events content={content}/>} />
          <Route path='/connect' element={<Connect />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;;
