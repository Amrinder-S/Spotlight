import React from 'react'

const Modal = ({ id, data }) => {


    let data_arr = Object.entries(data)
    return (
        <>
            <input className="modal-state" id={id} type="checkbox" />
            <div className="modal">
                <label className="modal-overlay"></label>
                <div className="modal-content flex flex-col gap-5">
                    <label htmlFor={id} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    <div className="text-xl font-bold">Details</div>
                    <div className="data p-10">

                        {data_arr.map((item) =>
                            <div className='font-semibold text-lg'><span className='capitalize'>{item[0]}</span>  : {item[1]}</div>
                        )}
                    </div>

                    <div className="flex gap-3">
                        <button className="btn btn-success btn-block">Approve</button>

                        <button className="btn btn-error btn-block">Reject</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal