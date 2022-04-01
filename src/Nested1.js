import { useState } from "react";

const Nested1 = ({nested1Props})=>{
  const [nestedState, setNestedState] = useState('nestedState')

const handleClick = () => {
  nested1Props = Math.random();
  console.log(nested1Props)

}
console.log("Nested1 has rendered")

return <div>App Props: {nested1Props}
nested State: {nestedState}
<button onClick={handleClick}>change nested1Props from Nested1</button>
<button onClick={()=>setNestedState(Math.random())}> change nestedState from Nested1</button>
</div>
  
}
export default Nested1