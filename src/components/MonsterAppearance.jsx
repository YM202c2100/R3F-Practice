import { useGLTF } from "@react-three/drei"


function MonsterAppearance(){
  const dragonModel = useGLTF("models/dragon/scene.gltf")

  return(<>
    <ambientLight intensity={2}/>
    <primitive object={dragonModel.scene} scale={3}/>
  </>)
}

useGLTF.preload("models/dragon/scene.gltf")

export default MonsterAppearance