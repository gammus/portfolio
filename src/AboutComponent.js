import React, { Component } from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';
import'./about.css';

export default class About extends Component {
    render() {
        return (
            <div className='box-margin-top'>
        
                <Container className='bottom-spacer'>
                    <Row>
                    <Col xs={6} sm={6} >
                        <Image src="/assets/img/profile.png" className="about-profile-pic" />
            
                    </Col>

                    <Col xs={6} sm={6}  >
                    <h3>Gamile Mustapha</h3>
                        <p> My passion is to design and build good looking, functional and user-friendly websites. 
                            My mission is to provide our customers with affordable and elegant web solutions.</p>
                        <p>To use the best of what is now available, in terms of knowledge, tools and skills,
                             in order to provide my customers with the best user experience ever. 
                             This means I continuously check and use the best from the graphic design trends,
                              web development and programming advancements, as well as the sharpest digital marketing insights.</p>

                    </Col>
                    </Row>
                </Container>
        
            </div>

        );
    }

}