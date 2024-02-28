import React from 'react'

const Dialogue = ( {alertmessage ,  btnclose, btnaccept , visibility}) => {
  return (
    <>
    <div className="container  px-10">

    <div className={"alert "+visibility+" w-full  flex justify-between "}>
  
    <div className="flex items-center gap-1 text-xl font-bold pl-5 ">
          <div className="text-white">
              <span>{alertmessage}</span>
          </div>
  
  
      </div>
      <buttons className= "flex gap-2 mr-3">
  
      <button className={'  btn btn-xs btn-success self-start text-lg font-semibold p-4 '} onClick={btnaccept}>
            Ok
      </button>
      <button className={'  btn btn-xs btn-error self-start text-lg font-semibold p-4 '} onClick={btnclose}>
            Close
      </button>
      </buttons>
      </div>
      </div>
    </>
  )
}

export default Dialogue