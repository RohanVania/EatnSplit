
// Test Comment
import React, { useState } from 'react'
import Button from './Button'

function FormSplitBill({ selectedFriend,handleSplitBill}) {

    const [bill, setBill] = useState("");
    const [userExpense, setUserExpense] = useState("");
    const friendExpense = bill ? bill - userExpense : "";
    const [paidbyWhom, setPaidByWhom] = useState("")
    // console.log(selectedFriend)

    const isFormValid = bill !== "" && userExpense !== "" && paidbyWhom !== "";

    const handleSubmit = (event) => {
        event.preventDefault();
        const splitobj={
            billamount:bill,
            userExpense:userExpense,
            friendExpense:friendExpense,
            paidbyWhom:paidbyWhom,
        }

        if(paidbyWhom==='user'){
            selectedFriend.balance=selectedFriend.balance+(splitobj.billamount-splitobj.userExpense)
            // console.log("After Spliting Paid By User Object =>",selectedFriend);
        }

        if(paidbyWhom==='friend'){
            selectedFriend.balance=selectedFriend.balance-(splitobj.billamount-splitobj.friendExpense)
            // console.log("After Spliting Paid By Friend Object =>",selectedFriend);
        }
        
        console.log(splitobj) 
        handleSplitBill(selectedFriend);


    }

    return (
        <div className='tw-w-[100%]  '>
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
                        <input type='number' className=" tw-w-[120px] tw-px-2 tw-py-1 " placeholder='Your Expense' value={userExpense} onChange={
                            (e) => {
                                setUserExpense(Number(e.target.value) > bill ? userExpense : Number(e.target.value));

                            }} />
                    </div>
                    <div className='tw-flex tw-items-center tw-flex-wrap  tw-justify-between tw-gap-4'>
                        <label>🐱‍🚀 {selectedFriend.name}'s expense</label>
                        <input type='number' name="otherpeoplexpense" className="tw-w-[120px] tw-px-2 tw-py-1 tw-bg-[#FAF2E9] tw-border-2 tw-border-[#FFE8CC]" disabled value={friendExpense} />
                    </div>
                    <div className='tw-flex tw-items-center tw-flex-wrap tw-justify-between tw-gap-4'>
                        <label>🤑 Who is paying the bill ?</label>
                        <select className='tw-px-[18px] tw-px-2 tw-py-1' value={paidbyWhom} onChange={(e) => setPaidByWhom(e.target.value)}>
                            <option value="" disabled>Choose a option</option>
                            <option value="user">You</option>
                            <option value="friend">{selectedFriend.name}</option>
                        </select>

                    </div>
                    <div className=' tw-text-right tw-py-5' >
                        <Button   clickEvent={isFormValid?handleSubmit:""} className={`tw-px-[23px] ${!isFormValid?`tw-opacity-[0.9]  tw-cursor-not-allowed`:`tw-opacity-[1]`}`}>Split Bill</Button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default FormSplitBill