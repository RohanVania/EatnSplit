import React from 'react'
import Button from './Button'

function Friend({ element, selectFriend, selectedFriend}) {
    const selectedItem = element.id === selectedFriend?.id ? "selected" : ''
    return (
        <li className={`${selectedItem}  hover:tw-bg-[#fdf2e1] tw-flex tw-items-center tw-justify-evenly tw-py-4 tw-px-2 tw-duration-100 tw-rounded-md `}>
            <div className=' tw-flex tw-justify-center tw-items-center  tw-w-[60px] tw-h-[60px] '>
                <img src={element.image} className='tw-rounded-full tw-w-full tw-h-full tw-object-cover' alt={element.name} />
            </div>
            <div className='tw-flex tw-flex-col tw-gap-1  tw-flex-[0.8]'>
                <h3 className='tw-text-[19px] tw-font-semibold'>{element.name}</h3>
                {
                    element.balance < 0 && <p className='tw-text-[14px] xs:tw-text-[17px] tw-font-medium tw-text-red-500'>You owe {element.name} {Math.abs(element.balance)}£</p>
                }
                {
                    element.balance > 0 && <p className='tw-text-[14px] xs:tw-text-[17px] tw-font-medium tw-text-green-400'>{element.name} owes you {Math.abs(element.balance)}£</p>
                }
                {
                    element.balance == 0 && <p className='tw-text-[14px] xs:tw-text-[17px] tw-font-medium tw-text-grey-500'>You and {element.name} are even</p>
                }
            </div>
            <Button clickEvent={() => {
                //* Element is the Object
                selectFriend(element)
            }}>
                {
                    selectedItem?"Close":"Select"
                }
            </Button>
        </li>

    )
}

export default Friend