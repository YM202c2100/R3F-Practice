import { Canvas } from "@react-three/fiber"
import { OrbitControls, Center } from "@react-three/drei"

function Examples({children}){
  return(<>
    <div className="w-4/5 max-w-xl h-[300px]">
      <Canvas className="bg-gray-800 rounded-3xl">
        <OrbitControls/>
        <Center>
          {children}
        </Center>
      </Canvas>
    </div>
  </>)
}

export default Examples