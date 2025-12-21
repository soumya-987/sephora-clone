import './Home.css';
import Navbar from "../Navbar";
import Postcard from "../Postcard";
import front from '../../assets/login-pic.webp';
function Home({user}){
    return (
        <>
        <Navbar user={user}/>
        <div className="home-page">
            <img src={front} className="front" />

            

        </div>
        <Postcard></Postcard>
        
        </>
    )

}
export default Home;