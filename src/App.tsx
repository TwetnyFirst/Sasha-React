import React from 'react';
import './App.css';
import Title from './components/Title/Title.jsx';
import Tabs from './components/Tabs/Tabs';
import ListOfPosts from './pages/ListOfPosts/ListOfPosts';
import Header from './components/Header/Header';
import MainTemplate from './Templates/MainTemplate';
import Footer from './components/Footer/Footer';
import SelectedPost from './components/SeletedPost/SelectedPost';
import ThemeContext from './Providers/ThemeContext';

function App() {

  

  return (
    <>
    <ThemeContext>
    <Header></Header>
    <div className="container">
      
      <div className="title"> <Title content='Sing In'></Title> </div>
      <div className="tabs"> <Tabs></Tabs> </div>
      <ListOfPosts></ListOfPosts>
      {/* <SelectedPost></SelectedPost> */}
      <Footer></Footer>
    </div>

    {/* <MainTemplate></MainTemplate> */}
    </ThemeContext>
    </>
  );
}

export default App;
