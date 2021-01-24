import React from 'react';
import { Title, FormContainer, Background, Greeting } from './FooterComponents';

const Footer = () => {
  return (
    <Background id='contact'>
      <Title>Get in touch</Title>
      <Greeting>
        Want to reach out to me for an opportunity or just want to say hi?{' '}
        <br></br> <br></br>Feel free to send me a message!
      </Greeting>
      <FormContainer>
        <form name='contact' method='POST' data-netlify='true'>
          <label>Name</label>
          <input type='text' name='name' required />
          <label>Email</label>
          <input type='email' name='email' required />
          <label>Subject</label>
          <input type='subject' name='subject' required />
          <label>Message</label>
          <textarea name='message' required></textarea>
          <div>
            <button type='submit'>Send</button>
          </div>
        </form>
      </FormContainer>
    </Background>
  );
};

export default Footer;
