import React, { useState } from 'react'

const Product = () => {

  const [quantity, setQuantity] = useState(0);
  const [array, setArray] = useState([]);
//   const [id, setId] = useState(0)
    const Products = [

        {id: 1, name: 'Product-1', price:100},
        
        {id: 2, name: 'Product-2', price:200},
        
        {id: 3, name: 'Product-3', price:300},
        
        ];

    const handlePlus = (key)=>{
      
        setQuantity(quantity + 1)
        let item =[];
        if(key == Products.key ){
            item.push(Products[key])
            setArray(...array,item)
            console.log(array)
        }
    }  
    const handleMinus = ()=>{
        setQuantity(quantity - 1);
    }    
  return (
    <div style={{display:"flex", gap:15,marginTop:10,marginLeft:20}}>
    <div style = {{border:"5px solid gray",height:400,width:350}}>
    Product
   {
    Products.map((el,index)=>{
     return <div  style={{display:"flex", gap:30,marginTop:10,marginLeft:20,marginRight:20,backgroundColor:"gray"}}  key={el.id}>
     <p>{el.name}</p>
     <p>{el.price}</p>
     <div style={{display:'flex',width:70,height:30,gap:6,alignItems:'center',border:"1px solid black",marginTop:10,borderRadius:8,backgroundColor:"blue"}} >
        <button onClick={()=>{
         let key = index+1;
         console.log(key)
         setQuantity(quantity + 1)
         let item =[];
        if(key){
            console.log(key)
            item.push(Products[key])
            setArray(...array,item)
            console.log(array)
        }
        
        }}>+</button>
        <p>{quantity}</p>
        <button onClick={handleMinus}>-</button>
     </div>
     </div>
    })
   }
    </div>

    <div style = {{border:"5px solid gray",height:400,width:350}}>
        Cart
        {
       array.map((el)=>{
       return  <div  style={{display:"flex", gap:30,marginTop:10,marginLeft:20,marginRight:20,backgroundColor:"gray"}}  key={el.id}>
     <p>{el.name}</p>
     <p>{el.price}</p>
     </div>
        })
        } 

        <div style={{border:"1px solid gray",position:"fixed",bottom:0,width:300,height:30,marginLeft:20}}>total:{array.reduce((acc,curr)=>{
          return acc+curr
        },0)}</div>

    </div>
    
    
    </div>
  )
}

export default Product