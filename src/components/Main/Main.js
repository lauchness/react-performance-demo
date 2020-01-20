import React from 'react';
import RotatingCube from '../RotatingCube/RotatingCube';
import { Canvas } from 'react-three-fiber';
import _ from 'lodash';

/**
 * 
 * @param {Object} props - Component props
 * @description This is a component which contains the entirety of lodash as an example. 
 *  This is by no means performant, and you SHOULD NOT do it. 
 *  I included it to use as an example of a bundled component with a large size.
 * 
 */
const Main = props => {
  const { user } = props;
  
  if (!_.isString) {
    return null
  }

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
