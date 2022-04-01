const Nested2 = ({appState, setAppState})=>{
  const handleClick = () => {
    setAppState(Math.random())
  }
  console.log("Nested2 has rendered")

return <div> appState: {appState} 
<button onClick={handleClick}> change state </button></div>
}
export default Nested2