import './ListOfPosts.scss';
import BigCard from '../../components/BigCard/BigCard';
import MediumCard from '../../components/MediumCard/MediumCard';
import SmallCard from '../../components/SmallCard/SmallCard';
import { ThemeContext } from '../../Providers/ThemeContext';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function ListOfPosts() {

const [color,setColor] = useContext(ThemeContext);

const [posts,setPosts] = useState([]);

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => setPosts(json))
});

    return ( 
        <div className="container">
        <section className={`listOfPosts-${color}`}>
            <div className="pages__left">
                {posts.length === 0 ? null : <BigCard content={posts[0]} text='test'></BigCard>}
                <div className="mediumCards-wrap">
                    {posts.length === 0 ? null : posts.map((item) => <>
                    <Link key={item.id} to={`/listOfPosts/${item.id}`}> 
                        <div className="mediumCard">
                            <MediumCard content={item}></MediumCard>
                        </div>
                    </Link>
                    </> ).slice(1,5)}
                </div>
            </div>
            <div className="pages__right">
                {posts.length === 0 ? null : posts.map((item) => <>
                    <Link key={item.id} to={`/listOfPosts/${item.id}`}> 
                        <div className="right__item">
                            <SmallCard content={item}></SmallCard>
                        </div>
                    </Link>
                </> ).slice(6,12)}
            </div>
        </section>
        </div>
     );
}

export default ListOfPosts;