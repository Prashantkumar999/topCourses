import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
function Card(props) {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLinkedCourses = props.setLinkedCourses;

    function clickHandler() {
        if (likedCourses.includes(course.id)) {
            // already liked
            setLinkedCourses(likedCourses.filter((id) => id !== course.id));
            toast.warning("liked removed");
        }
        else {
            //not liked
            if (likedCourses.length === 0) {
                setLinkedCourses([course.id]);
            }
            else {
                setLinkedCourses((prev) => [...prev, course.id]);
            }
            toast.success("liked Successfully");

        }

    }

    console.log(course);
    return (
        <div className="w-[300px] bg-bgDark rounded-md overflow-hidden text-white bg-opacity-80 hover:scale-105 transition-all duration-300">
            <div className="relative">
                <img src={course.image.url} alt="courseImage"/>
                <div className=" w-[40px] h-[40px] grid place-items-center bg-white rounded-full absolute right-2 -bottom-4">
                    <button onClick={clickHandler}> {
                        likedCourses.includes(course.id) ? (<FcLike font-size="1.7rem" />) : (<FcLikePlaceholder font-size="1.75rem" />)
                    } </button>
                </div>

            </div>
            <div className="p-4 ">
                <p className="text-white font-semibold text-lg leading-6">
                    {course.title}
                </p>
                <p className="mt-2">
                    {
                        `${course.description.substring(0, 100)}....`
                    }
                </p>
            </div>
        </div>
    )
}


export default Card;