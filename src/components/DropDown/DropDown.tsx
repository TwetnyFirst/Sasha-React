import {useContext} from 'react';
import './DropDown.scss';
import {ThemeContext} from '../../Providers/ThemeContext';

function DropDown() {

    const [color,setColor] = useContext(ThemeContext);

    const root = document.getElementById('root');

    return ( <>
        <div className={`dropdown-${color}`}>
            <div className='dropdown-item'>Home</div>
            <div className='dropdown-item'>
                <div onClick={() => {
                    setColor('light')
                    root?.classList.remove('root-dark');
                    root?.classList.add('root-light');
                    console.log(root);
                    }
                    } className='dropdown-item-icon'>
                    <i className="fa-regular fa-sun dropdown-icon"></i>
                </div>
                <div onClick={() => {
                    setColor('dark')
                    root?.classList.remove('root-light');
                    root?.classList.add('root-dark');
                    console.log(root);

                    }} className='dropdown-item-icon'>
                    <i className="fa-regular fa-moon dropdown-icon"></i>
                </div>
            </div>
        </div>
    </> );
}

export default DropDown;