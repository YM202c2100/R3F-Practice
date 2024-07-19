import { TextureLoader } from "three"
import { useLoader } from "@react-three/fiber"
import { Text3D } from "@react-three/drei"

function SampleText3D(){
  const matcapTexture = useLoader(TextureLoader, "matcapTexture.png")
  
  return(
    <Text3D font={"fonts/helvetiker_regular.typeface.json"}>
      Drag me!
      <meshMatcapMaterial matcap={matcapTexture}/>
    </Text3D>
  )
}

export default SampleText3D