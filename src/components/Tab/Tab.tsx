
import './Tab.scss';
interface ITab{
    content:string,
    tabClass:string,
    isDisabled:boolean,
}
function Tab({content,tabClass,isDisabled}:ITab) {
    return ( 
        <button className={tabClass} disabled={isDisabled} >{content}</button>
     );
}

export default Tab;