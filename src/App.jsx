import { Canvas } from "@react-three/fiber"
import MonsterAppearance from "./components/MonsterAppearace/MonsterAppearance"
import { useInView } from "react-intersection-observer"
import WarpPortal from "./components/MonsterAppearace/WarpPortal"
import { useState } from "react"
import MainContents from "./components/MainContents"

function App() {
  const [inViewRef, inView, entry] = useInView({
    triggerOnce:true,
    threshold:0.5
  })
  const [isPortalOpen, openPortal] = useState(true)

  return (<>
    <MainContents inViewRef={inViewRef}/>
    
    <div 
      className="fixed inset-0 overflow-hidden"
    >
      <div className={`absolute w-full h-full flex items-center justify-center ${(inView && isPortalOpen) ? "scale-100":"scale-0"} duration-500`}>
        <WarpPortal/>
      </div>
      <Canvas camera={{far:10.5,position:[0,-1.8,4.5]}}>
        {inView && <MonsterAppearance openPortal={openPortal}/>}
      </Canvas>
    </div>
  </>)
}

export default App
