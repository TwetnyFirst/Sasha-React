import React from 'react';
import './App.css';
import Title from './components/Title/Title.jsx';
import Tabs from './components/Tabs/Tabs';
import ListOfPosts from './pages/ListOfPosts/ListOfPosts';
import Header from './components/Header/Header';
import MainTemplate from './Templates/MainTemplate';

function App() {
  return (
    <>
    {/* <Header></Header>
    <div className="container">
      
      <div className="title"> <Title content='Sing In'></Title> </div>
      <div className="tabs"> <Tabs></Tabs> </div>
      <ListOfPosts></ListOfPosts>
    </div> */}

    <MainTemplate></MainTemplate>
    
    </>
  );
}

export default App;
