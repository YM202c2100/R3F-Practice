import { Canvas } from "@react-three/fiber"
import AboutR3F from "./components/AboutR3F/AboutR3F"
import Example from "./components/Examples/Example"
import MainTitle from "./components/MainTitle"
import SampleShader from "./components/Examples/SampleShader"
import SampleText3D from "./components/Examples/SampleText3D"
import MonsterAppearance from "./MonsterAppearace/MonsterAppearance"
import { useInView } from "react-intersection-observer"

function App() {
  const [inViewRef, inView, entry] = useInView({
    triggerOnce:true,
    threshold:0.5
  })


  return (<>
    <div className="container  mx-auto space-y-14">
      <MainTitle/>

      <div className="relative md:flex items-center">
        <AboutR3F />
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-around  space-y-10 md:space-y-0">
        <Example title={"3D Text"}>
          <SampleText3D/>
        </Example>
        <Example 
          title={"Shader"}
          camera={{position:[-0.2, 0.8, 0.7]}}
        >
          <SampleShader/>
        </Example>
      </div>

      <div 
        ref={inViewRef}
        className="h-lvh"
      >
        <Canvas>
          {inView && <MonsterAppearance/>}
        </Canvas>
      </div>
    </div>
  </>)
}

export default App
