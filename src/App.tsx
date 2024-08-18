import React from 'react';
import './App.css';
import Title from './components/Title/Title.jsx';
import Tabs from './components/Tabs/Tabs';
import BigCard from './components/BigCard/BigCard';
import MediumCard from './components/MediumCard/MediumCard'
import SmallCard from './components/SmallCard/SmallCard';
import ListOfPosts from './pages/ListOfPosts/ListOfPosts';

function App() {
  return (
    <>
    <Tabs></Tabs> 
    <Title content='Sing In' ></Title>
    {/* <BigCard></BigCard>
    <MediumCard></MediumCard>
    <SmallCard></SmallCard> */}
    <ListOfPosts></ListOfPosts>
    </>
  );
}

export default App;
