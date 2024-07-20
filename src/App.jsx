import { Canvas } from "@react-three/fiber"
import AboutR3F from "./components/AboutR3F/AboutR3F"
import Example from "./components/Examples/Example"
import MainTitle from "./components/MainTitle"
import SampleShader from "./components/Examples/SampleShader"
import SampleText3D from "./components/Examples/SampleText3D"
import MonsterAppearance from "./components/MonsterAppearace/MonsterAppearance"
import { useInView } from "react-intersection-observer"
import WarpPortal from "./components/MonsterAppearace/WarpPortal"

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
      <div ref={inViewRef} className="h-10 bg-slate-400"></div>
    </div>
    
    <div 
      className="fixed inset-0 overflow-hidden"
    >
      <div className={`absolute w-full h-full flex items-center justify-center ${inView ? "scale-100":"scale-0"} duration-500`}>
        <WarpPortal/>
      </div>
      <Canvas camera={{far:10.5,position:[0,-1.8,4.5]}}>
        {inView && <MonsterAppearance/>}
      </Canvas>
    </div>
  </>)
}

export default App
