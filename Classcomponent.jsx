import React, { Component } from 'react'

// Task 2:
//  Create a class component WelcomeMessage that displays "Welcome to React!" andarender() method.
    class WelMsg extends Component{
        render(){
            return <h1>Welcome to React!</h1>
        }
    }

    const Classcomponent = () => {
        return(
           <>
           <WelMsg/>
           </>
        )
    }
export default Classcomponent;
