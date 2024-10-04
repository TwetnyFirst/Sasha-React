import { useEffect, useState,useContext} from 'react';
import './SelectedPost.css';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../Providers/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOnePost } from '../../slice/posts';

type TData = {
    albumId: number,
    id:number,
    thumbnaiUrl:string,
    title:string,
    url:string
}

function SelectedPost() {

    const [post , setPost] = useState<null | TData >();

    const [color,setColor] = useContext(ThemeContext);

    const {id} = useParams();

    const dispatch = useDispatch();
    const posts = useSelector((state:any) => state.posts);

    useEffect(() => {
        // fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        // .then(response => response.json())
        // .then(json => setPost(json))
        dispatch<any>(fetchOnePost(id))
    },[]);

    return ( <>
        {posts.selectedPost === null || posts.selectedPost === undefined  ? <div></div> : <div className='container'>
            <div className={`container-title-${color}`}>{posts.selectedPost.title}</div>
            <img src={posts.selectedPost.url} alt='photo' className='container-photo'/>
            <div className={`container-desription-${color}`}>{'This is discription '.repeat(20)}</div>
        </div>}
    </> );
}
export default SelectedPost;