import './ListOfPosts.scss';
import BigCard from '../../components/BigCard/BigCard';
import MediumCard from '../../components/MediumCard/MediumCard';
import SmallCard from '../../components/SmallCard/SmallCard';
import {data} from '../../data.ts'

function ListOfPosts() {
    return ( 
        <section className="listOfPosts">
            <div className="pages__left">
                <BigCard content={data[0]} text='test'></BigCard>
                <div className="mediumCards-wrap">
                    <div className="mediumCard">
                        <MediumCard content={data[1]}></MediumCard>
                    </div>
                    <div className="mediumCard">
                        <MediumCard content={data[2]}></MediumCard>
                    </div>
                    <div className="mediumCard">
                        <MediumCard content={data[3]}></MediumCard>
                    </div>
                    <div className="mediumCard">
                        <MediumCard content={data[4]}></MediumCard>
                    </div>
                </div>
            </div>
            <div className="pages__right">
                <div className="right__item">
                    <SmallCard content={data[5]}></SmallCard>
                </div>
                <div className="right__item">
                    <SmallCard content={data[6]}></SmallCard>
                </div>
                <div className="right__item">
                    <SmallCard content={data[7]}></SmallCard>
                </div>
                <div className="right__item">
                    <SmallCard content={data[8]}></SmallCard>
                </div>
                <div className="right__item">
                    <SmallCard content={data[9]}></SmallCard>
                </div>
                <div className="right__item">
                    <SmallCard content={data[10]}></SmallCard>
                </div>
            </div>
        </section>
     );
}

export default ListOfPosts;