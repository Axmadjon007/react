
import React from 'react';

import Navbar from './Navbar/navbar';
import Body  from './Body/body';
import Sidebar from './Sidebar/sidebar';

import './Style/App.css';

  class Student extends React.Component {
    render() {
      return ( 
        <div className='app-container'>
            <Sidebar />
        <div className='app-wrapper'>
            <Navbar />
            <Body /> 
          </div>
        </div>
      );
    }
  }
  
  export default Student;
