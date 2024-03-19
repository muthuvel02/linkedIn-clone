import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login";
import { auth } from "./Firebase/firebase";
import Widgets from "./components/Widgets";

function App() {
  const user = useSelector(selectUser);
  console.log(user);
const dispatch = useDispatch();
  useEffect (() =>
  { 
    auth.onAuthStateChanged((userAuth) =>
    {
      if(userAuth)
      {
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoUrl:userAuth.photoURL,
        }))
      }
      else
      {
        dispatch(logout());
      }
    })
  },[])

  // Check if user is logged in, if not render the Login component, else render the main content
  return (
    <div className='app__container'>
      {!user ? (
        <Login />
      ) : (
        <div className='App'>
          <Header />
          <div className='app__body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
