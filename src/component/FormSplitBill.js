

import React from 'react'
import Button from './Button'

function FormSplitBill() {
    return (
        <div className='tw-w-[100%] '>
            <h1 className='tw-pt-5 sm:tw-px-12 tw-pl-2 tw-uppercase tw-text-[22px] tw-font-medium tw-text-blue-950'>Split a Bill with X</h1>
            <div className='tw-mt-5 tw-flex tw-justify-center tw-items-center '>
                <form className='tw-space-y-4 tw-gap-5 tw-py-4 tw-px-10 rssmall:tw-w-[100%] rssmall:tw-px-2 tw-w-[400px] '>
                    <div className='tw-flex tw-items-center tw-gap-0 tw-flex-wrap  tw-justify-between'>
                        <label className=''>💰 Bill Value</label>
                        <input  type='number' className="tw-w-[110px] tw-px-2 tw-py-1" />
                    </div>
                    <div className='tw-flex tw-items-center tw-flex-wrap  tw-justify-between tw-gap-4'>
                        <label>🤷‍♀️ Your expense</label>
                        <input type='number' className=" tw-w-[110px] tw-px-2 tw-py-1" />
                    </div>
                    <div className='tw-flex tw-items-center tw-flex-wrap  tw-justify-between tw-gap-4'>
                        <label>🐱‍🚀 X's expense</label>
                        <input type='number' className="tw-w-[110px] tw-px-2 tw-py-1" />
                    </div>
                    <div className='tw-flex tw-items-center tw-flex-wrap tw-justify-between tw-gap-4'>
                        <label>🤑 Who is paying the bill ?</label>
                        <select className='tw-px-[31px] tw-px-2 tw-py-1'>
                            <option value="You">You</option>
                            <option value="X">X</option>
                        </select>
                    </div>
                    <div className=' tw-text-right'>
                        <Button className="tw-px-[23px]">Split Bill</Button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default FormSplitBill