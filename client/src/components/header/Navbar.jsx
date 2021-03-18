import {React, Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar" >
                <div className="links" style={{
                    display : 'flex',
                    justifyContent: 'flex-end',
                    paddingRight: '2rem'
                }}>
                    <Link exact to="/">Home</Link>  
                    <Link exact to="/Photos">Photos</Link>  
                    <Link exact to="/Videos">Videos</Link>
                    <Link exact to="/Blogs">Blogs</Link>
                    <Link exact to="/About">About</Link>  
                </div>
            </nav>
         );
    }
}
 