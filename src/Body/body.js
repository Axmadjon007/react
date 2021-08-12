
import React, { Component } from 'react'
import kalit from '../assets/kalit.png';
import drive from '../assets/drive.png';
import sozlama from '../assets/sozlama.png';
import batariya from '../assets/batariya.png';
import balon from '../assets/balon.png';
import quluf from '../assets/quluf.png';
import mashena from '../assets/mashena.png';
import champi from '../assets/champi.png';
import skins from '../assets/skins.png';
import won from '../assets/won.png';
import bottomto from '../assets/bottomto.png';
import bottomwon from '../assets/bottomwon.png';



import './body.css';

// import './common.css';

export default class body extends Component {
    render() {
        return (
            <div className='container body'>
                <div className='card-wrapper'>

                    <div className="card"> 
                    <img className="kalit" src={kalit} alt="kalit" /> 
                        {/* <p>Start</p> */}
                    </div>

                    <div className="card"> 
                    <img className="drive" src={drive} alt="drive" /> 
                        {/* <p>Start</p> */}
                    </div>

                    <div className="card"> 
                    <img className="sozlama" src={sozlama} alt="sozlama" /> 
                        {/* <p>Start</p> */}
                    </div>

                    <div className="card"> 
                    <img className="batariya" src={batariya} alt="batariya" /> 
                        {/* <p>Start</p> */}
                    </div>

                    <div className="card"> 
                    <img className="balon" src={balon} alt="balon" /> 
                        {/* <p>Start</p> */}
                    </div>

                    <div className="card"> 
                    <img className="quluf" src={quluf} alt="quluf" /> 
                        {/* <p>Start</p> */}
                    </div>
                    
                </div>
{/*  */}

    <div className='body-cent'>
            <p className='title'>Infiniti Renault
            <p className='tit'>TM</p></p>
        
        <div className='cent-icons'>
            <div className='ico-left'>
            <i class="fa fa-angle-left " aria-hidden="true"></i>
            </div>
            
            <div className='ico-right'>
            <i class="fa fa-angle-right " aria-hidden="true"></i>
            </div>
        </div>
    </div>
{/*  */}
<img className="mashena" src={mashena} alt="mashena" /> 

        <div className='body-right'>   
            
            <div className='titlee'>
                <div className='iconki'>
                    <img className="champi right" src={champi} alt="champi" />
                </div>
                    <p className='info'>Championships</p>
            </div>

            <div className='titlee'>
                <div className='iconki'>
                    <img className="skins right" src={skins} alt="skins" /> 
                </div> 
                    <p className='info'>Skins</p>
            </div>

            <div className='titlee'>
                <div className='iconki'>
                    <img className="won right" src={won} alt="won" /> 
                </div>
                    <p className='info'>Trophies Won</p>
            </div>

        </div>

        <div className='bottom'>
        <img className="bottomto" src={bottomto} alt="bottomto" /> 
        <img className="bottomwon" src={bottomwon} alt="bottomto" /> 

        </div>





        </div>
        );
    }
}
