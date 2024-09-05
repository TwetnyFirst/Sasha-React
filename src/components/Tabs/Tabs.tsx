import { useContext } from 'react';
import Tab from '../Tab/Tab';
import './Tabs.scss';
import { ThemeContext } from '../../Providers/ThemeContext';
import { Link } from 'react-router-dom';
function Tabs() {
    
    const [color,setColor] = useContext(ThemeContext);

    return (  
        <div className="tabs-wrap">
            <Link to='/'><Tab content='Main' tabClass={`tab-${color} active`} isDisabled={false}></Tab></Link>
            <Link to='/listOfPosts'><Tab content='ListOfPosts' tabClass={`tab-${color}`} isDisabled={false}></Tab></Link>
            
            
            <Tab content='Popular' tabClass={`tab-${color}`} isDisabled={true}></Tab>
        </div>
    );
}

export default Tabs;