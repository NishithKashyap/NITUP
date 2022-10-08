import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import styles from './Banner.module.css'

export default function Banner(){
    return (
        <Container fluid>
            <Row xs={1} sm={1} md={2} lg={2} className={styles.rowBanner}>
                <Col className="px-0">
                    <Card className={`${styles.cardBanner} text-white rounded-0`}>
                        <Card.Img className={styles.imageCardBanner} src={require('../../images/bannerMen.jpg')} alt="Card image" />
                        <Card.ImgOverlay className="d-flex justify-content-center">
                            <Button className="mt-auto rounded-pill btn-light" color='white' href="#!">Shop Now</Button>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col className="px-0">
                    <Card className={`${styles.cardBanner} text-white rounded-0`}>
                        <Card.Img className={styles.imageCardBanner} src={require('../../images/bannerMen.jpg')} alt="Card image" />
                        <Card.ImgOverlay className="d-flex justify-content-center">
                            <Button className="mt-auto rounded-pill btn-light" color='white' href="#!">Shop Now</Button>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container>  
    )
}