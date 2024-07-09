import vertexShader from "../shaders/sea/vertex.glsl"
import fragmentShader from "../shaders/sea/fragment.glsl"
import { Canvas } from "@react-three/fiber"
import { Center, OrbitControls } from "@react-three/drei"

function SampleShader(){
  return(
    <Canvas
      camera={{position:[0, 0.5, 1]}}
    >
      <OrbitControls/>
      <Center>
        <mesh rotation={[-Math.PI/2, 0, Math.PI/4]}>
          <planeGeometry args={[1, 1, 128, 128]}/>
          <shaderMaterial
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
          />
        </mesh>
      </Center>
    </Canvas>
  )
}

export default SampleShader