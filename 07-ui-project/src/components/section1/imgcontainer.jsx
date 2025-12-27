import rightcard from "./rightcard"

const imgcontainer = (props) => {
  return (
    <div className="h-full w-2/3 p-6 flex flex-nowrap gap-3 overflow-x-auto rounded-4xl">
        {rightcard(props.users)}
        {rightcard(props.users)}
        {rightcard(props.users)}
        {rightcard(props.users)}
        {rightcard(props.users)}
    </div>
  )
}

export default imgcontainer