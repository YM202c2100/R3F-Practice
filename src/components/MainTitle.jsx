
function MainTitle(){
  return(
    <div className="relative">
      <h1 
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          text-5xl font-bold text-[#ed6969]
          text-center"
      >
        Practice for R3F
      </h1>
      <img 
        src="GeometryImage.png"
        className="
          w-full md:w-[55%]
          md:ml-10 md:mt-10
          md:rounded-3xl"
      />
    </div>
  )
}

export default MainTitle