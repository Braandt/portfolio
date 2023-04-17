import { Float, OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import * as THREE from 'three'

export default function Galaxy() {

    const galaxy = useRef()
    const mesh = useRef()

    const [mousePos, setMousePos] = useState()
    const [offsetLeft, setOffsetLeft] = useState()

    const parameters = {
        count: 50000,
        size: 0.01,
        radius: 5,
        branches: 6,
        spin: 1,
        randomness: 0.2,
        randomnessPower: 2,
        insideColor: '#ff6030',
        outsideColor: '#1b3984'
    }

    const positions = new Float32Array(parameters.count * 3)
    const colors = new Float32Array(parameters.count * 3)

    const colorInside = new THREE.Color(parameters.insideColor)
    const colorOutside = new THREE.Color(parameters.outsideColor)

    for (let i = 0; i < parameters.count; i++) {
        const i3 = i * 3

        // Position
        const radius = Math.random() * parameters.radius
        const spinAngle = radius * parameters.spin
        const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2

        const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius
        const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius
        const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius

        positions[i3 + 0] = Math.cos(branchAngle + spinAngle) * radius + randomX
        positions[i3 + 1] = randomY
        positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

        // Color
        const mixedColor = colorInside.clone()
        mixedColor.lerp(colorOutside, radius / parameters.radius)

        colors[i3 + 0] = mixedColor.r
        colors[i3 + 1] = mixedColor.g
        colors[i3 + 2] = mixedColor.b
    }

    useFrame((state, delta) => {
        galaxy.current.rotation.y += delta * 0.03
        mousePos && (state.camera.position.x += (Math.PI * -mousePos.x * 0.2 - state.camera.position.x) * 0.05)
        mousePos && (state.camera.position.y += (Math.PI * -mousePos.y * 0.5 - state.camera.position.y) * 0.05 + 0.15)
    })

    useEffect(() => {

        setOffsetLeft(2 * innerWidth / 1600)

        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX / innerHeight, y: e.clientY / innerWidth })
        }

        document.addEventListener('mousemove', (e) => handleMouseMove(e))

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <>
            <OrbitControls enableZoom={false} />
            <Float speed={1.5} scale={1.5} floatIntensity={1.5} rotationIntensity={0.5}>
                <mesh
                    ref={mesh}
                    position={[-offsetLeft, 0, 0]}
                    rotation={[-Math.PI * 0.1, 0, -Math.PI * 0.1]}
                >
                    <points
                        ref={galaxy}>
                        <bufferGeometry attach="geometry">
                            <bufferAttribute
                                attach="attributes-position"
                                count={positions.length / 3}
                                array={positions}
                                itemSize={3}
                                usage={THREE.DynamicDrawUsage}
                            />
                            <bufferAttribute
                                attach="attributes-color"
                                count={colors.length / 3}
                                array={colors}
                                itemSize={3}
                                usage={THREE.DynamicDrawUsage}
                            />
                        </bufferGeometry>
                        <pointsMaterial attach="material" vertexColors size={parameters.size} depthWrite={false} sizeAttenuation={true} blending={THREE.AdditiveBlending} />
                    </points>
                </mesh>
            </Float>
        </>
    )
}
