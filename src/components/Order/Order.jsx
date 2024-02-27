import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/features/product/productSlice";
import SingleOrder from "./SingleOrder/SingleOrder";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import {
  addToCart,
  deleteCartAllData,
} from "../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

const Order = () => {
  const { products, cartData } = useSelector((state) => state);
  const dispatch = useDispatch();
  const storedData = JSON.parse(localStorage.getItem("cart_data"));

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleAddToCart = (product) => {
    const existingCart = cartData?.find((pro) => pro.id === product?.id);
    if (!existingCart) {
      dispatch(addToCart(product));

      localStorage.setItem("cart_data", JSON.stringify([...cartData, product]));
    } else {
      alert("added");
    }
  };

  const handleDeleteCart = () => {
    dispatch(deleteCartAllData());
    localStorage.removeItem("cart_data");
  };

  const totalPrice = storedData?.reduce(
    (sum, current) => sum + current.price,
    0
  ) || 0;
  

  const totalShipping = storedData?.reduce(
    (sum, current) => sum + current.shipping,
    0
  ) || 0;

  const totalTax = parseFloat(((totalPrice + totalShipping) * 10) / 100) || 0;

  const grandTotal = totalPrice + totalShipping + totalTax || 0;

  return (
    <div className="grid grid-cols-[4fr_1fr] border">
      <div className="px-20 pt-28 grid lg:grid-cols-3 gap-11">
        {products?.data?.map((product) => (
          <SingleOrder
            key={product?.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="bg-[#FFE0B3] h-[60vh] fixed top-15 right-0">
        <h4 className="text-[25px] px-11 py-7">Order Summary</h4>
        <div className="grid grid-cols-1 gap-6 ps-6 text-[17px] text-[#2A414F]">
          <p>Selected Items : {storedData?.length || 0} </p>
          <p>Total Price : ${totalPrice} </p>
          <p>Total Shipping Charge : ${totalShipping} </p>
          <p>Tax : $ {totalTax}</p>
          <p className="text-[#0E161A] text-[25px]">
            Grand Total : $ {grandTotal}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 pt-12 px-4">
          <button
            onClick={() => handleDeleteCart()}
            className="bg-[#FF3030] rounded flex items-center justify-center gap-2 py-[14px] text-white text-[17px]"
          >
            Clear Cart <RiDeleteBin5Line />{" "}
          </button>

          <Link
            to="/revieworder"
            className="bg-[#F90] rounded flex items-center justify-center gap-2 py-[14px] text-white text-[17px]"
          >
            Review Order <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Order;
