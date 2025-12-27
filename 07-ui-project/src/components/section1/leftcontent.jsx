
import lefttext from './lefttext'
import arroww from './arrow'
const lefttextt = () => {
  return (
    <div className="h-full w-1/3 flex flex-col justify-between ">
        {lefttext()}
        
          {arroww()}
          
    </div>
  )
}

export default lefttextt