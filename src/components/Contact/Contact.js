import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Contact.css";

const Contact = () => {
  // Form object will hold a key-value pair for each of our form fields
  const [form, setForm] = useState({});
  // Errors object will hold a key-value pair for each error
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    // Check and see if errors exist, and remove them from the error object:
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const findFormErrors = () => {
    const { name, email, enquiry } = form;
    const newErrors = {};

    // Name errors
    if (!name || name === " ") newErrors.name = "Please provide your name";
    else if (name.length > 50) newErrors.name = "Name is too long";

    // Email errors
    if (
      !email ||
      email === " " ||
      // eslint-disable-next-line 
      RegExp(`/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`).test(email)
    )
      newErrors.email = "Invalid Email";

    // Enquiry errors
    if (!enquiry || enquiry === " ") newErrors.enquiry = "Required Field";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // No errors - checks if object has any key-value pairs
      alert("Thank you, your message has been sent");
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center contact">
      {/* <div
        className="badge-base LI-profile-badge pb-2 m-auto"
        data-locale="en_US"
        data-size="large"
        data-theme="light"
        data-type="HORIZONTAL"
        data-vanity="etta-h-758178220"
        data-version="v1"
      >
        <a
          class="badge-base__link LI-simple-link"
          href="https://au.linkedin.com/in/etta-h-758178220?trk=profile-badge"
        >
        </a>
      </div> */}

      <h1>Contact</h1>
      <Form className="formContainer" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="Name"
            size="lg"
            onChange={(e) => setField("name", e.target.value)}
            isInvalid={!!errors.name}
            placeholder="name..."
          />
          <Form.Control.Feedback type="invalid" className="error">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            size="lg"
            onChange={(e) => setField("email", e.target.value)}
            isInvalid={!!errors.email}
            placeholder="email..."
          />
          <Form.Control.Feedback type="invalid" className="error">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => setField("enquiry", e.target.value)}
            isInvalid={!!errors.enquiry}
          />
          <Form.Control.Feedback type="invalid" className="error">
            {errors.enquiry}
          </Form.Control.Feedback>
        </Form.Group>
        <div className="container">
          <div className="col-md-12 text-center">
            <Button className="mt-3 btn" variant="link" type="submit">
              SEND
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Contact;
