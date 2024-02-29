import React, { useState } from 'react'
import Modal from '../Modals/Modal'

const Dialogue = ({ alertmessage }) => {

    const [visible, setVisible] = useState("visible")

    function handleReject() {
        setVisible("hidden")
    }
    function handleApprove() {
        document.getElementById('modal-input').click()
    }

    // sample data
    const data = {
        name: "Raghav Jit",
        rollno: "2104097",
        course: "CSE",
        year: "2025",
        batch: "3rd",
        semester: "6th",
        department: "Road No. 64",
        phonenumber: "2345421",
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

                        <button className={'  btn btn-xs btn-success self-start text-lg font-semibold  '} onClick={handleApprove} >
                            Ok
                        </button>
                        <button className={'  btn btn-xs btn-error self-start text-lg font-semibold  '} onClick={handleReject}>
                            Close
                        </button>
                    </buttons>


                </div>
                <label htmlFor="modal-input"></label>

                <Modal id="modal-input" data={data} />
            </div>
        </>
    )
}

export default Dialogue
