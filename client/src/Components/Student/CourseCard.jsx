import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext} from '../../Context/AppContext'

const CourseCard = ({course}) => {
  const {currency} = useContext(AppContext);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={course.courseThumbnail} alt={course.courseTitle} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{course.courseTitle}</h3>
        <h3 className="text-sm text-gray-600 mb-3">{course.educator.name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <p className="text-yellow-500 font-medium">4.5</p>
          <div className="flex gap-1">
            {
              [...Array(5)].map((_,i)=>(
                <img key={i} src={assets.star} alt="star" className="w-4 h-4" />
              ))
            }
          </div>
          <p className="text-gray-500 text-sm">(22)</p>
        </div>
        <p className="text-lg font-bold text-gray-900">{currency}{(course.coursePrice - course.discount * course.coursePrice /100).toFixed(2)}</p>
      </div>
    </div>
  )
}

export default CourseCard