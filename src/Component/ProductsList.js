import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/cartSlice";
import { fetchProducts } from "../Store/productSlice";
import { STATUSES } from "../Store/productSlice";

const ProductList = ({ searchTerm }) => {
  // const [searchTerm, setSearchTerm] = useState("null");
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  const handlePriceRangeChange = (range) => {
    if (selectedCategories.includes(range)) {
      setSelectedCategories(selectedCategories.filter((category) => category !== range));
    } else {
      setSelectedCategories([...selectedCategories, range]);
      fetchProducts();
    }
  };

  // const filterByCategory = (item) => {
  //   if (selectedCategories.length === 0) {
  //     return true;
  //   } else {
  //     return selectedCategories.includes(item.category);
  //   }
  // };

  const getPriceCategory = (price) => {
    if (price <= 0) {
      return "0-100";
    } else if (price <= 100) {
      return "0-100";
    } else if (price <= 500) {
      return "100-500";
    } else if (price <= 1000) {
      return "500-1000";
    } else {
      return "1000";
    }
  };
  const filterBySearchTerm = (item) => {
    const itemName = item.title ? item.title.toLowerCase() : "";
    return itemName.includes(searchTerm.toLowerCase());
  };
  if (status === STATUSES.LOADING) {
    return <h2 className="text-center">Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2 className="text-center">Something went wrong!</h2>;
  }

  return (
    <>
      <div className="opacity-20 bg-slate-400 h-screen w-screen absolute -left-[150%] top-16 z-30" id="bg"></div>

      <div className="container mx-auto p-8">
        {/* <div className="flex place-items-end w-11/11 p-4 border-b border-gray-500 bg-slate-100 relative shadow-md mb-4 ml-36">
          <div className="absolute left-0 top-0 h-full bg-indigo-500" style={{ width: "8px" }}></div>
          <h3 className="text-black opacity-40 font-semibold uppercase tracking-wider text-base ml-2">SEARCH RESULTS:</h3>
        </div> */}

        <div className="flex justify-between gap-4 relative">
          <aside
            className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-4/12 xl-w-3/12 absolute -left-[150%] ease-in-out duration-500 top-0 z-40 h-screen border-gray-700 border bg-blue-400"
            id="sidebar">
            <h2 className="text-lg font-semibold mb-4 px-2  border-gray-500 bg-slate-200">Filter By Price</h2>
            <div className="ml-3">
              <label className="block mb-2 w-fit">
                <input className="mr-2 w-fit" name="0-100" value="0-100" type="checkbox" onChange={() => handlePriceRangeChange("0-100")} />0 - 100
              </label>
              <label className="block mb-2 w-fit">
                <input className="mr-2" name="100-500" value="100-500" type="checkbox" onChange={() => handlePriceRangeChange("100-500")} />
                100 - 500
              </label>

              <label className="block  w-fit mb-2">
                <input className="mr-2" name="500-1000" value="500-1000" type="checkbox" onChange={() => handlePriceRangeChange("500-1000")} />
                500 - 1000
              </label>
              <label className="block mb-2  w-fit">
                <input className="mr-2" name="1000" value="1000" type="checkbox" onChange={() => handlePriceRangeChange("1000")} />
                above 1000
              </label>
            </div>
          </aside>
          {/* <div></div> */}
          <div className="flex justify-between">
            <div className="w-4/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
              {Array.isArray(products?.products) &&
                products?.products
                  .filter((item) => (selectedCategories.length ? selectedCategories.includes(getPriceCategory(item.price)) : item))
                  .filter(filterBySearchTerm)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg shadow-md  relative rounded-8  transition-all duration-300 ease-in-out border-2 border-red-400 overflow-hidden">
                      <div className="absolute left-[-4px] top-[1.6rem] bg-F94E30 text-white text-sm uppercase px-4 py-2 shadow-md bg-indigo-500">{item.brand}</div>
                      <div className="w-full h-52">
                        <img src={item.thumbnail} className="w-full h-full object-cover " alt={item.title} />
                      </div>
                      <div className="p-4">
                        <h4 className="text-xl font-semibold mb-2 text-center line-clamp-1">{item.title}</h4>
                        <p className="font-semibold mb-2 text-gray-500 text-1xl text-center line-clamp-1">{item.description}</p>

                        <div className="flex justify-between">
                          <span className="text-gray-700 font-semibold ">Rating: {item.rating}⭐⭐⭐⭐</span>
                          <span className="text-gray-700 font-semibold">Stock: {item.stock}</span>
                        </div>
                        <p className="text-gray-700 mb-2 text-center flex justify-between mt-2">
                          <ins className="font-semibold">Price: ${item.price}</ins>
                          <del className="text-red-500 pl-2">{item.discountPercentage}% Off</del>
                        </p>

                        <div className="flex justify-between place-items-center">
                          <button onClick={() => handleAdd(item)} className=" mt-4 py-2 px-4 bg-orange-500 text-white rounded-full focus:outline-none focus:shadow-outline-blue">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
