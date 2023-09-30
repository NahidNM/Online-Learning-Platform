import {  Link, NavLink } from "react-router-dom";
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  
  const { user,  logOut } = useAuth();
  const [cart] = useCart();
  // console.log(cart)
  
  // const [isInstructor] = useVarifyInstructor();
  // const [isInstructor] = true;
  
  // Log Out Handle
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  // Header item
    const navOption = (
        <div className="items-center md:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-medium tracking-wide transition-colors duration-200 border md:px-2 rounded-md border-zinc-400 shadow-2xl bg-cyan-700 text-xl"
                  : "hover:text-green-500 font-medium text-xl"
              }
            >
              {" "}
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? "font-medium tracking-wide transition-colors duration-200 border px-2 rounded-md border-zinc-400 shadow-2xl bg-cyan-700 text-xl"
                  : "hover:text-green-500 font-medium text-xl"
              }
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/instructor"
              className={({ isActive }) =>
                isActive
                  ? "font-medium tracking-wide  transition-colors duration-200 border px-2 rounded-md border-zinc-400 shadow-2xl bg-cyan-700 text-xl"
                  : "hover:text-green-500 font-medium text-xl"
              }
            >
              Instructors
            </NavLink>
          </li>
          {/* {isAdmin ? (
            <li className="text-xl font-semibold">
              <Link to="/dashboard/adminhome">Dashboard</Link>
            </li>
          ) : isInstructor ? (
            <li className="text-xl font-semibold">
              <Link to="/dashboard/instructorhome">Dashboard</Link>
            </li>
          ) : (
            <li className="text-xl font-semibold">
              <Link to="/dashboard/userhome">Dashboard</Link>
            </li>
          )} */}
    
          {/* <li>
            <Link to="/dashboard">
              <button className="gap-2 btn-secondary btn">
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">+{cart?.length || 0}</div>
              </button>
            </Link>
          </li> */}
          
            <li>
            <Link to="/dashboard">
              <button className="gap-2 btn-secondary btn">
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">+{cart?.length || 0}</div>
              </button>
            </Link>
          </li> 
        </div>
      );
    


    
    return (
        <div className="z-10 max-w-screen-xl navbar bg-slate-300" >
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="p-2 mt-3 text-white bg-black shadow menu menu-sm dropdown-content rounded-box"
              >
                {navOption}
              </ul>
            </div>
            <div className="flex items-center gap-2">
              {/* <img src={logo} alt="" className="w-14" /> */}
              <h1 className="hidden text-2xl font-bold normal-case text-amber-500 md:block">
               E-Learning
              </h1>
            </div>
          </div>
          <div className="hidden navbar-center lg:flex">
            <ul className="px-1 menu menu-horizontal">{navOption}</ul>
          </div>
          <div className="navbar-end">
            <div className="flex items-center gap-2 md:gap-4 md:mx-10 md:text-xl">
              {user ? (
                <>
                  <div className="flex items-center gap-2 ">
                    <div
                      className="ml-5 tooltip avatar "
                      data-tip={user?.displayName}
                    >
                      <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} className="" />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="ml-5 ">
                  <FaRegUserCircle size={46}></FaRegUserCircle>
                </div>
              )}
            </div>
            <div>
              {user ? (
                <>
                  <button
                     onClick={handleLogOut}
                    className="text-xl btn btn-ghost"
                  >
                    LogOut
                  </button>
                </>
              ) : (
                <div>
                  <Link to="/login" className="text-xl">
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      
        
    );
};

export default Navbar;