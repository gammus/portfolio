import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import TileRow from './TileRowComponent';
import Footer from './FooterComponent';

export default class Home extends Component {
    render() {

        return (
       <div>
        <Jumbotron>
            <Container>
                <h2 className="text-center header-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan metus non sollicitudin lacinia. Nam venenatis turpis ut elementum eleifend. </h2>
            </Container>
        </Jumbotron>
 
    <Container>
        <h2 className="text-center special-heading" >Skills Set</h2>      
        <TileRow />
    </Container>

    <Container>
        <h2 className="text-center special-heading" >Past Projects</h2>      
        <TileRow />
    </Container>
   



    </div>
            
        

        )
    }

}
