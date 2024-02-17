import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, removeItem, clearAll } from "../Store/cartSlice";
import NavBar from "../Component/Navbar";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Footer from "../Footer/Footer";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);
  console.log(items);

  const handleRemove = (productId, price) => {
    dispatch(removeItem({ id: productId, price }));
  };
  const handleIncrease = (productId, price) => {
    dispatch(increase({ id: productId, price }));
  };
  const handleDecrease = (productId, price) => {
    dispatch(decrease({ id: productId, price }));
  };
  const clearAllProduct = () => {
    for (let i = 0; i < items.length; i++) {
      dispatch(clearAll({ id: items[i].id, price: items[i].price }));
    }
  };
  // handleAdd;
  // handleRemove
  return (
    <>
      <NavBar />
      <div className="max-w-3xl mx-auto p-4 mt-28">
        {items.length === 0 ? (
          <div className="text-center text-gray-600 font-black text-3xl ">
            Your cart is empty.
            <div className="mt-10">
              <Link to="/home" className="w-12 rounded-md py-2 px-10 mt-10 bg-indigo-500 text-white font-bold text-xl hover:bg-indigo-600 transition">
                Go shopping now
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-4">
            {items.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden flex mb-4">
                <div className="w-1/4 relative">
                  <img src={product.thumbnail} alt={product.title} className="w-full h-32 object-cover object-center rounded-l-lg" />
                </div>
                <div className="w-3/4 p-4 flex justify-center align-middle place-items-center">
                  <div className="w-1/2">
                    <h5 className="text-lg font-semibold mb-2">{product.title}</h5>
                    <p className="text-gray-700 mb-2">
                      <b>Price:</b> ${product.price}
                    </p>
                  </div>
                  <div className="w-1/2 flex items-center justify-center place-items-center">
                    <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition" onClick={() => handleRemove(product.id, product.price)}>
                      Remove
                    </button>
                  </div>
                  <div className="w-full flex items-center justify-between place-items-center">
                    <div className="flex items-center">
                      <button className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition" onClick={() => handleDecrease(product.id, product.price)}>
                        -
                      </button>
                      <span className="mx-2">{product.quantity}</span>
                      <button className="bg-indigo-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 transition" onClick={() => handleIncrease(product.id, product.price)}>
                        +
                      </button>
                    </div>
                    <div className="font-semibold">Total Price: ${product.price * product.quantity}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div className="flex justify-between  bg-slate-100 border-2 pr-6 text-right p-2 place-items-center">
            <button className="flex items-center border-red-500  bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition" onClick={clearAllProduct}>
              <FaTrash className="mr-2 " />
              Clear All
            </button>
            <div className="flex flex-col items-end flex-1">
              <div className="text-2xl font-bold p-4 h-10">Total Cart Price: ${total}</div>
              <button className="w-2/6 rounded-md py-2  mt-4 bg-indigo-500 text-white font-bold text-xl hover:bg-indigo-600 transition">Check out</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
