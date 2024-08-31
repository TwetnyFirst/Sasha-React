import { useEffect, useState } from 'react';
import './SelectedPost.css';

// let data = {
//     "id": 1,
//     "image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png",
//     "text": "фыв",
//     "date": "2021-10-06",
//     "lesson_num": 123,
//     "title": "фывфывфыв",
//     "description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
//     "author": 7
//   }

function SelectedPost() {

    const [data,setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => setData(json))
    });

    return ( <>
        <div className='container'>
            {data.length === 0 ? <><div>no Data</div></> : <>{data.map((item: any) => {
                return(
                    <>
                    <div className='container-title dark-title'>{item.title}</div>
                    <img src={item.url} alt='photo' className='container-photo'/>
                    <div className='container-desription'>{item.description}</div>
                    </>
            )
            },)}</> }
            
        </div>
    </> );
}

export default SelectedPost;