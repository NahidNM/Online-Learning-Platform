import ReactStars from "react-stars";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
import { Link, NavLink } from "react-router-dom";

const MyCourseCart = (props) => {
  const [cart, refetch] = useCart();
  const { user } = useAuth();

  const {
    course_name,
    category,
    rating,
    enrolled_students,
    course_logo_image,
    price,
    syllabus_info,
    instructor_details,
    reviews,
    classId,
    _id,
  } = props.course;

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleEnroll = () => {
    const classLesson = {
      cart: _id,
      ConstantClassId: classId,
      email: user.email,
      rating,
      course_logo_image,
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
      body: JSON.stringify(classLesson),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          fetch(`http://localhost:4000/cart/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                refetch();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Successfully Enrolled",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
  };

  return (
    <div className="flex flex-col gap-2 px-5 py-5 text-gray-700 bg-cyan-400 rounded-2xl">
      <img className="w-80 rounded-t-2xl" src={course_logo_image} alt="" />
      <div className="flex justify-between ">
        <div className="flex items-center gap-2 ">
          <h1 className="text-lg font-bold ">{rating}</h1>
          <ReactStars
            value={rating}
            color1={"gray"}
            size={20}
            color2={"#ffd700"}
          />
          <h1>({reviews?.length})</h1>
        </div>
        <h1 className="text-xl font-bold ">{price}$</h1>
      </div>
      <h1 className="text-xl ">{course_name}</h1>
      <div className="flex items-center justify-between">
        <h1 className="text-xl">Category: {category}</h1>
        <h1 className="text-xl">Enrolled: {enrolled_students}</h1>
      </div>
      <div className="flex items-center justify-between ">
        <button
          onClick={() => handleDelete()}
          className="pt-4 bg-orange-500 border-0 border-b-4 border-indigo-600 btn btn-outline card-actions"
        >
          DELETE
        </button>
        
        {/* Enrool systems */}
        
        <button
          onClick={() => handleEnroll()}
          className="pt-4 bg-orange-500 border-0 border-b-4 border-indigo-600 btn btn-outline card-actions"
        >
          Enroll
        </button>
        
        <Link to={`/dashboard/payments/${_id}`}> PAY</Link>
        
      </div>
    </div>
  );
};

export default MyCourseCart;
