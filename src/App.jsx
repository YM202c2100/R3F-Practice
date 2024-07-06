import AboutR3F from "./components/AboutR3F"
import MainTitle from "./components/MainTitle"

function App() {
  return (
    <div className="container  mx-auto">
      <MainTitle/>
      <div className="relative md:flex items-center">
        <AboutR3F />
      </div>
    </div>
  )
}

export default App
