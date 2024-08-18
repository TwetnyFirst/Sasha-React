import './ListOfPosts.scss';
import BigCard from '../../components/BigCard/BigCard';
import MediumCard from '../../components/MediumCard/MediumCard';
import SmallCard from '../../components/SmallCard/SmallCard';

function ListOfPosts() {
    return ( 
        <section className="listOfPosts">
            <div className="pages__left">
                <BigCard></BigCard>
                <div className="mediumCards">
                <MediumCard></MediumCard>
                <MediumCard></MediumCard>
                <MediumCard></MediumCard>
                <MediumCard></MediumCard>
                </div>
            </div>
            <div className="pages__right">
                <SmallCard className="right__page__item"></SmallCard>
                <SmallCard className="right__page__item"></SmallCard>
                <SmallCard className="right__page__item"></SmallCard>
                <SmallCard className="right__page__item"></SmallCard>
                <SmallCard className="right__page__item"></SmallCard>
                <SmallCard className="right__page__item"></SmallCard>
            </div>
        </section>
     );
}

export default ListOfPosts;