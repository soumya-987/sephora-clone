import "./Postcard.css"
function Postcard({product,addtoBag,addtoWishlist}){
    return(
        <div className="prod-cont">
            <div className="img-wrap">
                <img src={product.image} alt="" />
                <span className="heart" onClick={()=>addtoWishlist(product)}>♥</span>
                <div className="overlay">
                    <button className="bagbut"onClick={()=>addtoBag(product)}>Add to Bag</button>
           
                    <div className="name">{product.name}</div>
                    <div className="des">{product.des}</div>
                    <div className="price">{product.price}</div>
                </div>
            </div>
        </div>
    )
}
export default Postcard;