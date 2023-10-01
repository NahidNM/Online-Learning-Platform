import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

import bg from "../../../../public/Login/bg.jpg";
import { useForm } from "react-hook-form";
import GoggleLogin from "../SocialLogin/GoogleLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    const { email, password } = data;
    console.log(data);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Logged in",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-no-repeat bg-cover pd-16 md:p-20"
    >
    
      <div className="relative py-20 md:mx-60 md:left-44">
        <div>
          <div className="flex flex-col gap-2 px-10 py-5 bg-blue-500 w-96 rounded-xl">
            <h1 className="text-3xl text-center text-white ">Login Here!!</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <label htmlFor="mail" className="text-xl text-white">
                Enter Email id
              </label>
              <input
                type="email"
                id="mail"
                placeholder="Enter mail here"
                className="w-full max-w-xs input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
              <label htmlFor="pass" className="text-xl text-white">
                Enter password
              </label>
              <input
                type="password"
                id="pass"
                placeholder="Enter your password"
                className="w-full max-w-xs input input-bordered "
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
              <input
                type="submit"
                value="Login"
                className="w-full max-w-xs my-5 bg-red-700 input input-bordered btn"
              />{" "}
            </form>
            <p className="text-xl text-white">{error}</p>
            <GoggleLogin></GoggleLogin>
            <p className="text-white">
              Not Registered yet ?
              <Link to={"/signup"} className="text-blue-300 underline">
                {" "}
                Signup
              </Link>{" "}
              now.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
