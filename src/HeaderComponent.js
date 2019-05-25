import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



export default class Header extends Component {
    render() {
        return (
            <div>
                <ul><li><Link to='/'>Home</Link></li></ul>
                <ul><li><Link to='/about'>About</Link></li></ul>
                <ul><li><Link to='/portfolio'>Portfolio</Link></li></ul>
                <ul><li><Link to='/contact'>Contact</Link></li></ul>



                
            </div>
            
            

        );
    }

}

