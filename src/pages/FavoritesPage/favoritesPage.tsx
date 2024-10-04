import { useSelector } from "react-redux";
import MediumCard from "../../components/MediumCard/MediumCard";
import { useState } from "react";

function FavoritesPage() {


    const postsArr = useSelector((state:any) => state.posts);


    return ( 
    <>
    {postsArr.favorites.map((item:any) => {<><MediumCard content={item}></MediumCard></>})}
    </> );
}

export default FavoritesPage;