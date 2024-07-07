import AboutR3F from "./components/AboutR3F"
import Example from "./components/Example"
import MainTitle from "./components/MainTitle"
import SampleText3D from "./components/SampleText3D"

function App() {
  return (
    <div className="container  mx-auto">
      <MainTitle/>

      <div className="relative md:flex items-center">
        <AboutR3F />
      </div>

      <div className="flex flex-col items-center md:flex-row">
        <Example>
          <SampleText3D/>
        </Example>
      </div>
    </div>
  )
}

export default App
