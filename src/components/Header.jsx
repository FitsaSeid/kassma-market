import React from 'react'
import logo from '../assets/images/starLogo.png'
import menuIcon from '../assets/images/menu.png'
function Header() {
    return (
        <nav>
            <div className='nav'>
                <img className="nav__logo" src={logo} alt="" />
                <div className='nav__links'>
                    <a href="">Categories</a>
                    <a href="">New Products</a>
                    <a href="">About us</a>
                </div>
                <div className='nav__personal__menus'>
                    <a href="">Sign in</a>
                    <a href="">cart</a>
                </div>
                <a className="nav__menu" href=""><img className='nav__menu__icon' src={menuIcon} alt="menu" /></a>

            </div>
        </nav>
    )
}

export default Header