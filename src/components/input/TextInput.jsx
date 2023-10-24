/* eslint-disable react/display-name */
import React from 'react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

const TextInput = React.forwardRef(
    (
        {
            type,
            className,


            placeholder,
            spacing,
            onChange,
            ...props

        },
        ref
    ) => {
        return (
            <div className={clsx(spacing ? spacing : 'space-x-2')}>

                <input
                    ref={ref}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={twMerge(' p-[8px] outline-none  bg-[#ddd]', className)}
                    {...props}
                />
            </div>
        )
    }
)


export default TextInput