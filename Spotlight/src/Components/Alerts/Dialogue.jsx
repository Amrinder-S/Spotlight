import React, { useState } from 'react'

const Dialogue = ({ alertmessage }) => {

    const [visible, setVisible] = useState("visible")
    function handleReject() {
        setVisible("hidden")
        alert("Handle rejection")
        // setMessage({
        //   ...message,
        //   display : "hidden"
        // })
    }


    function handleApprove() {
        setVisible("hidden")
        alert("Handle Approval")
        // setMessage({
        //   ...message,
        //   display : "hidden"
        // })
    }

    return (
        <>
            <div className="container  px-10">

                <div className={"alert " + visible + " w-full  flex justify-between "}>

                    <div className="flex items-center gap-1 text-xl font-bold pl-5 ">
                        <div className="text-white">
                            <span>{alertmessage}</span>
                        </div>


                    </div>
                    <buttons className="flex gap-2 mr-3">

                        <button className={'  btn btn-xs btn-success self-start text-lg font-semibold p-4 '} onClick={handleApprove}>
                            Ok
                        </button>
                        <button className={'  btn btn-xs btn-error self-start text-lg font-semibold p-4 '} onClick={handleReject}>
                            Close
                        </button>
                    </buttons>
                </div>
            </div>
        </>
    )
}

export default Dialogue