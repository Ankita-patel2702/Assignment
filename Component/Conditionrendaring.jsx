import React, { useState } from 'react'
//Conditional Rendring Task 1: Create a component that conditionally displays a login or logout button based
// onthe user’s login status.


const Conditionrendaring = () => {
    const[login,setLogin]=useState(true);

    const handleEvent =()=>{
        setLogin(!login)
    }

    // Conditional Rendring Task 2:Create a form with an input field in React. Display the value of the input field
    // dynamically as the user types in it.

    const [age, setAge] = useState(0);
    const handleAge = (e) => {
        setAge(e.target.value);
      };
return (
    <>
    <div>
     {
     login?(<button onClick={handleEvent}>Logout</button>) : (<button onClick={handleEvent}>Login</button>)
     }
</div>
<br></br>
{/*  Conditional Rendring Task 2:Create a form with an input field in React. Display the value of the input field
dynamically as the user types in it. */}
<div>
    <input type="text" id="age" value={age} onChange={handleAge}/>
      <p>
        {age >= 18
          ? 'You are eligible to vote.'
          : 'You are not eligible to vote.'}
      </p>
</div>
    </>
  )
}
export default Conditionrendaring;
