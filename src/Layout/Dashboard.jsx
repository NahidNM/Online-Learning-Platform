// import { Helmet } from "react-helmet-async";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers, FaCartPlus } from 'react-icons/fa';
import useCart from "../Hooks/useCart";
import { MdClass } from "react-icons/md";
// import useAdmin from "../Hooks/useAdmin";

// import useVarifyInstructor from "../Hooks/useVarifyInstructor";
import useAuth from "../Hooks/useAuth";
// import useEnroll from "../Hooks/useEnroll";


const Dashboard = () => {
  
    const {user} = useAuth();
    // console.log(user?.photoURL);
      const [cart] = useCart();
    //   const [enrollClasses] = useEnroll()
      
      // const isAdmin = try;
    //   const [isAdmin] = useAdmin();
      // console.log(isAdmin);
      
    // const [isInstructor] = useVarifyInstructor()
    // console.log(isInstructor)
  
      
      
      return (
          <>
              {/* <Helmet>
          <title>Sumner Sports camp | Classes</title>
        </Helmet> */}
        <div className="drawer lg:drawer-open drawer-mobile">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="flex flex-col items-center justify-center drawer-content">
      {/* Page content here */}
      
      <Outlet></Outlet>
      
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    
    </div> 
  
   
    <div className="drawer-side bg-[#D1A054]">
     
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      
      
      <ul className="p-4 menu w-80">
      <div className="mx-auto ">
      <img className="w-24 rounded-full " src={user?.photoURL} alt="" /> 
      <h1 className="font-semibold ">{user?.displayName}</h1>
      <p className="">{user.email}</p>
      </div>
        {/* Sidebar content here */}
        <div>
                              <li><Link to="/dashboard/userhome"><FaHome></FaHome> User Home</Link></li>                         
                              <li>
                                  <NavLink to="/dashboard/mycourse"><FaShoppingCart></FaShoppingCart> My Course
                                      <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                                  </NavLink>
                              </li>
                              <li><NavLink to="/dashboard/enrollCourse"><FaWallet></FaWallet> Enroll Class
                              {/* <span className="badge inl badge-secondary">+{enrollClasses?.length || 0}</span> */}
                              </NavLink></li>
                              <li><NavLink to="/dashboard/payhistory"><FaWallet></FaWallet> Payment History</NavLink></li>
                              
                          </div>
                      
                      <div className="divider"></div>
                      <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                      <li><NavLink to="/courses"><MdClass></MdClass>All Class</NavLink></li>
    </ul>
    
    
   </div>
  </div>
          </>
      );
  };

export default Dashboard;




// {
//     isAdmin ? <>
//         <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
        
//         <li><NavLink to="/dashboard/manageclass"><FaWallet></FaWallet> Manage Classes</NavLink></li>
//         {/* <li><NavLink to="/"><FaBook></FaBook> Manage Bookings(not implemented)</NavLink></li> */}
//         <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
//        </> 
//        :
       
//        isInstructor ? <>
//       <li><NavLink to='/dashboard/instructorhome'><FaHome></FaHome> Instructor Home</NavLink></li>
//       <li><NavLink to="/dashboard/addclass"> <FaUtensils></FaUtensils> Add to Class</NavLink></li>
//       <li><NavLink to="/dashboard/myaddclass"> <MdClass></MdClass>My Add Class</NavLink></li>
//        </>  
//        :
//        <>
//         <li><Link to="/dashboard/userhome"><FaHome></FaHome> User Home</Link></li>                         
//         <li>
//             <NavLink to="/dashboard/myclass"><FaShoppingCart></FaShoppingCart> My Class
//                 <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
//             </NavLink>
//         </li>
//         <li><NavLink to="/dashboard/enrollclass"><FaWallet></FaWallet> Enroll Class
//         {/* <span className="badge inl badge-secondary">+{enrollClasses?.length || 0}</span> */}
//         </NavLink></li>
//         <li><NavLink to="/dashboard/payhistory"><FaWallet></FaWallet> Payment History</NavLink></li>
        
//     </>
// }


