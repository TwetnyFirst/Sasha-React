
import { useSelector } from 'react-redux';
import './Tab.scss';
import { setActiveTab } from '../../slice/posts';
import { useDispatch } from 'react-redux';


interface ITab{
    active?:string,
    content:string,
    tabClass:string,
    isDisabled:boolean,
}
function Tab({active,content,tabClass,isDisabled}:ITab) {

    const dispatch = useDispatch();

    return ( 
        <button onClick={() => dispatch(setActiveTab<any>(active))} className={tabClass} disabled={isDisabled} >{content}</button>
     );
}

export default Tab;