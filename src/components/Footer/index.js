import React, { useState } from 'react';
import { Title, FormContainer, Background, Greeting } from './FooterComponents';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Footer = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    comment: '',
  });

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form }),
    })
      .then(() => alert('submitted'))
      .catch((error) => alert(error));
  };

  const handleChange = (e) => setForm({ [e.target.name]: e.target.value });

  const { name, email, subject, message } = form;
  return (
    <Background id='contact'>
      <Title>Get in touch</Title>
      <Greeting>
        Want to reach out to me for an opportunity or just want to say hi?{' '}
        <br></br> <br></br>Feel free to send me a message!
      </Greeting>
      <FormContainer>
        <form
          data-netlify='true'
          name='contact'
          method='post'
          onSubmit={(e) => handleSubmit(e)}
        >
          <input type='hidden' name='form-name' value='contact' />
          <label>Name</label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={(e) => handleChange(e)}
            required
          />
          <label>Email</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={(e) => handleChange(e)}
            required
          />
          <label>Subject</label>
          <input
            type='subject'
            name='subject'
            value={subject}
            onChange={(e) => handleChange(e)}
            required
          />
          <label>Message</label>
          <textarea
            name='message'
            value={message}
            onChange={(e) => handleChange(e)}
            required
          ></textarea>
          <div>
            <button type='submit'>Send</button>
          </div>
        </form>
      </FormContainer>
    </Background>
  );
};

export default Footer;
