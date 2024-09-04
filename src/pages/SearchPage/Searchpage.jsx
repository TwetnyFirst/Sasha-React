import './SearchPage.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Title from '../../components/Title/Title';
import SmallCard from '../../components/SmallCard/SmallCard';
import {data} from '../../data.ts';


function SearchPage() {
    return ( 
        <>
        <Header></Header>
        

        <div className="container">

        <div className="title"><Title content='Search Page'></Title></div>

        
        <div className="serch-item"><SmallCard content={data[0]}></SmallCard></div>
        <div className="serch-item"><SmallCard content={data[0]}></SmallCard></div>
        <div className="serch-item"><SmallCard content={data[0]}></SmallCard></div>
        <div className="serch-item"><SmallCard content={data[0]}></SmallCard></div>
        <div className="serch-item"><SmallCard content={data[0]}></SmallCard></div>


        <Footer></Footer>

        </div>
        </>
     );
}

export default SearchPage;