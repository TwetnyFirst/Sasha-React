import React from 'react';
import './App.css';
import Theme from './Providers/ThemeContext';
import Title from './components/Title/Title.jsx';
import Tabs from './components/Tabs/Tabs';
import ListOfPosts from './pages/ListOfPosts/ListOfPosts';
import Header from './components/Header/Header';
import MainTemplate from './Templates/MainTemplate';
import Footer from './components/Footer/Footer';
import SelectedPost from './components/SeletedPost/SelectedPost';
import SearchPage from './pages/SearchPage/Searchpage';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

function App() {



  return (
    <>
    <Theme>
    <BrowserRouter>
      <Header></Header>
      <Tabs></Tabs>
      <Routes>
        {/* <Route path='/' element={<MainTemplate></MainTemplate>}/> */}
        <Route path='/' element={<ListOfPosts></ListOfPosts>}/>
        <Route path='/:id' element={<SelectedPost></SelectedPost>}/>
        <Route path='/SearchPage' element={<SearchPage></SearchPage>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

    </Theme>
    </>
  );
}

export default App;
