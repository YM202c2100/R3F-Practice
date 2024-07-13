import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect } from "react"
import { LoopOnce } from "three"

function MonsterAppearance(){
  const dragonModel = useGLTF("models/dragon/scene.gltf")
  const animations = useAnimations(dragonModel.animations, dragonModel.scene)

  useEffect(()=>{
    const action_appear = animations.actions.special
    action_appear.setLoop(LoopOnce)
    action_appear.clampWhenFinished = true
    action_appear.play()
  },[])


  return(<>
    <ambientLight intensity={2}/>
    <primitive object={dragonModel.scene} scale={3}/>
  </>)
}

useGLTF.preload("models/dragon/scene.gltf")

export default MonsterAppearance