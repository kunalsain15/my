import React from 'react';
import { Container, Button } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5">
      <h1>About Us</h1>
      <p>
        Welcome to our website. We are dedicated to providing you with the best service possible.
        Our team is committed to excellence and we strive to exceed your expectations.
      </p>
      <Button variant="primary">Learn More</Button>
    </Container>
  );
}

export default About;
