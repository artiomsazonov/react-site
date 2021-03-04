import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id='ledt-tabs-example' defaultActiveKey="first" >
                    <Row>
                        <Col sm={3} >
                            <Nav variant="pills"
                                className="flex-column mt-2" >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programing</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey='first'>
                                    <img src="https://i.pinimg.com/originals/8b/fc/3f/8bfc3fb502674ea979507848886ac2dc.jpg" className="w-100 mb-2" />
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quibusdam sint voluptates rerum autem consequatur voluptatum rem iusto ab ratione cum ex sit perspiciatis. Ad.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <img className="w-100 mb-2" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif" />
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quibusdam sint voluptates rerum autem consequatur voluptatum rem iusto ab ratione cum ex sit perspiciatis. Ad.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                    <img className="w-100 mb-2" src="https://blog.corp-site.envato.com/cdn-cgi/image/width=1200,quality=95,format=auto/uploads/2020/06/SOC093-Top-10-UI-Templates-for-Figma-XD-2020.png" />
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quibusdam sint voluptates rerum autem consequatur voluptatum rem iusto ab ratione cum ex sit perspiciatis. Ad.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fourth'>
                                    <img className="w-100 mb-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRssHmzuZo7smDkav3sucoqejf61qRGDCheQ&usqp=CAU" />
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quibusdam sint voluptates rerum autem consequatur voluptatum rem iusto ab ratione cum ex sit perspiciatis. Ad.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fifth'>
                                    <img className="w-100 mb-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOEPgVpzhcWeyE_cyaUJUPYFRoCnLu6efUqA&usqp=CAU" />
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quibusdam sint voluptates rerum autem consequatur voluptatum rem iusto ab ratione cum ex sit perspiciatis. Ad.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container >
            </Container>
        )
    }
}