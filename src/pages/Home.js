import React, { Component } from 'react';
import { Card, Container, CardDeck, Button } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <CardDeck className="m-4">
            <Card border="success">
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quibusdam sint voluptates rerum autem consequatur voluptatum rem iusto ab ratione cum ex sit perspiciatis. Ad.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
              <Card.Img variant="top" src="https://images.pexels.com/photos/4008796/pexels-photo-4008796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />

            </Card>
            <Card bg="info" >
              <Card.Img variant="top" src="https://images.pexels.com/photos/3822726/pexels-photo-3822726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quibusdam sint voluptates rerum autem consequatur voluptatum rem iusto ab ratione cum ex sit perspiciatis. Ad.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card border="success">
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quibusdam sint voluptates rerum autem consequatur voluptatum rem iusto ab ratione cum ex sit perspiciatis. Ad.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
              <Card.Img variant="top" src="https://images.pexels.com/photos/2890835/pexels-photo-2890835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </Card>

          </CardDeck>
        </Container>
      </>)
  }
}

