import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Layout from '../presentational/layout';
import SEO from '../presentational/seo';

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
          <Input type="name" name="name" id="name" placeholder="Enter name" />
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
            type="textarea"
            name="message"
            id="message"
            placeholder="Enter message"
          />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    </Layout>
  );
};

export default ContactPage;
