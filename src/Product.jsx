import "./Product.css";

function Product({title, price,features2}){
    return(
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price: {price}</h5>
            <h5>{features2.a}</h5>
        </div>
    );
}

export default Product;