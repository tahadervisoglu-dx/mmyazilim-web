"use client"

import { Canvas } from "@react-three/fiber"
import { Effects } from "@react-three/drei"
import { Particles } from "./particles/particles"
import { VignetteShader } from "./particles/shaders/vignetteShader"
import { Suspense } from "react"

export function HeroCanvas() {
  return (
    <Canvas
      camera={{
        position: [1.26, 2.66, -1.82],
        fov: 50,
        near: 0.01,
        far: 300,
      }}
      gl={{
        antialias: false,
        powerPreference: "high-performance",
        failIfMajorPerformanceCaveat: true,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor("#000000")
      }}
      fallback={null}
    >
      <Suspense fallback={null}>
        <color attach="background" args={["#000"]} />
        <Particles
          speed={1.0}
          aperture={1.79}
          focus={3.8}
          size={512}
          noiseScale={0.6}
          noiseIntensity={0.52}
          timeScale={1}
          pointSize={10.0}
          opacity={0.8}
          planeScale={10.0}
          useManualTime={false}
          manualTime={0}
          introspect={false}
        />
        <Effects multisamping={0} disableGamma>
          <shaderPass args={[VignetteShader]} uniforms-darkness-value={1.5} uniforms-offset-value={0.4} />
        </Effects>
      </Suspense>
    </Canvas>
  )
}
