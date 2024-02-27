import { FaArrowRight } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  deleteCartAllData,
  deleteSingleData,
} from "../../redux/features/cart/cartSlice";

const ReviewOrder = () => {
  // const allData = useSelector((state) => state?.cartData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const storedData = JSON.parse(localStorage.getItem("cart_data"));
  console.log(storedData);

  const totalPrice =
  storedData.reduce((sum, current) => sum + current.price, 0) || 0;

  const totalShipping =
  storedData.reduce((sum, current) => sum + current.shipping, 0) || 0;

  const totalTax = ((totalPrice + totalShipping) * 10) / 100 || 0;

  const grandTotal = totalPrice + totalShipping + totalTax || 0;

  const handleClearCart = () => {
    dispatch(deleteCartAllData());
    localStorage.removeItem("cart_data");
    navigate("/order");
  };

  const handleDelete = (id) => {
    dispatch(deleteSingleData(id));
    const newData = storedData.filter((data) => data.id !== id);
    localStorage.setItem("cart_data", JSON.stringify(newData));
  };

  return (
    <div className="px-20 pt-28 grid grid-cols-[2fr_1fr] gap-5">
      <div className="pe-4 flex flex-col gap-2">
        {storedData.map((data) => (
          <div
            className="grid grid-cols-[1fr_3fr_1fr] items-center gap-3 border border-[#95A0A7] rounded-lg"
            key={data?.key}
          >
            {" "}
            <img
              className="h-[91px] w-[91px] p-2 rounded-[16px]"
              src={data?.img}
              alt=""
            />
            <div>
              <h5 className="text-[#1C2B35] text-[21px]">{data?.name}</h5>
              <p className="text-[15px]">
                <span className="text-[#1C2B35]">Price : </span>{" "}
                <span className="text-[#F90]"> $ {data?.price}</span>{" "}
              </p>
              <p>
                <span className="text-[#1C2B35]">Shipping Charge :</span>
                <span className="text-[#F90]"> $ {data?.shipping}</span>
              </p>
            </div>
            <button
              onClick={() => handleDelete(data?.id)}
              className="flex justify-end pe-4 text-[#f13939]"
            >
              <div className="bg-[#d7a6a6dd] h-10 w-10 rounded-full flex justify-center items-center">
                <RiDeleteBin6Line />
              </div>
            </button>
          </div>
        ))}
      </div>
      <div className="bg-[#FFE0B3] h-[60vh] rounded-md">
        <h4 className="text-[25px] px-11 py-7">Order Summary</h4>
        <div className="grid grid-cols-1 gap-6 ps-6 text-[17px] text-[#2A414F]">
          <p>Selected Items : {storedData.length || 0} </p>
          <p>Total Price : $ {totalPrice} </p>
          <p>Total Shipping Charge : ${totalShipping} </p>
          <p>Tax : $ {totalTax}</p>
          <p className="text-[#0E161A] text-[25px]">
            Grand Total : $ {grandTotal} 
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 pt-12 px-4">
          <button
            onClick={() => handleClearCart()}
            className="bg-[#FF3030] rounded flex items-center justify-center gap-2 py-[14px] text-white text-[17px]"
          >
            Clear Cart <RiDeleteBin5Line />{" "}
          </button>

          <Link
            to="/"
            className="bg-[#F90] rounded flex items-center justify-center gap-2 py-[14px] text-white text-[17px]"
          >
            Review Order <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewOrder;
