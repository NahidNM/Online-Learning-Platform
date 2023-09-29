import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { FaGoogle } from "react-icons/fa";

const GoogleLogin = () => {
    
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    
    
    // {
    //     googleSignIn()
    //         .then(result => {
    //             const loggedInUser = result.user;
    //             console.log(loggedInUser);
    //             const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
    //             fetch(' https://summer-sports-camp-server.vercel.app/users', {
    //                 method: 'POST',
    //                 headers: {
    //                     'content-type': 'application/json'
    //                 },
    //                 body: JSON.stringify(saveUser)
    //             })
    //                 .then(res => res.json())
    //                 .then(() => {
    //                     navigate(from, { replace: true });
    //                 })
    //         })
    // }
    
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            const googleUser = result.user;
            navigate(from, {replace: true})
            // console.log(googleUser)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    
    
    return (
        <div>
        <div className="divider"></div>
        <div className="w-full my-4 text-center ">
        <button onClick={handleGoogleSignIn}  className='flex items-center gap-2 px-3 py-1 mx-auto my-2 text-xl font-semibold text-blue-700 bg-white border rounded-lg border-zincflex'><FaGoogle  /> Login With Google</button> 
        </div>
    </div>
    );
};

export default GoogleLogin;





