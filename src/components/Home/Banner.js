import { CCard, CCardTitle, CCardText, CButton, CCardBody, CCardImage, CCardImageOverlay } from '@coreui/react'
import { Container, Row } from 'react-bootstrap'

const centered = {
    position: 'absolute', 
    top: '80%',
    left: '30%'
}

export default function Banner(){
    return (
        
        <div className='row' style={{marginBottom:'2em'}}>
            <div className='col-lg-5 col-md-5 col-sm-12 offset-lg-1 px-0'>
                <div className="card bg-dark text-white" style={{height:'initial', width:'100%', margin:'0px'}}>
                    <img className="card-img" src={require('../../images/oversizedT.webp')} alt="Card image" />
                        <div className="card-img-overlay" style={centered}>
                            <CButton shape='rounded-pill' color='white' href="#!">Shop Now</CButton>
                        </div>
                </div>
            </div>
            <div className='col-lg-5 col-md-5 col-sm-12 px-0'>
                <div className="card bg-dark text-white" style={{height:'auto', width:'100%', margin:'0px'}}>
                    <img className="card-img" src={require('../../images/oversizedT.webp')} alt="Card image" />
                        <div className="card-img-overlay" style={centered}>
                            <CButton shape='rounded-pill' color='white' href="#!">Shop Now</CButton>
                        </div>
                </div>
            </div>
            
        </div>
        
        /*<Container>
            <Row>
                <CCard classNameName='col-sm' style={{height:'auto'}}>
                    <CCardImage src= {require('../images/shirt.webp')} />
                    <CCardImageOverlay>
                        <CCardBody style={centered}>
                            <CButton shape='rounded-pill' color='white' href="#">Shop Now</CButton>
                        </CCardBody>
                    </CCardImageOverlay>
                </CCard>
                <CCard classNameName='col-sm' style={{height:'auto'}}>
                    <CCardImage src= {require('../images/shirt.webp')} />
                    <CCardImageOverlay>
                        <CCardBody style={centered}>
                            <CButton shape='rounded-pill' color='white' href="#">Shop Now</CButton>
                        </CCardBody>
                    </CCardImageOverlay>
                </CCard>
                <CCard classNameName='col-sm' style={{height:'auto'}}>
                    <CCardImage src= {require('../images/shirt.webp')} />
                    <CCardImageOverlay>
                        <CCardBody style={centered}>
                            <CButton shape='rounded-pill' color='white' href="#">Shop Now</CButton>
                        </CCardBody>
                    </CCardImageOverlay>
                </CCard>
            </Row> 
        </Container>*/
    )
}