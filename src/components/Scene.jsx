'use client'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Model from './Modal'

export default function Scene({activeMenu}) {
  return (
    <div className='fixed -z-[99] top-0 h-screen w-full overflow-hidden'>
        <Canvas>
            <Model activeMenu={activeMenu}/>
        </Canvas>
    </div>
  )
}