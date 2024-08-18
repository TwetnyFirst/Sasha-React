
import { useState } from 'react';
import {data} from '../../data.ts';
import './SmallCard.scss';

function SmallCard() {

    const [like,setLike] = useState("fa-regular fa-thumbs-up");
    const [dislike,setDislike] = useState("fa-regular fa-thumbs-down");
    const [save,setSave] = useState("fa-regular fa-bookmark");

    return ( 
        <div className="smallCard-wrap">
            <div className="card__main">
                <div className="main__left">
                    <div className="main__left__date">{data.date}</div>
                    <h3 className="main__left__title">{data.title}</h3>
                </div>
                <div className="main__right">
                    <div className="card__img-wrap">
                        <img src={data.image} alt="img"/>
                    </div>
                </div>
            </div>
            <div className="card__social">
                <div className="card__social__left">
                    <i 
                    onClick={() => setLike(like === "fa-regular fa-thumbs-up" ? "fa-solid fa-thumbs-up" : "fa-regular fa-thumbs-up" )} 
                    className={like}></i>
                    <i onClick={() => setDislike(dislike === "fa-regular fa-thumbs-down" ? "fa-solid fa-thumbs-down" : "fa-regular fa-thumbs-down" )} className={dislike}></i>
                </div>
                <div className="card__social__right">
                    <i onClick={() => setSave(save === "fa-regular fa-bookmark" ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark" )} className={save}></i>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>
            </div>
        </div>
     );
}

export default SmallCard;