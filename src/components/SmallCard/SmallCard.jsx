
import { useState } from 'react';
import './SmallCard.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addToFavorites} from '../../slice/posts'

function SmallCard({content}) {

    const [like,setLike] = useState("fa-regular fa-thumbs-up");
    const [dislike,setDislike] = useState("fa-regular fa-thumbs-down");
    const [save,setSave] = useState("fa-regular fa-bookmark");

    const dispatch = useDispatch();

    function HandleClickSave(){
        dispatch(addToFavorites(content.id));
        setSave(save === "fa-regular fa-bookmark" ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark" );
    }
    return ( 
        <div className="smallCard-wrap">
            <Link key={content.id} to={`/${content.id}`}>
            <div className="card__main">
                <div className="main__left">
                    <div className="main__left__date">{content.id}</div>
                    <h3 className="main__left__title">{content.title}</h3>
                </div>
                <div className="main__right">
                    <div className="card__img-wrap">
                        <img src={content.url} alt="img"/>
                    </div>
                </div>
            </div>
            </Link>
            <div className="card__social">
                <div className="card__social__left">
                    <i 
                    onClick={() => setLike(like === "fa-regular fa-thumbs-up" ? "fa-solid fa-thumbs-up" : "fa-regular fa-thumbs-up" )} 
                    className={like}></i>
                    <i onClick={() => setDislike(dislike === "fa-regular fa-thumbs-down" ? "fa-solid fa-thumbs-down" : "fa-regular fa-thumbs-down" )} className={dislike}></i>
                </div>
                <div className="card__social__right">
                    <i onClick={HandleClickSave} className={save}></i>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>
            </div>
        </div>
     );
}

export default SmallCard;