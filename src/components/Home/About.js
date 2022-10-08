import React from "react";
import { Container, Image } from "react-bootstrap";

export default function About() { 

    return (
        <Container fluid className="about-container px-0 my-0">
            <Image fluid src={require("../../images/About.png")} className="w-100"/>
        </Container>
    );
}