import React from 'react'

// prop State Task 1: Create a React component UserCard that accepts name, age, and location asprops
// and displays them in a card format.

const Usercard = ({name,age,location}) => {

    const styles={
        card:{
            backgroundColor: "#eee9e3",
            border: "1px solid #000000",
            borderRadius: 5,
            padding: '10px',
            width: '200px',
            textAlign: "center"
        },
       age: {
        fontSize:20,
        color:"#000000",
       },
       location:{
        fontSize:20,
        color:"#000000",
       }
    }
  return (
    <>
    <div style={styles.card}>
    <h1 style={styles.name}>{name}</h1>
    <p style={styles.age}>Age:{age}</p>
    <p style={styles.location}>Location:{location}</p>

    </div>
    </>
  )
}
export default Usercard;