"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { useScroll } from "@react-three/drei"
import * as THREE from "three"

export function Background() {
  const scroll = useScroll()
  const particlesRef = useRef<THREE.Points>(null)

  const particleCount = 2000
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 10
      positions[i3 + 1] = (Math.random() - 0.5) * 10
      positions[i3 + 2] = (Math.random() - 0.5) * 10
    }

    return positions
  }, [particleCount])

  const colors = useMemo(() => {
    const colors = new Float32Array(particleCount * 3)
    const color = new THREE.Color()

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3

      // Generate colors in the purple to pink range
      color.setHSL(Math.random() * 0.1 + 0.7, 0.9, 0.6)

      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b
    }

    return colors
  }, [particleCount])

  useFrame(() => {
    if (!particlesRef.current) return

    const scrollOffset = scroll.offset
    particlesRef.current.rotation.y = scrollOffset * Math.PI * 2
    particlesRef.current.rotation.x = scrollOffset * Math.PI * 0.5
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={particleCount} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.8} sizeAttenuation />
    </points>
  )
}

