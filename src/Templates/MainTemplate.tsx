import './MainTemplate.scss';
import Header from '../components/Header/Header';
import Tabs from '../components/Tabs/Tabs';
import Title from '../components/Title/Title';
import Footer from '../components/Footer/Footer';

function MainTemplate() {
    return ( 
        <>
        <div className="container">
            <div className="back-button-dark-theme">Back to home</div>
            <div className="title-dark-theme"> <Title content='Sing In'></Title> </div>
            <div className="template-body-dark-theme">Template Body</div>
        </div>
        </>
     );
}

export default MainTemplate;