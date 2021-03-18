import React from 'react';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './Navbar';

export default class Heaader extends React.Component {
    render() {
      return (
        // <Router>
          <div className="Header" style ={{
            borderBottom : '#EEEDE7 2px solid',  
            width: '100%',
            height: '70px'
            }} >
          <h2 style = {{
            float : 'left',
            margin : ' 1rem 2rem'
            }}><i>JETER </i>OLANO</h2>
          <Navbar />
          </div>
        // </Router>
      );
    }
  }