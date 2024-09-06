import './MainTemplate.scss';
import Header from '../components/Header/Header';
import Tabs from '../components/Tabs/Tabs';
import Title from '../components/Title/Title';
import Footer from '../components/Footer/Footer';
import { useContext } from 'react';
import { ThemeContext } from '../Providers/ThemeContext';

function MainTemplate() {

    const[color,setColor] = useContext(ThemeContext);
    return ( 
        <>
        <div className="container">
            <div className={`back-button-${color}-theme`}>Back to home</div>
            <div className={`title-${color}-theme`}> <Title content='Sing In'></Title> </div>
            <div className={`template-body-${color}-theme`}>Template Body</div>
        </div>
        </>
     );
}

export default MainTemplate;