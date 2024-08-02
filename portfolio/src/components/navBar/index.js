import React, { useState } from 'react';
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './style.css'; // Ensure to import the CSS

const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'ABOUT ME',
        to: '/about'
    },
    {
        label: 'SKILLS',
        to: '/skills'
    },
    {
        label: 'RESUME',
        to: '/resume'
    },
    {
        label: 'PORTFOLIO',
        to: '/portfolio'
    },
    {
        label: 'CONTACT',
        to: '/contact'
    }
];

const Navbar = () => {
    const [ToggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!ToggleIcon);
    }

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar__container'>
                    <Link to={'/'} className="navbar__container__logo">
                        <FaReact size={30} /> <span>CyberPortfolio</span>
                    </Link>
                    <div className='nav-icon' onClick={handleToggleIcon}>
                        {ToggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
                    </div>
                </div>
                <ul className={`navbar__container__menu ${ToggleIcon ? 'active' : ''}`}>
                    {data.map((item, key) => (
                        <li key={key} className='navbar__container__menu__item'>
                            <Link className='navbar__container__menu__item__links' to={item.to}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
