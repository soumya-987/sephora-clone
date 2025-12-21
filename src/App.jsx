
import {Routes,Route,Navigate} from "react-router-dom"
import { auth } from "./components/firebase"
import Login from "./components/pages/Login"
import Home from "./components/pages/Home"
import  { useEffect, useState } from "react"

import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js"
function App() {
  const [user,setuser]=useState(null);
  const [loading,setloading]=useState(true);
  useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
      setuser(currentUser);
      setloading(false);
    });
    return () => unsubscribe();
  },);
  if (loading){ return <div>Loading Sephora...</div>}
  
  return (
    <>
    <Routes>
        <Route path="/" element={user ? <Home user={user}/>: <Navigate to="/login"/>} />
        <Route path="/login" element={!user?<Login/> : <Navigate to="/"/>
        } />
    </Routes>
      <div>
        tail

       
      </div>
    </>
  )
}

export default App
