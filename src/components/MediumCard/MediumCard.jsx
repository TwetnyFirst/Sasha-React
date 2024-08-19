
import { useState } from 'react';
import {data} from '../../data.ts';
import './MediumCard.scss';

function MediumCard({content}) {

    const [like,setLike] = useState("fa-regular fa-thumbs-up");
    const [dislike,setDislike] = useState("fa-regular fa-thumbs-down");
    const [save,setSave] = useState("fa-regular fa-bookmark");

    return ( 
        <div className="mediumCard-wrap">
            <div className="card__main">
                    <div className="card__img-wrap">
                        <img src={content.image} alt="img"/>
                    </div>
                    <div className="main__date">{content.date}</div>
                    <h3 className="main__title">{content.title}</h3>
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

export default MediumCard;