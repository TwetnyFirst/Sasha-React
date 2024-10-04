import './ListOfPosts.scss';
import BigCard from '../../components/BigCard/BigCard';
import MediumCard from '../../components/MediumCard/MediumCard';
import SmallCard from '../../components/SmallCard/SmallCard';
import { ThemeContext } from '../../Providers/ThemeContext';
import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../../slice/posts'; 
import { fetchPosts } from '../../slice/posts';

function ListOfPosts() {

const [color,setColor] = useContext(ThemeContext);

const [posts,setPosts] = useState([]);

const dispatch = useDispatch();

let postsArr = useSelector((state) => state.posts);

useEffect(() => {

    dispatch(fetchPosts());
},[dispatch]);



    return ( 
        <div className="container">
        {postsArr.activeTab === 'all' 
        ? <section className={`listOfPosts-${color}`}>
        <div className="pages__left">
            {postsArr.posts.length !== 0 ? <BigCard key={postsArr.posts[0].id} content={postsArr.posts[0]} text='test'></BigCard> : null}
            <div className="mediumCards-wrap">
                {postsArr.posts.length === 0 ? null : postsArr.posts.map((item) => 
                <>
                <div className="mediumCard">
                    <MediumCard content={item}></MediumCard>
                </div>
                </> ).slice(1,5)}
            </div>
        </div>
        <div className="pages__right">
            {postsArr.posts.length === 0 ? null : postsArr.posts.map((item) => 
            <>
            <div className="right__item">
                <SmallCard content={item}></SmallCard>
            </div>
            </> ).slice(6,12)}
        </div>
    </section>
        : postsArr.favorites.map((item) => <MediumCard content={item}></MediumCard> ) }
        


        </div>
     );
}

export default ListOfPosts;