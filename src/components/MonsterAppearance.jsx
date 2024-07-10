import { OrbitControls, useGLTF } from "@react-three/drei"


function MonsterAppearance(){
  const dragonModel = useGLTF("models/dragon/scene.gltf")

  return(<>
    <OrbitControls/>
    <ambientLight intensity={5}/>
    <primitive object={dragonModel.scene} scale={3}/>
  </>)
}

export default MonsterAppearance