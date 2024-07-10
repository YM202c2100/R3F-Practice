import vertexShader from "../shaders/sea/vertex.glsl"
import fragmentShader from "../shaders/sea/fragment.glsl"
import { Color } from "three"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

function SampleShader(){
  const shaderRef = useRef()

  useFrame((state, delta)=>{
    if(shaderRef.current){
      shaderRef.current.uniforms.uTime.value += delta
    }
  })

  return(
    <mesh rotation={[-Math.PI/2, 0, Math.PI/4]}>
      <planeGeometry args={[1, 1, 128, 128]}/>
      <shaderMaterial
        ref={shaderRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime:{value:0},
          uDepthColor:{value:new Color("#255874")},
          uSurfaceColor:{value:new Color("#a6cfe8")}
        }}
      />
    </mesh>
  )
}

export default SampleShader