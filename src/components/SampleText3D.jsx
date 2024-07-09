import { TextureLoader } from "three"
import { Canvas, useLoader } from "@react-three/fiber"
import { Center, OrbitControls, Text3D } from "@react-three/drei"

function SampleText3D(){
  const matcapTexture = useLoader(TextureLoader, "matcapTexture.png")
  
  return(
    <Canvas>
      <OrbitControls/>
      <Center>
        <Text3D font={"fonts/helvetiker_regular.typeface.json"}>
          3D Text
          <meshMatcapMaterial matcap={matcapTexture}/>
        </Text3D>
      </Center>
    </Canvas>
    
  )
}

export default SampleText3D