import { Canvas } from "@react-three/fiber"
function AboutR3F(){
  return(<>
    <div>
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
    
    <Canvas>
      <mesh>
        <torusKnotGeometry/>
        <meshNormalMaterial/>
      </mesh>
    </Canvas>
  </>)
}

export default AboutR3F