import { Canvas } from "@react-three/fiber"
import RotationMesh from "./RotationMesh"

function AboutR3F(){
  return(<>
    <div className="md:w-1/2">
      <h2 
        className="
          mb-10
          text-5xl font-bold text-[#4f5584]
          text-center"
      >
        React-three-fiber(R3F) とは
      </h2>
      <p className="text-xl font-medium mx-5">
        webサイト上で3Dモデルを簡単に扱うためのJavaScriptライブラリのひとつにThree.jsがある。React-three-fiberは、そのthree.jsをReactでより簡単に使用できるようにしたReactレンダラーである。
      </p>
    </div>

    <div className="absolute top-0 -z-10 md:static  w-full h-full md:h-[300px] md:w-1/2  blur-sm">
      <Canvas>
        <RotationMesh/>
      </Canvas>
    </div>
  </>)
}

export default AboutR3F