import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
  const form = useRef();


  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Having issues? Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">jbasgallopwork@gmail.com</span>

              <a
                href="mailto:jbasgallop@gmail.com"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
           

            <div className="contact__card">
              <i className="bx bxl-linkedin contact__card-icon"></i>

              <h3 className="contact__card-title">talk on linkedin</h3>
              <span className="contact__card-data">john basgallop</span>

              <a href="https://www.linkedin.com/in/john-basgallop-12b8a6210/" className="contact__button">
                Lets talk{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">phone</h3>
              <span className="contact__card-data">07592515298</span>

           
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
