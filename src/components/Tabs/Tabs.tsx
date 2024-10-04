import { useContext } from 'react';
import Tab from '../Tab/Tab';
import './Tabs.scss';
import { ThemeContext } from '../../Providers/ThemeContext';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Tabs() {
    
    const [color,setColor] = useContext(ThemeContext);

    const activeTab = useSelector((state:any) => state.posts);

    return (  
        <div className="tabs-wrap">
            <Link to='/'><Tab active={'all'} content='Main' tabClass={`tab-${color} active`} isDisabled={false}></Tab></Link>
            <Tab active={'favorites'}  content='Favorites' tabClass={`tab-${color} active`} isDisabled={false}></Tab>
            
            
            <Tab  content='Popular' tabClass={`tab-${color}`} isDisabled={true}></Tab>
        </div>
    );
}

export default Tabs;