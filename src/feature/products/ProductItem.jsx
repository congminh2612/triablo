import { IoIosSearch } from 'react-icons/io'
import { AiOutlinePlus } from 'react-icons/ai'
import { useAtom } from 'jotai';
import { modalAtom, } from './state/state';
import ModalProductDetail from './ModalProductDetail';
import { cartAtom } from '../cart/state/state';

const ProductItem = ({ bag }) => {
    const [, setModal] = useAtom(modalAtom)
    const [cart, setCart] = useAtom(cartAtom)
    console.log(cart)
    const openModal = () => {
        setModal(prevModal => ({ ...prevModal, isOpen: true, payload: bag }));
    };
    const addToCart = () => {
        setCart(prevCart => [...prevCart, bag]);
    }



    return (
        <div>
            <div className='relative group' >


                <img src={bag.image} alt='image' className='object-none group-hover:opacity-50' />
                <div className=' absolute hidden space-x-6 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] group-hover:flex' >
                    <div onClick={openModal} className=' w-12 h-12 flex justify-center items-center hover:border-[#f1f1f1] hover:text-[#f1f1f1] cursor-pointer rounded-full border-slate-600 border-[2px]'>
                        <IoIosSearch size='24' className='hover:text-[#f1f1f1]' />
                    </div>

                    <div onClick={addToCart} className=' w-12 h-12 flex justify-center items-center rounded-full hover:border-[#f1f1f1] cursor-pointer hover:text-[#f1f1f1]cursor-pointer border-slate-600 border-[2px]'>
                        <AiOutlinePlus size='24' className='hover:text-[#f1f1f1]' />
                    </div>

                </div>

                <div className='flex items-center justify-center pt-4'>
                    <div className='border-r-[2px] pr-2 border-gray-200 text-sm font-normal'>
                        <p className='line-through text-sm'>$48.00</p>
                        <p className='text-red-500 text-sm'>$38.00</p>
                    </div>
                    <div className='pl-3 text-xs font-normal space-y-[6px]'>
                        <p>Cayler And Sons Milano</p>
                        <p>Backpack</p>
                    </div>
                </div>
            </div>
            <ModalProductDetail />
        </div>
    )
}

export default ProductItem