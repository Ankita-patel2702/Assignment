// //import logo from './logo.svg';
// import './App.css';
// //import { reportWebVitals } from 'web-vitals';
// import Jsxfilecomponent from './Component/Jsxfilecomponent';
// //import { Component } from 'react';
// import Classcomponent from './Component/Classcomponent';
// import Usercard from './Component/Usercard';
// //import Usestatetask from './Component/Usestatetask';
// import Conditionrendaring from './Component/Conditionrendaring';
// //import Mapmethod from './Component/Mapmethod';
// //import Stateuse from './Component/Stateuse';
// import Routerdom from './Component/Routerdom';
// import Form  from './Component/Form';
// import Didmount from './Component/Didmount';
// import DidmountData from './Component/DidmountData';
// import Hooks1 from './Component/Hooks1';
// import Hooks2 from './Component/Hooks2';
// // import { increment, decrement } from './features/counterSlice';
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Table from './Component/Table';
// import CurdApp from './CurdApp';

// import React from 'react';
// // import { AuthProvider } from './page/AuthContext';
// // import AuthStatus from './page/AuthStatus';

// import { Provider } from 'react-redux';
// import store from './page/store';
// //import CounterReducer from './page/CounterReducer';
// import Counter from './page/Counter';

// //Redux All Task Start

import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./Component/Counter";
import store from "./store";
import AddTodos from "./Component/AddTodos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import RecAddTodos from "./Component/RecAddTodos";
import Home from "./Component/Home";

//Redux Task End

// //Route Set HOME CONTACT ABOUT PAGE

// // function Home() {
// //   return <h2>Home Page</h2>;
// // }

// // function About() {
// //   return <h2>About Page</h2>;
// // }

// // function Contact() {
// //   return <h2>Contact Page</h2>;
// // }

// // // Route End

// // function App() {

// // // {*Task 1:Create a functional component Greeting that accepts a name as a prop and
// // // displays "Hello, [name]!"*}

// // const Greeting = ({ name }) => {

// //   return

// //   <h1>Hello, {name}!</h1>;


// //  };


// // return (
// //    <>
// // {/* React Router
// // Task 1 $ 2: Set up a basic React Router with two routes: one for a Home page and one for an
// // About page. Display the appropriate content based on the URL. */}
// //     <Router>
// //       <nav style={{ textAlign: 'center', margin: '20px' }}>

// //         <Link to="/" style={{ margin: '10px' }}>Home</Link>
// //         <Link to="/about" style={{ margin: '10px' }}>About</Link>
// //         <Link to="/contact" style={{ margin: '10px' }}>Contact</Link>
// //       </nav>
// //     <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/contact" element={<Contact />}/>
// //       </Routes>
// //     </Router>
// //    <div>
// //     <h1>Hello,React!</h1>

// //     <Jsxfilecomponent/>

// //    </div>
// //    <div>
// //     <Greeting name="om"></Greeting>

// //   </div>

// //   <Classcomponent/>

// //  <div className='demo'>
// //    <div>
// //   <Usercard name="om" age={10} location="surat"/>
// //   </div><br></br>
// //   <div>
// //   {/* <Usestatetask></Usestatetask> */}
// //   </div>
// //   <Conditionrendaring>
// //   </Conditionrendaring>
// //   {/* <Mapmethod></Mapmethod>
// //    <Stateuse></Stateuse> */}
// //  </div>
// // <Routerdom></Routerdom>
// // <Form></Form>
// // {/* <Didmount></Didmount>
// // <DidmountData></DidmountData> */}
// // {/* <Hooks1></Hooks1>
// // <Hooks2></Hooks2> */}
// // <Table></Table>

// // <CurdApp></CurdApp>
// //    </>

// //   );

// // }
// // export default App;



// import { useEffect, useState } from 'react';
// import { onAuthStateChanged, signOut } from 'firebase/auth';
// import {auth} from "./firebase";
// import Login from './Login';
// import CrudF from './CrudF';
// import CurdApp from './CurdApp';

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, currentUser => {
//       setUser(currentUser);
//     });
//     return () => unsub();
//   }, []);

//   return (
//     <div>
//       {user ? (
//         <>
//           <h3>Welcome, {user.displayName}</h3>
//           <button onClick={() => signOut(auth)}>Logout</button>
//           <CrudF />
//         </>
//       ) : (
//         <Login setUser={setUser} />
//       )}
//     </div>

//   );
//   <CurdApp></CurdApp>
// }

// export default App;

//Firebase Auth + JSON Server CRUD

// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import Auth from "./page/Auth";
// // import Table from "./page/Table";
// // import { auth } from "./firebase";
// // import { useAuthState } from 'react-firebase-hooks/auth';
// import Spinner from "./page/Spinner1";
// function App() {
//   // const [user] = useAuthState(auth);

//   return (
//     <div className="App">
//       <h1>Firebase Auth + JSON Server CRUD</h1>
//       {/* <Auth />
//       <Table /> */}
//       <Spinner></Spinner>
//     </div>
//   );
// }

// App.js

//Contexxt API Task 1 start
{/*import React from 'react';
import { ThemeProvider } from './page/Themecontext';
import ThemeToggleButton from './page/ThemeToggleButton';
import ThemedBox from './page/ThemedBox';

function App() {
return (
  <ThemeProvider>
    <div>
      <ThemeToggleButton />
      <ThemedBox />
    </div>
  </ThemeProvider>
);
*/}
//context API task 2 end

//context API Task 2:Use the Context API to create a global user authentication system. If the user is
//logged in, display a welcome message; otherwise, prompt them to log in //start//

// function App() {
// return (
//   <AuthProvider>
//     <div style={{ padding: '2rem' }}>
//       <AuthStatus />
//     </div>
//   </AuthProvider>
// );
// }

//contextAPI Task 2 End

//Redux All Practical Start code to End

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />}>
                      <Route path="/" element={<Counter />}></Route>
                      <Route path="/task2" element={<AddTodos />}></Route>
                      <Route
                          path="/task3"
                          element={
                              <RecoilRoot>
                                  <RecAddTodos />
                              </RecoilRoot>
                          }
                      ></Route>
                  </Route>
              </Routes>
          </BrowserRouter>
      </Provider>
  );
}


export default App;