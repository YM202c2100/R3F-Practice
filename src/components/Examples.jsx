import { Canvas, useLoader } from "@react-three/fiber"
import { Center, Text3D } from "@react-three/drei"
import { TextureLoader } from "three"

function Examples(){
  const matcapTexture = useLoader(TextureLoader, "matcapTexture.png")
  return(
    <div>
      <h2 
        className="
          text-center
          text-5xl font-bold text-[#72c371]"
      >
        Examples
      </h2>
      <Canvas className="bg-gray-800">
        <Center>
          <Text3D font={"fonts/helvetiker_regular.typeface.json"}>
            3D Text
            <meshMatcapMaterial matcap={matcapTexture}/>
          </Text3D>
        </Center>
      </Canvas>
    </div>
  )
}

export default Examples