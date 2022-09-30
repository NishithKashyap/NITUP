import { MovingComponent } from 'react-moving-text';

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

export const TextAnimation3D = () => {
    <div style={exampleStyle}>
        <MovingComponent
            type="effect3D"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="5"
            fillMode="none">
            React-Moving-Text
        </MovingComponent>
    </div>
}