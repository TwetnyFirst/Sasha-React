import { useState } from 'react';
import UserName from '../UserName/UserName';
import './Header.scss';
import DropDown from '../DropDown/DropDown';
import { useNavigate } from 'react-router-dom';

function Header() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [isSearchOpen,setIsSearchOpen] = useState(false);

    const searchNav = useNavigate();



    return ( <>
    <header className='header'>

        <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className='header-left search-icon'>            
            {isDropdownOpen ? <i className="fa-solid fa-xmark my-icon"></i> : <i className="fa-solid fa-bars my-icon"></i>}
        </div>

        {/* Search */}
        {isSearchOpen === false ? null : <div className="header__search">
            <input type="text" placeholder='Search...'/>
            <i onClick={() => setIsSearchOpen(false)} className='fa-solid fa-xmark'></i>
        </div>}
        

        <div className='header-rigth'>
            <div onClick={() => isSearchOpen === false ? setIsSearchOpen(true) : searchNav('/SearchPage')} className='search-icon'>
                <i className="fa-solid fa-magnifying-glass my-icon"></i>
            </div>
            <UserName fullName='Aleksander Cilindz'></UserName>
        </div>
    </header>
    {isDropdownOpen ? <DropDown></DropDown> : null}
    </> );
}

export default Header;