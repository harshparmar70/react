import nevbar from "./nevbar";
import page1content from "./page1content";

const section1 = (props) => {
  console.log(props)
  return (
    <div className='h-screen w-full '>
      {nevbar()}
      {page1content(props.users)}
    </div>
  )
}

export default section1;