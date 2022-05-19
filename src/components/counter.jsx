import React,{useState} from "react";

const Counter =()=>{

 const [count,setCount]= useState(0)

 return (

  <div>
   <h1>Counter App : {count}</h1>
   <button onClick={()=>setCount(count+1)}>Increament</button>
<button onClick={()=>setCount(count-1)}>Decreaement</button>
<button onClick={()=>setCount(count*2)}>Double</button>
  </div>
 )

}

export default Counter;