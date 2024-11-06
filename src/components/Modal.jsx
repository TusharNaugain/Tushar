import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion-3d';
import { useTransform, useMotionValue } from 'framer-motion';
import { useFrame, useThree } from '@react-three/fiber';
import { useAspect, useTexture } from '@react-three/drei';
import useMouse from './useMouse';
import { projects } from './Data';
import pic1 from '../assets/pic1.jpg'

function Modal({ activeMenu }) {
  const mesh = useRef();
  const mouse = useMouse();
  const { viewport } = useThree();

  // Load textures (always call hooks at the top level)
  const textures = useTexture(projects.map(project => project.src));

  // Calculate aspect ratio based on the first texture (hooks at the top)
  const scale = useAspect(
    textures[0]?.image.width || 1, // Fallback value to prevent errors if textures are not loaded
    textures[0]?.image.height || 1,
    0.0400
  );

  const smoothMouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const uniforms = useRef({
    uTexture: { value: null }, // Texture reference
    uDelta: { value: { x: 0, y: 0 } },
    uOpacity:{value:1}
  });

  useFrame(() => {
    const { x, y } = mouse;
    const smoothx = smoothMouse.x.get();
    const smoothy = smoothMouse.y.get();

    smoothMouse.x.set(lerp(smoothx, x.get(), 0.05));
    smoothMouse.y.set(lerp(smoothy, y.get(), 0.05));

    if (mesh.current) {
      mesh.current.material.uniforms.uDelta.value = {
        x: x.get() - smoothx,
        y: y.get() - smoothy
      };
    }
  });

  // Update texture when activeMenu changes
  useEffect(() => {
    if (activeMenu != null && mesh.current) {
      mesh.current.material.uniforms.uOpacity.value = 1
      mesh.current.material.uniforms.uTexture.value = textures[activeMenu];
      console.log(activeMenu);
    }
    else {mesh.current.material.uniforms.uOpacity.value = 0}
  }, [activeMenu, textures]);

  const x = useTransform(smoothMouse.x, [0, window.innerWidth], [-viewport.width / 2, viewport.width / 2]);
  const y = useTransform(smoothMouse.y, [0, window.innerHeight], [viewport.height / 2, -viewport.height / 2]);

  return (
    <motion.mesh ref={mesh} position-x={x} position-y={y} scale={scale}>
      <planeGeometry args={[5, 5, 15, 15]} />
      <shaderMaterial
        uniforms={uniforms.current}
        fragmentShader={`
          varying vec2 vUv;
          uniform sampler2D uTexture;
          uniform float uOpacity;
          void main() {
            vec3 textureColor = texture2D(uTexture, vUv).rgb;
            gl_FragColor = vec4(textureColor,uOpacity); 
          }
        `}
        vertexShader={`
          varying vec2 vUv;
          uniform vec2 uDelta;
          float PI = 3.141592653589793238;
          void main() {
            vUv = uv;
            vec3 newPosition = position;
            newPosition.x += sin(uv.y * PI) * uDelta.x * 0.0005;
            newPosition.y += sin(uv.x * PI) * uDelta.y * 0.0005;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
          }
        `}
      />
    </motion.mesh>
  );
}

export default Modal;
