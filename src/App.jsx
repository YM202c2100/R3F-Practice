import AboutR3F from "./components/AboutR3F"
import Example from "./components/Example"
import MainTitle from "./components/MainTitle"
import SampleShader from "./components/SampleShader"
import SampleText3D from "./components/SampleText3D"

function App() {
  return (
    <div className="container  mx-auto space-y-14">
      <MainTitle/>

      <div className="relative md:flex items-center">
        <AboutR3F />
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-around">
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
    </div>
  )
}

export default App
