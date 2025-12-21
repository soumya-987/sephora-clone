import "./Navbar.css"
import {auth} from "./firebase";
import sephpic from '../assets/sephora.png';
import free from '../assets/image.png';
import {signOut} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js"
import {Link} from "react-router-dom";
function Navbar({user}){
    const handleLogout =async ()=>{
        try{
            await signOut(auth);
            alert("Signed out successfully!");
        }catch(error){
            console.error("Error signing out:",error.message);
        }
    };
    return (
        <>
        <div className="up-navbar">
            <div className="nav-left">
                <i className="bi bi-person fs"></i>
                {user?
                (<span className="nav-link" onClick={handleLogout}>Sign Out ({user.displayName || "User"})</span>)
                :
                (<Link to="/login" className="nav-link">Sign In / Register</Link>)}
                <i className="bi bi-check-square ts"></i>
                <Link to="/beauty" className="nav-link">Beauty Pass</Link>
                <i className="bi bi-geo-alt js"></i>
            </div>
            <div className="nav-right">
                <Link to="/storesandevents" className="nav-link">Stores & Events</Link>
                <i className="bi bi-heart hs"></i>
                <Link to="/wishlist" className="nav-link">Wishlist</Link>
                <i className="bi bi-handbag bs"></i>
                <Link to="/bag" className="nav-link">Bag</Link>
            </div>
        </div>
        <div className="lo-navbar">
            <img src={sephpic} className="seph-pic" />
            <div className="hehe1">
                <div className="hehe2">
                <input type="text" placeholder="Search for brands and products" className="box" />
                <span className="search"><i class="bi bi-search"></i></span>

                </div>
            
                <img src={free} className="free-pic" />

            </div>
        </div>
        <div className="fi-navbar">
            <div class="dropdown" >
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button"  aria-expanded="false">
                    BRANDS
                </a>

                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">rare beauty</a></li>
                    <li><a className="dropdown-item" href="#">Another </a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button"  aria-expanded="false">
                MAKEUP 
                </a>

                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">rare beauty</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </div>
            <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button"  aria-expanded="false">
                SKINCARE
                </a>

                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">rare beauty</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </div>
           
            <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button"  aria-expanded="false">
                HAIR
                </a>

                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">rare beauty</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </div>
            
            <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button"  aria-expanded="false">
                TOOLS & BRUSHES
                </a>

                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">rare beauty</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>

            </div>
            <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button"  aria-expanded="false">
                BATH & BODY
                </a>

                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">rare beauty</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>

            </div>
            <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button"  aria-expanded="false">
                FRAGRANCE
                </a>

                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">rare beauty</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>

            </div>
            <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button"  aria-expanded="false">
                CLEAN
                </a>

                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">rare beauty</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>

            </div>
            <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button"  aria-expanded="false">
                GIFTS
            </a>

            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">rare beauty</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>

            </div>
            <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button"  aria-expanded="false">
                HOLIDAY SALE
                </a>

                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">rare beauty</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>


        </div>
        </>
    )
}
export default Navbar;