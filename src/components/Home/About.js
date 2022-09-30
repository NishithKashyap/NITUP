import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function About() { 

    return (
        <Container fluid className="about-container">
            <Row className="justify-content-center">
                <Col lg={{ span:5, offset: 1}} md={{ span:5, offset: 1}} sm={12} className="about-text">
                    <Image fluid src={require('../../images/Connect-Logo-top.png')} alt=""></Image>
                    <p className="no-pad">
                        <br />
                        Hungry for socializing? <br></br>
                        Sit back &amp; sip a cup of coffee with us. We are crazy kickass brain boxes doing everything unless you want to see magic tricks done by pasha. Jokes apart! We are the ones who breathe amongst common people, understand them and come out with uncommon ideas to make your brand stand out. We are a plethora of ideas, delivering impactful tailor-made strategies and eye-catchy imagery every now and often.
                    </p>
                    <a href="#!" className="btn btn-brand btn-xs">Read more</a>
                </Col>
                <Col lg={6} md={6} sm={12} className="about-img">
                    <Image fluid src={require('../../images/bean1.png')} alt=""></Image>
                </Col>
            </Row>
        </Container>
    );
}