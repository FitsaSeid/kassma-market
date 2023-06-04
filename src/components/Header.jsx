import React from 'react'
import logo from '../assets/images/starLogo.png'
import menuIcon from '../assets/images/menu.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Header() {
    // const numOfCartItem = useSelector
    return (
        <nav>
            <div className='nav'>
                <Link to="/">
                    <img className="nav__logo" src={logo} alt="" />
                </Link>
                <div className='nav__links'>
                    <Link to="">Categories</Link>
                    <Link to="/products">Products</Link>
                    <Link to="">About us</Link>
                </div>
                <div className='nav__personal__menus'>
                    <Link to="">Sign in</Link>
                    <Link to="/cart">cart</Link>
                </div>
                <Link className="nav__menu" to=""><img className='nav__menu__icon' src={menuIcon} alt="menu" /></Link>

            </div>
        </nav>
    )
}

export default Header