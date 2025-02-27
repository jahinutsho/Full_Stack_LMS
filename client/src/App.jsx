import React from 'react'
import { Routes , Route, useMatch} from 'react-router-dom'
import Home from "./Pages/Student/Home"
import CourseList from "./Pages/Student/CoursesList"
import CourseDetails from "./Pages/Student/CourseDetails"
import MyEnrollments from "./Pages/Student/MyEnrollments"
import Educator from "./Pages/Educator/Educator"
import Dashboard from "./Pages/Educator/Dashboard"
import MyCourses from "./Pages/Educator/MyCourses"
import AddCourse from "./Pages/Educator/AddCourse"
import StudentEnrolled from "./Pages/Educator/StudentEnrolled"
import Player from "./Pages/Student/Player"
import Loading from "./Pages/Student/Loading"
import Navbar from './Components/Student/Navbar'

const App = () => {
  const isEducatorRoute = useMatch("/educator/*")
  return (
    <div className='text-default min-h-screen bg-white'>
    {
      !isEducatorRoute && <Navbar/>
    }
     <Routes>
       {/* Student Routes */}
       <Route path="/" element={<Home/>} />
       <Route path="/course-list" element={<CourseList/>} />
       <Route path="/course-list/:input" element={<CourseList/>} />
       <Route path="/course/:id" element={<CourseDetails/>} />
       <Route path="/my-enrollments" element={<MyEnrollments/>} />
       <Route path='/player/:id' element={<Player/>}/>
       <Route path='/loading/:path' element={<Loading/>} />
       
       {/* Educator Routes */}
       <Route path="/educator" element={<Educator/>}>
         <Route path="dashboard" element={<Dashboard/>} />
         <Route path="courses" element={<MyCourses/>} />
         <Route path="add-course" element={<AddCourse/>} />
         <Route path="students-enrolled" element={<StudentEnrolled/>} />
       </Route>
       
     </Routes>
    </div>
  )
}

export default App