import Postcard from "./Postcard";
import lip from "../assets/lip-balm.avif"
import lip2 from "../assets/lip-balm2.avif"
import blush from "../assets/blush.avif"
import dim from "../assets/dim.avif"
import high from "../assets/high.avif"
function Products(){
    const products =[
        {
            id:1,
            name:"MILK MAKEUP",
            des: "balmade electrolyte hydrated tinted lip balm . 12 ml",
            price: "₹2500",
            image: lip

        },
        {
            id:2,
            name:"BOBBI BROWN",
            des: "Extra lip water shine . 3g",
            price: "₹3450",
            image: lip2
        },
        {
            id:3,
            name:"RARE BEAUTY",
            des: "Extra lip water shine . 3g",
            price: "₹3450",
            image: blush         
        },
        {
            id:4,
            name:"FENTY BEAUTY",
            des: "Extra lip water shine . 3g",
            price: "₹3450",
            image: dim
        },
        {
            id:5,
            name:"RARE BEAUTY",
            des: "Extra lip water shine . 3g",
            price: "₹3450",
            image: high  
        }
    ];
const addtoBag = (product)=>{
    console.log("added to bag",product);
};
const addtoWishlist = (product)=>{
    console.log("added to wishlist",product);
}
return(
    <div className="whole">
        {
            products.map((item)=>(
                <Postcard 
                key={item.id}
                product={item}
                addtoBag={addtoBag}
                addtoWishlist={addtoWishlist}

                />

            ))
        }
    </div>
)
}
export default Products;