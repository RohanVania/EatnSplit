import React, { useState } from 'react'
import Friend from './Friend'
import FormAddFriend from './FormAddFriend'
import Button from './Button'


function List({ list,handleAddFriend,visibilityAddForm,setVisibilityAddform,selectFriend,selectedFriend}) {

    const displayAddForm = () => {
        selectFriend(null)
        setVisibilityAddform((prev)=>!prev) ;
    }

    return (
        <div className='tw-flex tw-flex-col tw-gap-5 xs:tw-px-5 '>
            <ul>
            
                {
                    list.map((el, indx) => {
                        return <Friend element={el} key={indx} selectFriend={selectFriend} selectedFriend={selectedFriend} />
                    })
                }
            </ul>
            {

                visibilityAddForm && <FormAddFriend handleAddFriend={handleAddFriend} />
            }
            <div className='tw-flex tw-justify-end tw-px-5'>
                <Button clickEvent={displayAddForm}>{!visibilityAddForm ? 'Add Friend' : 'Close'}</Button>
            </div>


        </div>
    )
}

export default List