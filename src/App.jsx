import AboutR3F from "./components/AboutR3F"
import Examples from "./components/Examples"
import MainTitle from "./components/MainTitle"

function App() {
  return (
    <div className="container  mx-auto">
      <MainTitle/>
      <div className="relative md:flex items-center">
        <AboutR3F />
      </div>
      <Examples/>
    </div>
  )
}

export default App
