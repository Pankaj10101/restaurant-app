import React from 'react'
import './Header.Module.css'
import HeaderCart from './HeaderCart'
import mealsImg from '../../Assets/meals.jpg'
const Header = (props) => {
  return (
    <>
        <header className='head-wrap'>
        <h2 >MealsHouse</h2>
        <HeaderCart onClick={props.onShowCart}/>
        </header>
        <div className='main-image'>
            <img src={mealsImg} alt='headerImg'/>
        </div>
    </>
  )
}

export default Header