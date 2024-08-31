import { useContext } from 'react';
import Tab from '../Tab/Tab';
import './Tabs.scss';
import { ThemeContext } from '../../Providers/ThemeContext';
function Tabs() {
    
    const [color,setColor] = useContext(ThemeContext);

    return (  
        <div className="tabs-wrap">
            <Tab content='All' tabClass={`tab-${color} active`} isDisabled={false}></Tab>
            <Tab content='My favorites' tabClass={`tab-${color}`} isDisabled={false}></Tab>
            <Tab content='Popular' tabClass={`tab-${color}`} isDisabled={true}></Tab>
        </div>
    );
}

export default Tabs;