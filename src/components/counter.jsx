import React,{useState} from "react";

 import Style from "./Counter.css"

const Counter =()=>{

 const [count,setCount]= useState(0)

 return (

  <div>
   <h1 >Counter App : <span className={count%2===1 ? "red" : "green"}>  {count}</span> </h1>
   <button onClick={()=>setCount(count+1)}>Increament</button>
<button onClick={()=>
  setCount(count-1)}>Decreaement</button>
<button onClick={()=>setCount(count*2)}>Double</button>
  </div>
 )

}

export default Counter;