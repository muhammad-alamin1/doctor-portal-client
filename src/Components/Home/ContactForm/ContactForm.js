import "./ContactForm.css";
import React, { useState } from "react";

const ContactForm = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  //change handlers
  const changeHandler = (e) => {
    if (e.target.name === "email") {
      const newMail = { ...formData };
      newMail.email = e.target.value;
      setFormData(newMail);
    }
    if (e.target.name === "subject") {
      const newSubject = { ...formData };
      newSubject.subject = e.target.value;
      setFormData(newSubject);
    }
    if (e.target.name === "message") {
      const newMessage = { ...formData };
      newMessage.message = e.target.value;
      setFormData(newMessage);
    }
  };

  // submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = { ...formData };
    fetch(`https://life-care-server1.herokuapp.com/contact-us`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((data) => {
        setSuccess("Message send successfully. We will contact you soon.");
        setError("");
      })
      .catch((err) => {
        setSuccess("");
        setError(`Message doesn't send.!`);
      });
  };

  return (
    <section id="contact-form">
      <div className="contact-header text-center my-5 " id="form-header">
        <h5 className="text-uppercase mb-3 " style={{ color: "#1CC7C1" }}>
          contact us
        </h5>
        <h3 className="text-white">Always Contact With Us</h3>
      </div>
      {success && <p className="success">{success}</p>}
      {error && <p className="error">{error}</p>}
      <div id="form-div">
        <form
          action=""
          method=""
          className="text-center "
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            onBlur={changeHandler}
            className="form-control"
            placeholder="E-mail Address*"
            required
          />
          <br />
          <br />
          <input
            type="text"
            name="subject"
            onBlur={changeHandler}
            className="form-control"
            placeholder="Subject*"
            required
          />
          <br />
          <br />
          <textarea
            id="msg-area"
            name="message"
            onBlur={changeHandler}
            className="form-control"
            placeholder="Your Message"
            style={{ resize: "none", height: "150px" }}
          ></textarea>
          <br />
          <br />
          <input
            type="submit"
            id="submit-btn"
            valid="Submit"
            className="btn-brand"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
