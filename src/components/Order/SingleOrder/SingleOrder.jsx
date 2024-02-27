import { FaCartPlus } from "react-icons/fa";
import { json } from "react-router-dom";

const SingleOrder = ({ product, handleAddToCart }) => {
  const { img, name, price, seller, ratings } = product || {};

 

  return (
    <div className="border border-[#95A0A7] rounded-lg relative">
      <div className="p-2">
        {" "}
        <img className="rounded-lg" src={img} alt="" />
      </div>
      <div className="pt-3 pb-12 px-[14px]">
        <h3 className="text-[21px] text-[#0E161A]">
          {name.length > 15 ? name.slice(0, 15) + "...." : name}
        </h3>
        <h4 className="text-[17px] text-[#0E161A]">Price : {price}</h4>
      </div>
      <div className="text-[12px] text-[#2A414F] px-[14px] pb-3">
        <p>Manufacturer : {seller}</p>
        <p>Rating : {ratings} star</p>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        className="bg-[#FFE0B3] border-t border-t-[#95A0A7] rounded-b-lg text-[15px] text-[#0E161A] w-full py-[14px] flex items-center justify-center gap-2 absolute bottom-0"
      >
        Add to cart <FaCartPlus />
      </button>
    </div>
  );
};

export default SingleOrder;
