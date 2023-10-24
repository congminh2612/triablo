import { AiOutlineClose } from 'react-icons/ai';
import { useAtom } from 'jotai';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef } from 'react';
import { cartAtom, modalCart } from './state/state';
import TextInput from '../../components/input/TextInput';
import BaseButton from '../../components/button/BaseButton';
import emailjs from '@emailjs/browser';


const ModalCart = () => {

    const form = useRef()
    const [modal, setModal] = useAtom(modalCart)
    const [carts, setCarts] = useAtom(cartAtom)
    const closeModal = () => {
        setModal(prevModal => ({ ...prevModal, isOpen: false }));
    };
    const removeFromCart = (index) => {
        let updatedCarts;
        if (carts.length === 1) {
            updatedCarts = [];
        } else {
            updatedCarts = carts.filter((_, i) => i !== index);
        }
        setCarts(updatedCarts);
    };

    const calculateTotal = () => {
        return carts.reduce((total, cart) => total + cart.priceAfterDiscount, 0);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gg15d0c', 'template_jzmh73p', form.current, 'mtz2anV1-z2yy5-XU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <Transition appear show={modal.isOpen} as={Fragment} >
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <div className="fixed inset-0 bg-black bg-opacity-10" />

                    <div className="fixed inset-0  overflow-y-auto">
                        <div className="min-h-screen text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-500 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-500 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="w-full bg-[#f1f1f1] max-w-screen h-screen transform overflow-hidden  shadow-xl transition-all">
                                    <div className='flex justify-end p-4'>
                                        <AiOutlineClose size='24' onClick={closeModal} className='hover:text-[#42c3d6] hover:cursor-pointer' />
                                    </div>
                                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 py-[50px] px-[80px] lg:py-[100px] lg:px-[150px] xl:py-[200px] xl:px-[300px]'>
                                        <div className=''>
                                            {carts.length != 0 ? (
                                                <div className='pb-20 border-b-gray-400 border-b-[2px] space-y-1 text-[#353535]'>
                                                    {carts.map(cart => {
                                                        return (
                                                            <div key={cart.id} className='flex justify-between '>
                                                                <div> {cart.name}</div>
                                                                <div className='flex space-x-4 items-center '>
                                                                    <p>{cart.priceAfterDiscount}.00$</p>
                                                                    <RiDeleteBin6Line
                                                                        onClick={() => removeFromCart(cart.id)}
                                                                        className='cursor-pointer'
                                                                    />
                                                                </div>



                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            ) : (
                                                <div className="pb-10 text-xl"> Cart is empty</div>
                                            )}

                                            <div className='flex justify-center items-center space-x-60 lg:space-x-80 pt-3'>
                                                <p className='text-lg text-[#353535]'>Total</p>
                                                <p>{calculateTotal()}.00$</p>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <form ref={form} onSubmit={sendEmail}>
                                                <div className='space-y-7'>
                                                    <TextInput className='bg-white py-[6px] px-4' placeholder='Name' name='name' />
                                                    <TextInput className='bg-white py-[6px] px-4' placeholder='E-mail' name='email' />
                                                    <TextInput className='bg-white py-[6px] px-4' placeholder='Phone' name='phone' />
                                                </div>
                                                <div className='pt-8'>
                                                    <BaseButton title='send' className='py-[6px] px-[120px]' />
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
};

export default ModalCart;
