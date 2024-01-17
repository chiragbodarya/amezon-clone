import React from 'react'
import "../css/Header.css"
import { BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import Logo from "../Assets/Img/logo.png";
import { NavLink } from 'react-router-dom';
import { useStateValue } from './StateProvider';

const Header = () => {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='header'>
            <NavLink to='/'>
                <img src={Logo} alt="logo" className='header_logo' />
            </NavLink>
            <div className="header_search">
                <input type="text" className='header_searchInput' />
                <BiSearch className='header_searchIcon' />
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className='header_optionLineOne'>Hello</span>
                    <span className='header_optionLineTwo'>Sign in</span>
                </div>
                <div className="header_option">
                    <span className='header_optionLineOne'>Return</span>
                    <span className='header_optionLineTwo'>& Orders</span>
                </div>
                <div className="header_option">
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>
                <NavLink to='/checkout'>
                    <div className="header_optionBasket">
                        <FiShoppingCart className='header_backetIcon' />
                        <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Header
