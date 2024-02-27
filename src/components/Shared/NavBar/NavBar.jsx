import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/Logo.svg";
import useAuth from "../../hooks/useAuth/useAuth";

const NavBar = () => {
  const { signOutUser, user } = useAuth();
  const navigate = useNavigate()
  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        navigate("/login")
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-[#1C2B35] h-16 text-white flex justify-between items-center px-20">
      <div>
        <Link>
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="flex gap-4">
        <Link to="/order">Order</Link>
        <Link to="/revieworder">Order Review</Link>
        <Link>Mange Inventory</Link>
        {user ? (
          <button onClick={() => handleLogOut()}>Log Out</button>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
