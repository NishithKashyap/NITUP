import React from 'react';
import { Wave } from 'react-animated-text';
import { Container } from 'react-bootstrap';
import styles from './TextAnimation.module.css';

export const TextAnimation = () => (
    <Container fluid className={styles.animatedText}>
      <Wave
        text="One stop for all your requirements!"
        effect="jump"
        effectChange={5.0}
        effectDuration={0.4}
      />
    </Container>
  )