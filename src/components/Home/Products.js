import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "./Products.module.css";

export default function Products() {
	return (
		<div>
			<Container fluid className={styles.containerProducts}>
				<h1 className={styles.headerProducts}>Products</h1>
				<Row xs={1} md={3}>
					<Col className={styles.colProducts}>
						<Card className={styles.cardProducts}>
							<Card.Img
								className={styles.imageCardProducts}
								src={require("../../images/shirt.webp")}
							></Card.Img>
							<Card.Body>
								<Card.Title>Shirts</Card.Title>
								<Card.Text>
									All authentic 100% cotton shirts
								</Card.Text>
							</Card.Body>
							<Button variant='primary'>Go somewhere</Button>
						</Card>
					</Col>

					<Col className={styles.colProducts}>
						<Card className={styles.cardProducts}>
							<Card.Img
								className={styles.imageCardProducts}
								src={require("../../images/Tshirt.jpg")}
							></Card.Img>
							<Card.Body>
								<Card.Title>T Shirts</Card.Title>
								<Card.Text>
									All authentic 100% cotton shirts
								</Card.Text>
							</Card.Body>
							<Button variant='primary'>Go somewhere</Button>
						</Card>
					</Col>

					<Col className={styles.colProducts}>
						<Card className={styles.cardProducts}>
							<Card.Img
								className={styles.imageCardProducts}
								src={require("../../images/oversizedT.webp")}
							></Card.Img>
							<Card.Body>
								<Card.Title>Oversized T-Shirts</Card.Title>
								<Card.Text>
									All authentic 100% cotton shirts
								</Card.Text>
							</Card.Body>
							<Button variant='primary'>Go somewhere</Button>
						</Card>
					</Col>

					<Col className={styles.colProducts}>
						<Card className={styles.cardProducts}>
							<Card.Img
								className={styles.imageCardProducts}
								src={require("../../images/posters.jpg")}
							></Card.Img>
							<Card.Body>
								<Card.Title>Posters</Card.Title>
								<Card.Text>
									All authentic 100% cotton shirts
								</Card.Text>
							</Card.Body>
							<Button variant='primary'>Go somewhere</Button>
						</Card>
					</Col>

					<Col className={styles.colProducts}>
						<Card className={styles.cardProducts}>
							<Card.Img
								className={styles.imageCardProducts}
								src={require("../../images/posters.jpg")}
							></Card.Img>
							<Card.Body>
								<Card.Title>Posters</Card.Title>
								<Card.Text>
									All authentic 100% cotton shirts
								</Card.Text>
							</Card.Body>
							<Button variant='primary'>Go somewhere</Button>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
