
import { twMerge } from 'tailwind-merge'

const BaseButton = ({ title, type, className, handleClick, }) => {
    return (

        <button
            onClick={handleClick}
            className=
            {twMerge('bg-[#42c3d6] hover:bg-[#3c3c3c] text-white', className)}
            type={type}
        >
            {title}
        </button>

    )
}

export default BaseButton