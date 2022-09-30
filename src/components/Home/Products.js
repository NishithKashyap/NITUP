import * as React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const CardStyle = {
    height: '100%',
    marginBotton: '2em',
    display: 'flex',
    flexDirection: 'column'
}

const ColStyle = {
    padding: '10px'
}

const ImgStyle = {
    height: '300px'
}

const HeadingStyle = {
    fontSize: '4vh',
    fontFamily: 'Combo',
    textAlign: 'center'
}

const ContainerStyle = {
    maxWidth: '85%',
    paddingBottom: '6em',
    alignItems: 'center',
    justifyContent: 'center'
}

export default function Products() {
  return (
    <div>
        <h1 style={HeadingStyle}>
            <p>Products</p>
        </h1>
        <Container fluid style={ContainerStyle}>
            <Row xs={1} md={3} >
                <Col style={ColStyle}>
                    <Card style={CardStyle}>
                        <Card.Img src={require('../../images/shirt.webp')} style={ImgStyle}></Card.Img>
                        <Card.Body>
                            <Card.Title>Shirts</Card.Title>
                            <Card.Text>All authentic 100% cotton shirts</Card.Text>
                        </Card.Body>
                        <Button variant="primary" >Go somewhere</Button>
                    </Card>
                </Col>

                <Col style={ColStyle}>
                    <Card style={CardStyle}>
                        <Card.Img src={require('../../images/Tshirt.jpg')} style={ImgStyle}></Card.Img>
                        <Card.Body>
                            <Card.Title>T Shirts</Card.Title>
                            <Card.Text>All authentic 100% cotton shirts</Card.Text>
                        </Card.Body>
                        <Button variant="primary" >Go somewhere</Button>
                    </Card>
                </Col>

                <Col style={ColStyle}>
                    <Card style={CardStyle}>
                        <Card.Img src={require('../../images/oversizedT.webp')} style={ImgStyle}></Card.Img>
                        <Card.Body>
                            <Card.Title>Oversized T-Shirts</Card.Title>
                            <Card.Text>All authentic 100% cotton shirts</Card.Text>
                        </Card.Body>
                        <Button variant="primary" >Go somewhere</Button>
                    </Card>
                </Col>

                <Col style={ColStyle}>
                    <Card style={CardStyle}>
                        <Card.Img src={require('../../images/posters.jpg')} style={ImgStyle}></Card.Img>
                        <Card.Body>
                            <Card.Title>Posters</Card.Title>
                            <Card.Text>All authentic 100% cotton shirts</Card.Text>
                        </Card.Body>
                        <Button variant="primary" >Go somewhere</Button>
                    </Card>
                </Col>

                <Col style={ColStyle}>
                    <Card style={CardStyle}>
                        <Card.Img src={require('../../images/posters.jpg')} style={ImgStyle}></Card.Img>
                        <Card.Body>
                            <Card.Title>Posters</Card.Title>
                            <Card.Text>All authentic 100% cotton shirts</Card.Text>
                        </Card.Body>
                        <Button variant="primary" >Go somewhere</Button>
                    </Card>
                </Col>

                
            </Row>
        </Container>
    </div>
  );
}
