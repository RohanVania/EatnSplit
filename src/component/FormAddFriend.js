

import React, { useState } from 'react'
import Button from './Button'

function FormAddFriend({handleAddFriend}) {

    const [name,setName]=useState("");
    const [image,setImage]=useState("https://i.pravatar.cc/48");
    const id=crypto.randomUUID();
    
    const handleSubmit=(event)=>{
        event.preventDefault()
        if(!name||!image) return ;
        const newFriend={name:name,image:`${image}?=${id}`,balance:0,id:id} 
        handleAddFriend(newFriend);
        setName("");
        setImage("https://i.pravatar.cc/48")
    }
    
    return (
        <form className='tw-bg-[#fdf2e1] tw-py-4' onSubmit={handleSubmit}>
            <div className='tw-grid tw-grid-rows-2 tw-gap-3  '>
                <div className='tw-grid tw-grid-cols-[40%_40%] tw-justify-center'>
                    <label className='tw-text-[19px] tw-text-black tw-font-medium'>👭 Friend name</label>
                    <input type='text' name='name' className='tw-py-1 tw-px-3 tw-rounded-md focus:tw-outline-none' value={name} onChange={e=>setName(e.target.value)}/>
                </div>
                <div className='tw-grid tw-grid-cols-[40%_40%] tw-justify-center'>
                    <label className='tw-text-[19px] tw-text-black tw-font-medium'>🎶 Image URL</label>
                    <input type='text' name='name' className='tw-py-1 tw-px-3 tw-rounded-md focus:tw-outline-none' value={image} onChange={e=>setImage(e.target.value)} />
                </div>
                <div className='tw-grid tw-grid-cols-[40%_40%] tw-justify-center focus:tw-bg-red-100'>
                    <Button clickEvent={handleSubmit} className="focus:tw-outline-blue-600 tw-col-start-2 tw-border-none">Add</Button>
                </div>
            </div>
        </form>
    )
}

export default FormAddFriend