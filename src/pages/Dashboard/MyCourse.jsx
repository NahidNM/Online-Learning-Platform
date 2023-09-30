// import { Helmet } from "react-helmet-async";
import useCart from "../../Hooks/useCart";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const MyCourse = () => {
    
    const [cart, refetch]= useCart();
    
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    
    const { _id } = cart
    console.log(_id);
    
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/cart/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    
    
    const handleEnroll = ()=>{
        
                const EnrollLesson = {
                    classId: _id,
                    email: user.email,
                    rating,
                    course_logo_image,
                    syllabus_info,
                    category,
                    price,
                    instructor_details,
                    
                    course_name,
                  };
              fetch("http://localhost:4000/enroll", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(EnrollLesson),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.insertedId) {
                    fetch(`http://localhost:4000/cart/${_id}`, {
                        method: "DELETE"
                    })
                    .then(res => res.json())
                    .then(data =>{
                        if(data.deletedCount > 0){
                            refetch();
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Successfully Enrolled",
                                showConfirmButton: false,
                                timer: 1500,
                              });
                        }
                    })
                    
                   
                  }
                });
            
            
          };
   
    return (
     
           <div className="w-full ">
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center bg-orange-200 rounded-lg ">
                <h3 className="text-3xl">Total Items: {cart.length}</h3>
                <h3 className="text-3xl">Total Price: ${total}</h3>
                
            </div>
            <div className="w-full overflow-x-auto bg-orange-300 rounded-lg">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-xl">
                            <th>#</th>
                            <th>Course Logo</th>
                            <th>Course Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td className="">
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-12 h-12 mask mask-squircle">
                                            <img src={item.course_logo_image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.course_name}
                                </td>
                                <td className="">${item.price}</td>
                                <td className="gap-3">
                                    <button onClick={()=>handleDelete(item)} className="text-white bg-red-600 btn btn-ghost"><FaTrashAlt></FaTrashAlt></button>
                                    
                                </td>
                                <td>
                                <Link>
                                  <button onClick={()=>handleEnroll()}className="ml-3 text-white bg-orange-400 btn btn-ghost">Enroll</button>
                                      </Link>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
        
    );
};

export default MyCourse;<h1>Dashbord</h1>