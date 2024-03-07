import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Vortex } from "react-loader-spinner";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation(); 
    // console.log(location)
    if(loading){
        // return ;     
        //   return <progress className="w-56 progress"></progress>;
        return  <div className='flex items-center justify-center pt-20 text-2xl font-semibold'>
            <Vortex
      visible={true}
      height="100"
      width="100"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
    /></div>
    }
       if(user){
        return children;
       }
       return <Navigate to={"/login"} state={{from: location}}  replace></Navigate>
};

export default PrivateRoute;