import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    const params = useParams()
    console.log(params);
    console.log(params.id);
    

  return (
    <div>
        <h3 >
            {params.id} CoursesDetail</h3>
    </div>
  )
}

export default CourseDetail