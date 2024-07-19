import { OrbitControls, Center } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

function Example({children, title, camera}){
  return(<>
    <div 
      className="
        relative
        w-3/4 max-w-xl aspect-square md:w-2/5
        bg-gray-800
        rounded-3xl"
    >
      <h3 
        className="
          absolute top-2 left-1/2 -translate-x-1/2
          text-2xl text-lime-200"
      >
        {title}
      </h3>
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