import { useAnimations, useGLTF } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { LoopOnce } from "three"

function MonsterAppearance({openPortal, setSlideable}){
  const dragonModel = useGLTF("models/dragon/scene.gltf")
  const animations = useAnimations(dragonModel.animations, dragonModel.scene)

  const modelRef = useRef()
  const [moving, setMoving] = useState(false)
  const [movingSpeed, setSpeed] = useState({y:0.02, z:0.02})

  const {camera} = useThree()

  let appearElapsedTime = 0

  setTimeout(() => {
    setSlideable(true)
    modelRef.current.position.y = -3.5

    camera.lookAt(0, dragonModel.scene.position.y, 0)
    camera.rotation.y -= 20 * (Math.PI/180)

    camera.position.z = -4.5
  }, 12000);

  useFrame(()=>{
    if(moving && modelRef.current){
      modelRef.current.position.z += movingSpeed.z
      modelRef.current.position.y += movingSpeed.y
    }
    
    if(appearElapsedTime < 3 && action_appear.time >= 3){
      appearElapsedTime = action_appear.time
      openPortal(false)
    }
  })

  const action_appear = animations.actions.special
  useEffect(()=>{
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
      setSpeed({y:0, z:0.03})

      camera.far = 100
      camera.updateProjectionMatrix()

      const action_fly = animations.actions.run
      action_fly.crossFadeFrom(action_roar, 0.1)
      action_fly.play()

      // animations.mixer.addEventListener("loop", changeCameraView)
      animations.mixer.removeEventListener("finished", playFly)
    }

    // function changeCameraView(){
    //   modelRef.current.position.y = -3

    //   camera.lookAt(0, dragonModel.scene.position.y, 0)
    //   camera.rotation.y -= 20 * (Math.PI/180)

    //   camera.position.z = -4.5
    // }

    playAppear()
  },[])


  return(<>
    <ambientLight intensity={2}/>
    <primitive ref={modelRef} object={dragonModel.scene} scale={6} position={[0, -3, 0]}/>
  </>)
}

useGLTF.preload("models/dragon/scene.gltf")

export default MonsterAppearance