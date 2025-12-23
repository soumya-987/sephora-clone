import './Home.css';
import Navbar from "../Navbar";

import front from '../../assets/login-pic.webp';
import Products from "../Products";
function Home({user}){
    return (
        <>
        <Navbar user={user}/>
        <div className="home-page">
            <img src={front} className="front" />

            

        </div>
        <Products></Products>
        
        </>
    )

}
export default Home;