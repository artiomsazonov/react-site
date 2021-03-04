import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import forestImg from '../assets/1.jpg';
import dforestImg from '../assets/2.jpg';
import cforestImg from '../assets/3.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                    className='d-block w-100'
                    src={forestImg}
                    alt="forest"
                    />
                    <Carousel.Caption>
                        <h3>Forest images</h3>
                        <p>Попробуйте новую кроссплатформенную оболочку PowerShell (https://aka.ms/pscore6)</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className='d-block w-100'
                    src={dforestImg}
                    alt="forest"
                    />
                    <Carousel.Caption>
                        <h3>Forest images</h3>
                        <p>Dark</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className='d-block w-100'
                    src={cforestImg}
                    alt="forest"
                    />
                    <Carousel.Caption>
                        <h3>Forest images</h3>
                        <p>Попробуйте новую кроссплатформенную оболочку PowerShell (https://aka.ms/pscore6)</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
