import Tab from '../Tab/Tab';
import './Tabs.scss';
function Tabs() {

    return (  
        <div className="tabs-wrap">
            <Tab content='All' tabClass='tab active' isDisabled={false}></Tab>
            <Tab content='My favorites' tabClass='tab' isDisabled={false}></Tab>
            <Tab content='Popular' tabClass='tab' isDisabled={true}></Tab>
        </div>
    );
}

export default Tabs;