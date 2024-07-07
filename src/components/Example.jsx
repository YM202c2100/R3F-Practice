import { Canvas } from "@react-three/fiber"
import { OrbitControls, Center } from "@react-three/drei"

function Example({children}){
  return(<>
    <div className="w-4/5 max-w-xl aspect-square md:w-2/5">
      <Canvas className="bg-gray-800 rounded-3xl">
        <OrbitControls/>
        <Center>
          {children}
        </Center>
      </Canvas>
    </div>
  </>)
}

export default Example