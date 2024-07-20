import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect } from "react"
import { LoopOnce } from "three"

function MonsterAppearance(){
  const dragonModel = useGLTF("models/dragon/scene.gltf")
  const animations = useAnimations(dragonModel.animations, dragonModel.scene)

  useEffect(()=>{
    const action_appear = animations.actions.special

    function playAppear() {
      action_appear.setLoop(LoopOnce)
      action_appear.clampWhenFinished = true

      action_appear.play()

      animations.mixer.addEventListener("finished", playFly)
    }

    function playFly() {
      const action_fly = animations.actions.run
      action_fly.crossFadeFrom(action_appear, 0.5, false).play()
      animations.mixer.removeEventListener("finished", playFly)
    }

    playAppear()
  },[])


  return(<>
    <ambientLight intensity={2}/>
    <primitive object={dragonModel.scene} scale={6} position={[0, -3, 0]}/>
  </>)
}

useGLTF.preload("models/dragon/scene.gltf")

export default MonsterAppearance