import React, { useRef } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
// import FontAwesomeIcon from 'font'
export const Footer = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cegx14m', 'template_ea06ixb', form.current, 'ELOpDhIKWVRENY1d6')
      .then((result) => {
        window.location.reload();

        console.log(result.text);

      }, (error) => {
        console.log(error.text);
      });

  };

  return <>
    <div className='footer-content'>
      <div className='footer-form'>

        <Form ref={form} onSubmit={sendEmail} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Message</Form.Label>
            <Form.Control type="text" placeholder="Enter message" className='form-control-message' />
          </Form.Group>
          <Button variant="primary" type="submit">
            <i class="fa-solid fa-2x fa-arrow-trend-up"></i>
          </Button>
        </Form>
      </div>
    </div>
  </>
}

