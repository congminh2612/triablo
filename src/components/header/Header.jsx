import { useAtom } from "jotai"
import BaseButton from "../button/BaseButton"
import { navigateItem } from "./constants"
import { AiOutlineMenu } from 'react-icons/ai'
import { modalHeader } from "./state/state"
import ModalHeader from "./ModalHeader"


const Header = () => {
    const [, setModal] = useAtom(modalHeader)


    const openModal = () => {
        setModal(prev => ({ ...prev, isOpen: true }))
    }
    return (
        <div
            className="relative  bg-opacity-40  bg-cover bg-center h-[734px] bg-no-repeat"
            style={{
                backgroundImage: " linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(src/assets/image/bg-header.jpg)"
            }} >
            <div className='flex flex-row-reverse pr-5 pt-5 lg:hidden' onClick={openModal}>
                <AiOutlineMenu color="white" size='26' className='cursor-pointer' />
            </div>
            <div className='hidden lg:flex items-center mx-[10px] xl:mx-[100px] 2xl:mx-[260px] max-w-[62.5rem] pt-[60px] space-x-[200px]'>
                <div className='hidden lg:block'>
                    <img src="src/assets/image/logo.png
                        " alt="" />
                </div>
                <div>
                    <div className='hidden lg:flex text-white space-x-8 text-sm brightness-100 flex-wrap tracking-widest font-normal'>
                        {navigateItem.map((item) => {
                            return (
                                <div key={item.id}>
                                    <p>{item.title}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className=' hidden lg:block text-white text-sm text-right pt-2 tracking-widest font-normal'>
                        <p>CONTACTS</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <p className='text-center text-white text-[55px] pt-[130px] tracking-wider'>THE STYLE FOR TODAY</p>
                <p className='text-center text-white text-[15px] font-light]'>Lorem ipsum dolor sit amet, consectetur adipiscing. Vel pellentesque consequat.</p>
            </div>
            <div className='text-center pt-[50px]'>
                <BaseButton title='CHECK IT' className='py-[6px] px-12 rounded-[30px] shadow-xl' />
            </div>
            <ModalHeader />
        </div>
    )
}

export default Header