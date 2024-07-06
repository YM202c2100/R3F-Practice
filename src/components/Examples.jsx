import { Canvas } from "@react-three/fiber"
import { Center, Text3D } from "@react-three/drei"

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
        <Center>
          <Text3D font={"fonts/helvetiker_regular.typeface.json"}>
            3D Text
            <meshBasicMaterial color={"red"}/>
          </Text3D>
        </Center>
      </Canvas>
    </div>
  )
}

export default Examples