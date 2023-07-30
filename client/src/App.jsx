import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Quiz from './pages/Quiz';
import Merchs from "./pages/Merchs";
import NoPage from "./pages/NoPage";
import Article from './pages/Article';
import ArticleDetail from './Component/Articles/Article Details/ArticleDetail';
import Footer from './Component/Footer';


function App() {


  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/article' element={<Article />} />
        <Route path='/articledetail' element={<ArticleDetail />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/merchs" element={<Merchs />} />
        <Route path="*" element={<NoPage />} />
      
    </Routes>
  <Footer/>
  </BrowserRouter>
  )
}

export default App
