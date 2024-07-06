import { Canvas } from "@react-three/fiber"
import { Text3D } from "@react-three/drei"

function Examples(){
  return(
    <div>
      <h2 
        className="
          text-center
          text-5xl font-bold text-[#72c371]"
      >
        Examples
      </h2>
      <Canvas>
        <Text3D font={"fonts/helvetiker_regular.typeface.json"}>
          3D
          <meshBasicMaterial color={"red"}/>
        </Text3D>
      </Canvas>
    </div>
  )
}

export default Examples