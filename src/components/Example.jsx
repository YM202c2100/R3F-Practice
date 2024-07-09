import { OrbitControls, Center } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

function Example({children, camera}){
  return(<>
    <div 
      className="
        w-3/4 max-w-xl aspect-square md:w-2/5
        bg-gray-800
        rounded-3xl"
    >
      <Canvas camera={camera}>
        <OrbitControls/>
        <Center>
          {children}
        </Center>
      </Canvas>
    </div>
  </>)
}

export default Example