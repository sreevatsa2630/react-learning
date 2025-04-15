import Product from "./Product"

function ProductTab(){
    let options = ["hi-tech","durable","fast"];
    let options2 = {a: "hi-tech", b: "durable",c: "fast"};
    return (
        <>
        <Product title="Phone" price= {30000} features={options} features2={options2}/>
        <Product title="Laptop" price= {40000}/>
        <Product title="Pen" price= {10000}/>
        </>
    );
}

export default ProductTab;