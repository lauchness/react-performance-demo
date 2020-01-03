import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

const RotatingCube = () => {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.02;
    ref.current.rotation.y += 0.05;
  });
  return (
    <mesh
      ref={ref}
      onClick={e => console.log('click')}
      onPointerOver={e => console.log('hover')}
      onPointerOut={e => console.log('unhover')}
    >
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
};

export default RotatingCube;
