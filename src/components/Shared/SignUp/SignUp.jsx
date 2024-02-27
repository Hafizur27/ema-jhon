import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";

const SignUp = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password === data.confirm) {
      createUser(data?.email, data?.password)
        .then((loggedUser) => {
          console.log(loggedUser.user);
          reset();
          navigate('/login')

        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      alert("password are not match");
    }
  };

  return (
    <form
      className="border w-1/6 mx-auto mt-10 p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-center text-lg font-bold">Sign Up</h3>
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
      <div className="flex flex-col gap-2 px-4">
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          className=" border py-1 rounded-md outline-none"
          {...register("confirm", { required: true })}
        />
      </div>
      <input
        value="Sign Up"
        className="bg-[#FF99004D] mt-4 px-4 py-1 w-11/12 ms-3 rounded"
        type="submit"
      />
      <h5 className="text-center text-sm py-2">
        Already have an account?{" "}
        <Link to="/login">
          {" "}
          <span className="text-[#FF9900]">Log In</span>
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

export default SignUp;
