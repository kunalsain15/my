import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

const Faq = () => {
  return (
    <Container className="mt-5">
      <h1>Frequently Asked Questions</h1>
      <Accordion defaultActiveKey="0" className="mt-3">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is your return policy?</Accordion.Header>
          <Accordion.Body>
            Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How do I track my order?</Accordion.Header>
          <Accordion.Body>
            You can track your order by logging into your account on our website and visiting the 'Orders' section. You will also receive an email with tracking information once your order has shipped.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Do you ship internationally?</Accordion.Header>
          <Accordion.Body>
            Yes, we ship to many countries around the world. Shipping costs and delivery times vary depending on the destination.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default Faq;
