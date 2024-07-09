import vertexShader from "../shaders/sea/vertex.glsl"
import fragmentShader from "../shaders/sea/fragment.glsl"
import { Color } from "three"

function SampleShader(){
  return(
    <mesh rotation={[-Math.PI/2, 0, Math.PI/4]}>
      <planeGeometry args={[1, 1, 128, 128]}/>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uWaveFreqX:{value:3.5},
          uWaveFreqZ:{value:2.0},
          uWaveElevation:{value:0.2},
          uDepthColor:{value:new Color("#255874")},
          uSurfaceColor:{value:new Color("#a6cfe8")}
        }}
      />
    </mesh>
  )
}

export default SampleShader