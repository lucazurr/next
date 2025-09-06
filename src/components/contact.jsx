import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { emailConfig } from "../emailConfig";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const formStates = {
  IDLE: 'idle',
  SENDING: 'sending',
  SUCCESS: 'success',
  ERROR: 'error'
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [formStatus, setFormStatus] = useState(formStates.IDLE);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validazione base
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormStatus(formStates.ERROR);
      setStatusMessage('Tutti i campi sono obbligatori.');
      return;
    }
    
    setFormStatus(formStates.SENDING);
    setStatusMessage('Invio in corso...');
    
    // Prepara i dati del template
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: emailConfig.toEmail
    };
    
    emailjs
      .send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      )
      .then(
        (result) => {
          console.log('Email inviata con successo:', result.text);
          setFormStatus(formStates.SUCCESS);
          setStatusMessage('Messaggio inviato con successo! Ti risponderemo presto.');
          clearState();
          
          // Reset del messaggio dopo 5 secondi
          setTimeout(() => {
            setFormStatus(formStates.IDLE);
            setStatusMessage('');
          }, 5000);
        },
        (error) => {
          console.error('Errore nell\'invio:', error.text);
          setFormStatus(formStates.ERROR);
          setStatusMessage('Errore nell\'invio del messaggio. Riprova più tardi.');
          
          // Reset del messaggio dopo 5 secondi
          setTimeout(() => {
            setFormStatus(formStates.IDLE);
            setStatusMessage('');
          }, 5000);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    value={message}
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                
                {/* Messaggio di stato */}
                {statusMessage && (
                  <div className={`alert ${
                    formStatus === formStates.SUCCESS ? 'alert-success' : 
                    formStatus === formStates.ERROR ? 'alert-danger' : 
                    'alert-info'
                  }`} style={{ marginTop: '15px' }}>
                    {statusMessage}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className="btn btn-custom btn-lg"
                  disabled={formStatus === formStates.SENDING}
                >
                  {formStatus === formStates.SENDING ? 'Invio...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
