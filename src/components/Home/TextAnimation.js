import React from 'react';
import { Random } from 'react-animated-text';

const exampleStyle = {
  display: 'flex',
  backgroundColor: 'black',
  color: 'white',
  border: '1px #ccc',
  marginTop: '2em',
  marginBottom: '2em',
  padding: '2em 1em 1em 1em',
  width: '100%',
  fontSize: '4vh',
  fontFamily: 'Combo',
  alignItems: 'centre',
  justifyContent: 'center'
}

export const TextAnimation = () => (
    <div style={exampleStyle}>
      <Random
        text="One stop for all your requirements!"
        effect="jump"
        effectChange={5.0}
        effectDuration={0.4}
      />
    </div>
  )