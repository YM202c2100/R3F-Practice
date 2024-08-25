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
  const [slideContent, setSlide] = useState(false)
  const [slideable, setSlideable] = useState(false)

  return (<>

    {/* state管理用の仮ボタン */}
    {
      slideable &&
      <button 
        className="border-black border z-50 fixed"
        onClick={()=>{setSlide(!slideContent)}}
      >
        toggle
      </button>
    }
      
    
    <div className="overflow-hidden">
      <div 
        className={`
          w-full
          transition-transform duration-300
          ${slideContent ? "translate-x-full":"translate-x-0"}`}
      >
        <MainContents inViewRef={inViewRef}/>
      </div>

      <div 
        className={`
          fixed inset-0 bg-sky-200
          transition-transform duration-300
          ${slideContent ? "translate-x-0":"-translate-x-full"}`}
      ></div>
    </div>
    
    <div 
      className="fixed inset-0 overflow-hidden"
    >
      <div className={`absolute w-full h-full flex items-center justify-center ${(inView && isPortalOpen) ? "scale-100":"scale-0"} duration-500`}>
        <WarpPortal/>
      </div>
      <Canvas camera={{far:10.5,position:[0,-1.8,4.5]}} className={`transition-transform duration-300 ${slideContent && "translate-x-0 opacity-100"} ${slideable && "-translate-x-full opacity-0"}`}>
        {inView && <MonsterAppearance openPortal={openPortal} setSlideable={setSlideable}/>}
      </Canvas>
    </div>
  </>)
}

export default App
