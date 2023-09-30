// import { Helmet } from "react-helmet-async";
import useCart from "../../Hooks/useCart";
import MyCourseCart from "./MyCourseCart";


const MyCourse = () => {
    
    const [cart, refetch]= useCart();
    
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    
    return (
        
        <div className="">
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center bg-orange-200 rounded-lg ">
                <h3 className="text-3xl">Total Items: {cart.length}</h3>
                <h3 className="text-3xl">Total Price: ${total}</h3>
                
            </div>
            <div className="grid gap-5 mt-10 md:grid-cols-3 md:ml-2">
                {
                    cart?.map((item) =>
                        <MyCourseCart key={item._id} course={item}></MyCourseCart>
                    )
                }
            </div>
        </div>
        
    );
};

export default MyCourse;