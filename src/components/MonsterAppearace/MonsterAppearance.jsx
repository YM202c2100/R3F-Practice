import { useAnimations, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { LoopOnce } from "three"

function MonsterAppearance(){
  const dragonModel = useGLTF("models/dragon/scene.gltf")
  const animations = useAnimations(dragonModel.animations, dragonModel.scene)

  const modelRef = useRef()
  const [moving, setMoving] = useState(false)
  const [movingSpeed, setSpeed] = useState(0.01)

  useFrame(()=>{
    if(moving && modelRef.current){
      modelRef.current.position.y += movingSpeed
      modelRef.current.position.z += movingSpeed
    }
  })

  useEffect(()=>{
    const action_appear = animations.actions.special
    const action_roar = animations.actions.skill01

    function playAppear() {
      action_appear.setLoop(LoopOnce)
      action_appear.clampWhenFinished = true

      action_appear.play()

      animations.mixer.addEventListener("finished", playRoar)
    }

    function playRoar() {
      setMoving(true)

      action_roar.setLoop(LoopOnce)
      action_roar.clampWhenFinished = true
      action_roar.crossFadeFrom(action_appear, 0.5)
      action_roar.play()

      animations.mixer.removeEventListener("finished", playRoar)
      animations.mixer.addEventListener("finished", playFly)
    }

    function playFly() {
      setSpeed(0.02)

      const action_fly = animations.actions.run
      action_fly.crossFadeFrom(action_roar, 0.5)
      action_fly.play()

      animations.mixer.removeEventListener("finished", playFly)
    }

    playAppear()
  },[])


  return(<>
    <ambientLight intensity={2}/>
    <primitive ref={modelRef} object={dragonModel.scene} scale={6} position={[0, -3, 0]}/>
  </>)
}

useGLTF.preload("models/dragon/scene.gltf")

export default MonsterAppearance