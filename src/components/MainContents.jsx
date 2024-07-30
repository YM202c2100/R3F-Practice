import AboutR3F from "./AboutR3F/AboutR3F"
import Example from "./Examples/Example"
import MainTitle from "./MainTitle"
import SampleShader from "./Examples/SampleShader"
import SampleText3D from "./Examples/SampleText3D"

function MainContents({inViewRef}){
  return(
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
  )
}

export default MainContents
