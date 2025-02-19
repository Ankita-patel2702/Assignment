import React, { use } from 'react'

 const Mapmethod = () => {
//List & key: Task1: Create a React component that renders a list of items (e.g., a list of fruit names). Usethe
// map() function to render each item in the list.

    const languages=['C','C++','Java','Paython','Javascript','Rectjs']

//List & Key Task2:Create a list of users where each user has a unique id. Render the user list usingReact
//and assign a unique key to each user.

const userlist=[
    {id:1,name:'raj',salaray:15000},
    {id:2,name:'jaya',salaray:25000},
    {id:3,name:'rekha',salaray:35000},
    {id:4,name:'sakshi',salaray:45000},
    {id:5,name:'riya',salaray:55000}
]

  return (
    <>
    <div>
        <h1>List Iteam Using Map</h1>
 <ul>
        {
            languages.map((iteam, index)=>(
            <li key={index} style={{listStyle:'none', margin:"10px 0px"}}>{iteam}</li>
            ))
        }
</ul>
    </div>
    <div>
        <h1>User List</h1>
        <ul>
                 {
            userlist.map((iteam,index)=>(
                <li key={index.id} style={{listStyle:'none', margin:"10px 0px"}}><strong margin="10px">{iteam.id}</strong>     {iteam.name}     {iteam.salaray}</li>

            ))
        }
        </ul>
    </div>
    </>
  )
}
export default Mapmethod;