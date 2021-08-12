
import React, { Component } from 'react';
import logo from '../assets/logo.png';
import odam from '../assets/odam.png';

// import './common.css';
import './sidebar.css';

export default class sidebar extends Component {
    render() {
        return (
        <div className='container sidebar'>
            <div className='logoWrepper'>
              <img className="logo" src={logo} alt="logo" />   
              <p className='logo-text'>Iffee</p>
            </div>
            <h1 className='menu'>Menu</h1>

            <div className='item'>
                <i className='fa fa-home' />
                <p className='item-text'>Home</p>
            </div>
            <div className='item'>
                <i className='fa fa-th-large' />
                <p className='item-text'>Garage</p>
            </div>
            <div className='item'>
                <i className='fa fa-credit-card' />
                <p className='item-text'>Service Menu</p>
            </div>
            <div className='item'>
                <i className='fa fa-user' />
                <p className='item-text'>Racers</p>
            </div>
            <div className='item'>
                <i className='fa fa-calculator' />
                <p className='item-text'>Calculator</p>
            </div>
            <div className='item'>
                <i className='fa fa-cog' />
                <p className='item-text'>Setting</p>
            </div>



            <h1 className='scheduled'>Scheduled Races</h1>

                <div className='races '>
                    <div className='cirle a'></div>
                    <p className='info'>MotoGP 2022</p>
                </div>

                <div className='races'>
                    <div className='cirle b'></div>
                    <p className='info'>Dynamics 22</p>
                </div>

                <div className='races'>
                    <div className='cirle d'></div>
                    <p className='info'>Olympics</p>
                </div>





                <div className='bottom'>
                    <img className='odam' src={odam} alt='odam' />   
                    <p className='odam-text'>Killua</p>
                    <i class="fa fa-chevron-down fabottom" aria-hidden="true"></i>
                </div>
            
        </div>
        );
    }
}
