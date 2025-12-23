import './Login.css'
import loginpic from "../../assets/login-pic.webp";
import {auth,provider} from '../firebase';
import {signInWithPopup} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js"
function Login(){
    const handleGoogleLogin =async () =>{
        try{
            const result =await signInWithPopup(auth,provider);
            const user =result.user;
            alert("Suceess! Welcome to Sephora, "+user.displayName);
            console.log("Logged in user:",user);
        } catch(error){
            console.error("Login Error:",error.message);
            alert("Login failed: "+error.message)
        }
    }; 
    return(   
        <>
        <div className="log-wrap">
            <img src={loginpic} className="log-pic"/>
            <div className="login-page"></div>
        </div>
        <div className='log-container'>
            <h3>Sephora</h3>
            <h2>Sephora India</h2>
            <p className='grey'>Sign in with Google to proceed</p>
            <input className='email' type="email" placeholder='enter your email'/>
            <button className='otp' onClick={handleGoogleLogin}>Sign in with Google</button>
        </div>
        </>
    )
}
export default Login