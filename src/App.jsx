import AboutR3F from "./components/AboutR3F"
import Example from "./components/Example"
import MainTitle from "./components/MainTitle"

function App() {
  return (
    <div className="container  mx-auto">
      <MainTitle/>

      <div className="relative md:flex items-center">
        <AboutR3F />
      </div>

      <h2 
        className="
          text-center
          text-5xl font-bold text-[#72c371]"
      >
        Examples
      </h2>
      <Example/>
    </div>
  )
}

export default App
