
// Test Comment
import React, { useState } from 'react'
import Button from './Button'

function FormSplitBill({ selectedFriend }) {

    const [bill, setBill] = useState("");
    const [paidbyUser, setPaidByUser] = useState("");
    const paidByFriend = bill ? bill - paidbyUser : "";


    const handleSubmit = (event) => {
        event.preventDefault(); 
    }

    return (
        <div className='tw-w-[100%] '>
            <h1 className='tw-pt-5 sm:tw-px-12 tw-pl-2 tw-uppercase tw-text-[22px] tw-font-medium tw-text-blue-950'>Split a Bill with {selectedFriend.name}</h1>
            <div className='tw-mt-5 tw-flex tw-justify-center tw-items-center '>
                <form className='tw-space-y-4 tw-gap-5 tw-py-4 tw-px-4 rssmall:tw-w-[100%] rssmall:tw-px-2 tw-w-[450px]' onSubmit={handleSubmit}>
                    <div className='tw-flex tw-items-center tw-gap-2 tw-flex-wrap  tw-justify-between'>
                        <label className=''>💰 Bill Value</label>
                        <input type='number' className="tw-w-[120px] tw-px-2 tw-py-1" placeholder='Enter Bill' value={bill} onChange={(e) =>
                            Number(setBill(e.target.value))} />
                    </div>
                    <div className='tw-flex tw-items-center tw-flex-wrap  tw-justify-between tw-gap-4'>
                        <label>🤷‍♀️ Your expense</label>
                        <input type='number' className=" tw-w-[120px] tw-px-2 tw-py-1 " placeholder='Your Expense' value={paidbyUser} onChange={
                            (e) => {
                                setPaidByUser(Number(e.target.value) > bill ? paidbyUser : Number(e.target.value));

                            }} />
                    </div>
                    <div className='tw-flex tw-items-center tw-flex-wrap  tw-justify-between tw-gap-4'>
                        <label>🐱‍🚀 {selectedFriend.name}'s expense</label>
                        <input type='number' name="otherpeoplexpense" className="tw-w-[120px] tw-px-2 tw-py-1 tw-bg-[#FAF2E9] tw-border-2 tw-border-[#FFE8CC]" disabled value={paidByFriend} />
                    </div>
                    <div className='tw-flex tw-items-center tw-flex-wrap tw-justify-between tw-gap-4'>
                        <label>🤑 Who is paying the bill ?</label>
                        <select className='tw-px-[18px] tw-px-2 tw-py-1' >
                            <option value="user">You</option>
                            <option value="friend">{selectedFriend.name}</option>

                        </select>
                    </div>
                    <div className=' tw-text-right'>
                        <Button clickEvent={handleSubmit} className="tw-px-[23px]">Split Bill</Button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default FormSplitBill