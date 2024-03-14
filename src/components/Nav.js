import React from 'react'
import './Nav.css'

export default function Nav() {
  return (
    <nav className='nav'>
        <h1 className='shop-title' onClick={() => window.location.reload()}>Shop</h1> 
        <div className='nav-right'>
        <button className="cart-button" ></button> 
        <button className="user-button"></button>
        <button className="login-button" ></button>
        <button className="logout-button" ></button>
        </div>
    </nav>
  )
}
