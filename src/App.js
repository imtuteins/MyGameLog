import React from 'react';
import Layout from './components/CompsLayout/Layout';
import HomeBody from './components/HomePage/homeBody';
import SearchPage from './components/SearchPage/search';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './Estilos/Styles.css';
import PageNotFound from './components/pageNotFound';
import MyLists from './components/MyListsPage/myLists';
import GameDetails from './components/GameDetails/gameDetails';
import { ModalProvider } from './components/Login_Register/ModalContext';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const isLoggedIn= true; //Por ahora en lo que se hace el formulario de log in y eso se deja por defecto true
  return (
    <ModalProvider>  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomeBody/>}/>
            <Route path="/search" element={<SearchPage/>}/>
            <Route path="/game/:gameName" element={<GameDetails/>}/>
            <Route path="*" element={<PageNotFound/>}/>
            {isLoggedIn && (
              <Route path="/mylists" element={<MyLists/>}/>
            )}
          </Route>
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;
