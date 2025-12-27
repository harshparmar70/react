
import imgcontainer from './imgcontainer'
import lefttextt from './leftcontent'

const page1content = (props) => {
  return (
    <div className='py-10 px-18 h-[90vh] flex gap-10 items-center'>
        {lefttextt()}
        {imgcontainer(props.users)}
    </div>
  )
}

export default page1content