import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";

const LogIn = () => {
  const { signUpUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const form = location.state?.pathname || "/order";

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signUpUser(data.email, data.password)
      .then((loggedUser) => {
        console.log(loggedUser);
        alert("user log in successfully");
        reset();
        navigate(form, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <form
      className="border w-1/6 mx-auto mt-10 p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-center text-lg font-bold">Log In</h3>
      <div className="flex flex-col gap-2 px-4 pt-4">
        <label htmlFor="">Email</label>
        <input
          type="email"
          className=" border py-1 rounded-md outline-none"
          {...register("email", { required: true })}
        />
      </div>
      <div className="flex flex-col gap-2 px-4">
        <label htmlFor="">Password</label>
        <input
          type="password"
          className=" border py-1 rounded-md outline-none"
          {...register("password", { required: true })}
        />
        {/* {errors.exampleRequired && <span>This field is required</span>} */}
      </div>
      <input
        value="Sign Up"
        className="bg-[#FF99004D] mt-4 px-4 py-1 w-11/12 ms-3 rounded"
        type="submit"
      />
      <h5 className="text-center text-sm py-2">
        New to Ema-john?{" "}
        <Link to="/signup">
          {" "}
          <span className="text-[#FF9900]">create New Account</span>
        </Link>
      </h5>
      <div className="flex items-center gap-2 px-4">
        <div className="border w-1/2"></div>
        <div className="mb-1">or</div>
        <div className="border w-1/2"></div>
      </div>
      <button className="border px-2 py-1 w-11/12 ms-3 flex justify-center items-center gap-2">
        <FcGoogle /> Continue With Google
      </button>
    </form>
  );
};

export default LogIn;
