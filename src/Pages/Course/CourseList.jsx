import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import CourseCart from '../../components/CourseCart.jsx';
import HomeLayout from '../../Layout/HomeLayout.jsx'
import { getAllCourses } from '../../Redux/Slices/CourseSlice.jsx';


function CourseList() {
    const dispatch = useDispatch();
    const {courseData} = useSelector((state) => state.course);

    async function loadCourse() {
        await dispatch(getAllCourses())
    }

    useEffect(() => {
        loadCourse();
    }, []);


    return(
        <HomeLayout>
             <div className='min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white'>
                <h1 className='text-center text-3xl font-semibold mb-5 my-10'>
                    Explore the courses made by 
                    <span className='font-bold text-yellow-500 mx-2 '>
                        Industry experts
                    </span>
                    </h1>

                    <div className='mb-10 flex flex-wrap gap-14'>
                       {courseData?.map((element)=> {
                        return <CourseCart key={element._id} data={element}/>
                       })}
                    </div>

             </div>
        </HomeLayout>
    )

}

export default CourseList;