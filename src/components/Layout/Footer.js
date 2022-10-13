import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./Footer.module.css";
import {
	FACEBOOK_URL,
	TWITTER_URL,
	INSTAGRAM_URL,
	LINKEDIN_URL,
	GMAIL_MAILTO
} from "../../Constants";

function Footer() {
	return (
		<Container fluid className='bg-dark text-center text-white w-100'>
			<Row className='p-2'>
				<Col>
					<Button variant='link' href={FACEBOOK_URL}>
						<i
							className={`${styles.facebook} fab fa-facebook-f`}
						></i>
					</Button>
					<Button variant='link' href={TWITTER_URL}>
						<i className={`${styles.twitter} fab fa-twitter`}></i>
					</Button>
					<Button variant='link' href={GMAIL_MAILTO}>
						<i
							className={`${styles.gmail} fa-sharp fa-solid fa-envelope`}
						></i>
					</Button>
					<Button variant='link' href={INSTAGRAM_URL}>
						<i
							className={`${styles.instagram} fab fa-instagram`}
						></i>
					</Button>
					<Button variant='link' href={LINKEDIN_URL}>
						<i
							className={`${styles.linkedin} fab fa-linkedin-in`}
						></i>
					</Button>
				</Col>
			</Row>
			<Row
				className='text-center p-3'
				style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
			>
				<Col>
					© 2022 Copyright:
					<a className='text-white' href='#!'>
						KNITUP.com
					</a>
					{/* Copyright &copy; knitup */}
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
