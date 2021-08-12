
import React, { Component } from 'react'

import odam from '../assets/odam.png';
import './navbar.css';

// import './common.css';

export default class navbar extends Component {
    render() {
        return (
            <div className='container nav-con'>
                
                <i className='fa fa-search icon-lupa' />
                <input placeholder='Search for a race, car or racer' className='nav-input-search' />
               
                {/* <i className='fa fa-chevron-down icon-right' /> */}
                <input placeholder='Choose a car' className='nav-input-car' />

                <i className='fa fa-bell' />
                <i className='fa fa-user' />
                <img src={odam} alt='user' className='userImg'  />  

            </div>
          
        );
    }
}
