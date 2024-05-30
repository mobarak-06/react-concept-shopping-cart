import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import SingleProduct from "./components/SingleProduct";



function App() {
  
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    fetch('./shoppingCart.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  const handleCart = (pd) =>{
    const isExist = cart.find(item => item.id === pd.id);
    if (!isExist) {
      setCart([...cart, pd])
    } else {
      alert('already exist');
    }
  }

  console.log(cart);

  const handleDelete = (id) =>{
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
  }



  return (
    <>

    <div className="main-container flex mx-96 gap-20">
      <div className="cards-container">
        {
          products.map((item) =><SingleProduct key={item.id} product={item} handleCart={handleCart}></SingleProduct>)
        }
      
      </div>
      <div className="cart-container">
      <div className="card w-[500px]  bg-base-100 shadow-xl">
  <div className="card-body">
  <h1 className="text-4xl font-semibold text-center">Cart</h1>
        <div className="cart-title flex  mt-8">
          <h5 className="text-2xl font-semibold ml-20">Name</h5>
          <h5 className="text-2xl font-semibold ml-24">price</h5>
        </div>
        <div className="cart-info">
          {
            cart.map((cartItem, idx) => (
              <div key={idx} className="cart-title flex justify-around bg-sky-200 rounded-lg my-7">
                <h1 className="p-4">{idx + 1}</h1>
                <h1 className="text-lg font-medium p-4"> {cartItem.title.slice(0, 10)} </h1>
                <h1 className="text-lg font-medium ml-8 p-4">{cartItem.price}</h1>
                <button onClick={() => handleDelete(cartItem.id)} className="btn my-2  ">Delete</button>
              </div>
            ))
          }
        </div>
       </div>
      </div>
      </div>
    </div>
   
    </>
  );
}

export default App;
