
function Example({children}){
  return(<>
    <div 
      className="
        w-3/4 max-w-xl aspect-square md:w-2/5
        bg-gray-800
        rounded-3xl"
    >
      {children}
    </div>
  </>)
}

export default Example