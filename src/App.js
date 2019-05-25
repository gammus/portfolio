import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import Navbar from './customNavBar';
import HeroBox from './HeroBoxComponent';
import Contact from './ContactComponent';
import TileRow from './TileRowComponent';
import Portfolio from './PortfolioComponent'
import About from './AboutComponent';
import Footer from './FooterComponent';


class App extends Component {
    render() {
        return (
            <Router>
              <div>
                <Navbar />
                <Route exact path='/' component= {Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/portfolio' component={Portfolio} />
                <Footer />

           </div>
            </Router>
            

            
        );
    }
}

export default App;
