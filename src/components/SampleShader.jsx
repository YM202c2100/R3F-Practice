import vertexShader from "../shaders/sea/vertex.glsl"
import fragmentShader from "../shaders/sea/fragment.glsl"

function SampleShader(){
  return(
    <mesh>
      <planeGeometry args={[1, 1, 128, 128]}/>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  )
}

export default SampleShader