import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import styles from '../Home/Categories.module.css'

export default function Grid(){
    return(
        <Container fluid className={`${styles.containerProducts} bg-dark text-center`}>
            <h1 className={styles.headingProducts}>WHERE TO?</h1>
            <Row sm={1} md={3} className={`${styles.rowProducts} px-0`}>
                <Col className={styles.colProducts}>
                    <Card className={styles.cardProducts}> 
                        <Card.Img className={styles.imageProducts} src={require('../../images/WomensProducts/fitness.jpg')}/>
                        <Card.ImgOverlay className="d-flex justify-content-center">
                            <Button className={`${styles.cardButtonProducts} mt-auto rounded-pill btn-light`} href='#!'>Fitness</Button>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col className={styles.colProducts}>
                    <Card className={styles.cardProducts}>
                        <Card.Img className={styles.imageProducts} src={require('../../images/WomensProducts/college.jpg')} />
                        <Card.ImgOverlay className="d-flex justify-content-center">
                            <Button className={`${styles.cardButtonProducts} mt-auto rounded-pill btn-light`} href='#!'>College</Button>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col className={styles.colProducts}>
                    <Card className={styles.cardProducts}>
                        <Card.Img className={styles.imageProducts} src={require('../../images/WomensProducts/WFH.jpg')} />
                        <Card.ImgOverlay className="d-flex justify-content-center">
                            <Button className={`${styles.cardButtonProducts} mt-auto rounded-pill btn-light`} href='#!'>Work from Home</Button>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
            <Row sm={1} md={3} className={`${styles.rowProducts} px-0`}>
                <Col className={styles.colProducts}>
                    <Card className={styles.cardProducts}>
                        <Card.Img className={styles.imageProducts} src={require('../../images/WomensProducts/hangouts.jpg')} />
                        <Card.ImgOverlay className="d-flex justify-content-center">
                            <Button className={`${styles.cardButtonProducts} mt-auto rounded-pill btn-light`} href='#!'>Hangouts</Button>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col className={styles.colProducts}>
                    <Card className={styles.cardProducts}>
                        <Card.Img className={styles.imageProducts} src={require('../../images/WomensProducts/travel.jpg')} />
                        <Card.ImgOverlay className="d-flex justify-content-center">
                            <Button className={`${styles.cardButtonProducts} mt-auto rounded-pill btn-light`} href='#!'>Travel</Button>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col className={styles.colProducts}>
                    <Card className={styles.cardProducts}>
                        <Card.Img className={styles.imageProducts} src={require('../../images/WomensProducts/icons.jpg')} />
                        <Card.ImgOverlay className="d-flex justify-content-center">
                            <Button className={`${styles.cardButtonProducts} mt-auto rounded-pill btn-light`} href='#!'>Icons</Button>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}