import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls, Center, Text3D } from "@react-three/drei"
import { TextureLoader } from "three"

function Examples(){
  const matcapTexture = useLoader(TextureLoader, "matcapTexture.png")
  return(<>
    <div className="w-4/5 max-w-xl h-[300px]">
      <Canvas className="bg-gray-800 rounded-3xl">
        <OrbitControls/>
        <Center>
          <Text3D font={"fonts/helvetiker_regular.typeface.json"}>
            3D Text
            <meshMatcapMaterial matcap={matcapTexture}/>
          </Text3D>
        </Center>
      </Canvas>
    </div>
  </>)
}

export default Examples