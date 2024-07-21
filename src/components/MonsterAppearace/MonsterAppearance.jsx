import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { LoopOnce } from "three"
import { vec3 } from "three/examples/jsm/nodes/Nodes.js"

function MonsterAppearance(){
  const dragonModel = useGLTF("models/dragon/scene.gltf")
  const animations = useAnimations(dragonModel.animations, dragonModel.scene)

  const modelRef = useRef()
  const [moving, setMoving] = useState(false)
  const [movingSpeed, setSpeed] = useState(0.01)
  const [lookBack, setLookBack] = useState(false)

  const {camera} = useThree()

  let elapsedTime = 0
  useFrame((state, delta)=>{
    if(moving && modelRef.current){
      modelRef.current.position.z += movingSpeed
    }

    
    if(lookBack){
      camera.lookAt(0, dragonModel.scene.position.y, 0)
      camera.rotation.y += Math.PI/6
      if(elapsedTime < Math.PI){
        elapsedTime += delta*3
        camera.position.x = 4.5*Math.sin(elapsedTime)
        camera.position.z = 4.5*Math.cos(elapsedTime)
      }
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
      action_roar.crossFadeFrom(action_appear, 0.3)
      action_roar.play()

      animations.mixer.removeEventListener("finished", playRoar)
      animations.mixer.addEventListener("finished", playFly)
    }

    function playFly() {
      setSpeed(0.1)
      setLookBack(true)

      camera.far = 100
      camera.updateProjectionMatrix()

      const action_fly = animations.actions.run
      action_fly.crossFadeFrom(action_roar, 0.1)
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