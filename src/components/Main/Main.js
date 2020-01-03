import React from 'react';
import RotatingCube from '../RotatingCube/RotatingCube';
import { Canvas } from 'react-three-fiber';

const Main = props => {
  const { user } = props;

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p>Hello {user}</p>
        <Canvas style={{ width: '5rem' }}>
          <RotatingCube />
        </Canvas>
      </div>
    </>
  );
};

export default Main;
