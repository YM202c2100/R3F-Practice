import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

function RotationMesh(){
  const meshRef = useRef()
  useFrame((state, delta)=>{
    if(meshRef.current){
      meshRef.current.rotation.x += delta * 0.4
      meshRef.current.rotation.y += delta * 0.5
      meshRef.current.rotation.z += delta * 0.1
    }
  })

  return(
    <mesh ref={meshRef} scale={1.5}>
      <torusKnotGeometry/>
      <meshNormalMaterial/>
    </mesh>
  )
}

export default RotationMesh