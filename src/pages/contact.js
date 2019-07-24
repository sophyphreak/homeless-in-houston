import React from 'react';
import { Link } from 'gatsby';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="contact" />

      <h4>Contact Page</h4>
      <Form
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <FormGroup>
          <Label for="Name">Name:</Label>
          <Input
            required
            type="name"
            name="name"
            id="name"
            placeholder="Enter name"
          />
        </FormGroup>

        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
          />
        </FormGroup>

        <FormGroup>
          <Label for="message">Message:</Label>
          <Input
            required
            type="textarea"
            name="message"
            id="message"
            placeholder="Enter message"
          />
        </FormGroup>

        <input class="btn btn-secondary" type="Submit" value="Submit" />
      </Form>
    </Layout>
  );
};

export default ContactPage;
