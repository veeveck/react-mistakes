import React from 'react'
import { useState } from 'react'
const M5 = () => {
    const [products,setProducts]=useState([
        {id:1,title:"black sneakers",quantity:1},
        {id:2,title:"red tshirt",quantity:1},
        {id:3,title:"blue jeans",quantity:1}
    ]);

    const handleChoose=(id)=>{
        setSelectedId(id);
    };
    const [selectedId,setSelectedId]=useState(null);
    const selectedProduct=products.find((p)=>p.id===selectedId);
    const handleIncrement=(id)=>{
        setProducts((prev)=>{
            return prev.map((product)=>{
               if(product.id===id){
                return {...product,quantity:product.quantity+1}
               }
               else return product;
            });
        });
    };
    
  return (
    <div>
         <h4>All products</h4>
         {products.map((product)=>(
            <div key={product.id}>
               <span> {product.title}
               <button style={{'marginLeft':20,'marginBottom':20,'marginTop':20}} onClick={() =>(handleChoose(product.id))}>Choose</button>
               </span>
               <div>
                <button style={{'marginRight':20}}>-</button>
                <span>{product.quantity}</span>
                <button style={{'marginLeft':20}} onClick={()=>handleIncrement(product.id)}>+</button>
               </div>
            </div>
         ))}
         <h4>Selected Product</h4>
         <span>{selectedProduct?.title}</span>
         <br/>
         <span>{selectedProduct?.quantity}</span>
    </div>
  )
}

export default M5