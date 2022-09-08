import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_edsvu5m', 'template_9h4m9t1', form.current, 'mfgTE9qT16rjS6y-3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
     <div className='boxContact'><form ref={form} onSubmit={sendEmail}>
          <label>Nom</label>
          <input type="text" name="user_name" />
          <label>Votre Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Envoyer" />
      </form>
    </div>
    
  );
};