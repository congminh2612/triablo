import { AiOutlineClose } from 'react-icons/ai';
import { useAtom } from 'jotai';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { modalAtom } from './state/state';
import BaseButton from '../../components/button/BaseButton';

const ModalProductDetail = () => {
    const [modal, setModal] = useAtom(modalAtom);

    const closeModal = () => {
        setModal(prevModal => ({ ...prevModal, isOpen: false, payload: null }));
    };

    return (
        <>
            <Transition appear show={modal.isOpen} as={Fragment} >
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <div className="fixed inset-0 bg-black bg-opacity-10" />

                    <div className="fixed inset-0 overflow-y-auto">
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
                                <Dialog.Panel className="w-full max-w-[750px] h-screen transform overflow-hidden bg-white shadow-xl transition-all">
                                    <div className='flex justify-end p-4'>
                                        <AiOutlineClose size='24' onClick={closeModal} className='hover:text-[#42c3d6] hover:cursor-pointer' />
                                    </div>
                                    {modal.payload && (
                                        <div className='grid grid-cols-2 gap-4 px-4'>
                                            <div className='space-y-4 pt-[50px]'>
                                                <img src={modal.payload.image} alt="" className='w-[90%]' />
                                            </div>
                                            <div className='text-left pt-14'>
                                                <p className='text-[#424242] text-xl'>{modal.payload.priceAfterDiscount}$</p>
                                                <p className='text-xl pt-2'>{modal.payload.name}</p>
                                                <p className='pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates odit vitae repellat doloremque dolorem, numquam.</p>
                                                <BaseButton title='Add to cart' className='py-2 px-6 rounded-3xl mt-10' />
                                            </div>
                                        </div>
                                    )}

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
};

export default ModalProductDetail;
