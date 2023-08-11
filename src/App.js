import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BookList from './components/BookList';
import CreateBook from './components/CreateBook';
//import UpdateBook from './components/UpdateBook';
//import Init from './components/Init';
//import Header from './components/Header';
//import Navbar from './components/navbar';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/create-book" element={<CreateBook />} />
          
          
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
