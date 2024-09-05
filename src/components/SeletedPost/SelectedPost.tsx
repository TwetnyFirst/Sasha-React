import { useEffect, useState,useContext} from 'react';
import './SelectedPost.css';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../Providers/ThemeContext';

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

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(response => response.json())
        .then(json => setPost(json))
    });

    return ( <>
        {post === null || post === undefined  ? <div></div> : <div className='container'>
            <div className={`container-title-${color}`}>{post.title}</div>
            <img src={post.url} alt='photo' className='container-photo'/>
            <div className={`container-desription-${color}`}>{'This is discription '.repeat(20)}</div>
        </div>}
    </> );
}
export default SelectedPost;