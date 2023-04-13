import React from 'react'
import logo from './images/megasenalogo.png'

const Logo = () => {
    return (
    <div className='card-header d-flex justify-content-center p-4'>
        <img src={logo} style={{width: '125px'}}></img>
    </div>
    )
}

export default Logo