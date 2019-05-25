import React, { Component } from 'react';
import SingleTile from './SingleTileComponent';
import { CardDeck } from 'react-bootstrap';

export default class TileRow extends Component {
    render() {

        return (
            <div className='container'>
            <CardDeck>
            <SingleTile />
            <SingleTile />
            <SingleTile />
            </CardDeck>

            </div>


        
        )
    }

}
