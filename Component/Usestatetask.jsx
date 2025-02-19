import React, { useState } from 'react'
// State & Prop Task 2:Create a Counter component with a button that increments a count value usingReact
// state. Display the current count on the screen

// Handle Event Task 1: Create a button in a React component that, when clicked, changes the text from"Not
// Clicked" to "Clicked!" using event handling.


const Usestatetask = () => {

    const[click,setClick]= useState("Not clicked");

//Handel Event task2: Create a form with an input field in React. Display the value of the input field
// dynamically as the user types in it.

    const[userinput,setUserinput]= useState("");
    const handleinput =(e)=>{
    setUserinput(e.target.value)

    }
return (
    <>
    <div>

        <button style={{padding:8 ,borderRadius:2, fontWeight:900,margin:5}} onClick={handleinput}>Click Me</button>

        <p>{click}</p>
    </div>
    {/*Handle Event task2: Create a form with an input field in React. Display the value of the input field
dynamically as the user types in it. */}
    <div>
      <form>

      <input style={{border:"1px solid #000000", padding:"10px"}} type='text' placeholder='Enter Text Here' value={userinput} onChange={handleinput}/>
      </form>

      <p>{userinput}</p>
    </div>

    </>
  )
}
export default Usestatetask;