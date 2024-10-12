import React from 'react';
import Layout from './components/CompsLayout/Layout';
import HomeBody from './components/HomePage/homeBody';
import SearchPage from './components/SearchPage/search';
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom';
import './Styles.css';
import PageNotFound from './components/pageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomeBody/>}/>
          <Route path="search" element={<SearchPage/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
