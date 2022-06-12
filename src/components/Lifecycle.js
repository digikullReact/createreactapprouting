import React,{useState,useEffect} from 'react'

const Lifecycle = () => {
    const [state,setState]=useState("Hello world");


    const handleClick=()=>{

        setState("I love programming"+(+new Date()))  // state change is happening in here

    }

    // it is reposnible for demonsrating all the lifecycle methods of react component------>

    useEffect(()=>{
        console.log("gets called")

    })
  return (
    <div>
        {state}

<button onClick={handleClick}>
    Click Me
</button>


    </div>
  )
}

export default Lifecycle