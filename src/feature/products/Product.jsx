
import { useAtom } from "jotai"
import ProductCategory from "./ProductCategory"
import { IoMenuSharp } from 'react-icons/io5'
import { PiShoppingCartSimpleLight } from 'react-icons/pi'

import SidebarCategory from "./SidebarCategory"
import { openSideBarAtom } from "./state/state"
import { cartAtom, modalCart } from "../cart/state/state"
import ModalCart from "../cart/ModalCart"


const Product = () => {
    const [openSideBar, setOpenSideBar] = useAtom(openSideBarAtom);
    const [cart,] = useAtom(cartAtom)
    const [, setModal] = useAtom(modalCart)

    const openModal = () => {
        setModal(prevModal => ({ ...prevModal, isOpen: true }));
    };
    const toggleSidebar = () => {
        setOpenSideBar(!openSideBar);
    };

    return (
        <div className='px-[100px] lg:px-[120px] xl:px-[200px] 2xl:px-[260px]'>
            <p className='pt-[70px] text-center text-3xl'>WE MAKE WE MAKE YOU AWESOME</p>


            <div className='pt-10 pb-6 flex space-x-3'>
                <div className='' onClick={toggleSidebar}>
                    <IoMenuSharp size='26' className='cursor-pointer' />
                </div>
                <div className='relative' onClick={openModal}>
                    <PiShoppingCartSimpleLight size='26' className='cursor-pointer' />
                    <div className='w-4 h-4 absolute -top-1 -right-1 bg-[#42c3d6] rounded-full flex justify-center items-center text-xs text-white'>{cart.length}</div>
                </div>
            </div>
            <SidebarCategory />
            <ModalCart />


            <div className=''>
                <ProductCategory />
            </div>

            <div className="py-[90px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 pl-10">
                <div>
                    <img src="https://themes.vsart.me/triablo/images/brand3.png" className=' cursor-pointer' alt="" />
                </div>
                <div>
                    <img src="https://themes.vsart.me/triablo/images/brand4.png" className='cursor-pointer' alt="" />
                </div>
                <div>
                    <img src="https://themes.vsart.me/triablo/images/brand1.png" className=' cursor-pointer' alt="" />
                </div>
                <div>
                    <img src="https://themes.vsart.me/triablo/images/brand2.png" className=' cursor-pointer' alt="" />
                </div>
            </div>
        </div>

    )
}

export default Product