import React, { Component } from 'react';
import TileRow from './TileRowComponent';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';


export default class Portfolio extends Component {
    render() {

        return (
    <Container className='spacer'>
        <h2 className="text-center special-heading " >Portfolio</h2>      
        <TileRow />
    </Container>
        )
    }

}
