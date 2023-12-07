import React from 'react'
import Button from './Button'

function Friend({ element, selectFriend, selectedFriend}) {
    const selectedItem = element.id === selectedFriend?.id ? "selected" : ''
    return (
        <li className={`${selectedItem}  hover:tw-bg-[#fdf2e1] tw-flex tw-items-center tw-justify-evenly tw-py-4 tw-px-2 tw-duration-100 tw-rounded-md `}>
            <div className=' tw-flex tw-justify-center tw-items-center '>
                <img src={element.image} className='tw-rounded-full' alt={element.name} />
            </div>
            <div className='tw-flex tw-flex-col tw-gap-1  tw-flex-[0.8]'>
                <h3 className='tw-text-[18px] tw-font-semibold'>{element.name}</h3>
                {
                    element.balance < 0 && <p className='tw-text-[12px] xs:tw-text-[17px] tw-font-medium tw-text-red-500'>You owe {element.name} {Math.abs(element.balance)}£</p>
                }
                {
                    element.balance > 0 && <p className='tw-text-[12px] xs:tw-text-[17px] tw-font-medium tw-text-green-400'>{element.name} owes you {Math.abs(element.balance)}£</p>
                }
                {
                    element.balance == 0 && <p className='tw-text-[12px] xs:tw-text-[17px] tw-font-medium tw-text-gray-500'>You and {element.name} are even</p>
                }
            </div>
            <Button clickEvent={() => {
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