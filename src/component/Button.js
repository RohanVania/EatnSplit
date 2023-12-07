
import React from 'react'

function Button({children,className,clickEvent}) {
  return (
    <button onClick={(event)=>clickEvent(event)} className={`${className} tw-px-3 tw-py-2 tw-bg-[#fe9f42]  tw-rounded-md tw-font-semibold `}>{children}</button>
  )
}

export default Button