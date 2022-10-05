import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4  pb-0'  style={{alignItems: 'center', justifyContent: 'center', width: '100%'}}>
        <section className='mb-4'>
          <MDBBtn tag='a' noRipple color='none' className='m-1' href='https://www.facebook.com/Nitup_official-104907148919179/' style={{ color: '#3b5998' }}>
            <MDBIcon fab icon='facebook-f' size='lg' />
          </MDBBtn>

          <MDBBtn tag='a' noRipple color='none' className='m-1' style={{ color: '#55acee' }}>
            <MDBIcon fab icon='twitter' size='lg' />
          </MDBBtn>

          <MDBBtn tag='a' noRipple color='none' className='m-1' style={{ color: '#dd4b39' }}>
            <MDBIcon fab icon='google' size='lg' />
          </MDBBtn>

          <MDBBtn tag='a' noRipple color='none' className='m-1' href='https://instagram.com/nitup_official?igshid=YmMyMTA2M2Y=' style={{ color: '#ac2bac' }}>
            <MDBIcon fab icon='instagram' size='lg' />
          </MDBBtn>

          <MDBBtn tag='a' noRipple color='none' className='m-1' href='https://www.linkedin.com/company/nitup-official/' style={{ color: '#0082ca' }}>
            <MDBIcon fab icon='linkedin-in' size='lg' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          KNITUP.com
        </a>
        {/* Copyright &copy; knitup */}
      </div>
    </MDBFooter>
  )
}

export default Footer