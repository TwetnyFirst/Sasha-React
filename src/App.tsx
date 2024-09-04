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

function App() {

  

  return (
    <>
    <Theme>
    <Header></Header>
    <div className="container">
      <div className="title"> <Title content='Sing In'></Title> </div>
      <div className="tabs"> <Tabs></Tabs> </div>
      <ListOfPosts></ListOfPosts>
      <Footer></Footer>
    </div>
    <SearchPage></SearchPage>
    </Theme>
    </>
  );
}

export default App;
