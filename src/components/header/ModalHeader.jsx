import { AiOutlineClose } from 'react-icons/ai';
import { useAtom } from 'jotai';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { modalHeader } from './state/state';
import { navigateItem } from './constants';



const ModalHeader = () => {

    const [modal, setModal] = useAtom(modalHeader)
    const closeModal = () => {
        setModal((prev) => ({ ...prev, isOpen: false }))
    }
    return (
        <>
            <Transition appear show={modal.isOpen} as={Fragment} >
                <Dialog as="div" className="relative z-10" onClose={closeModal} >
                    <div className="fixed inset-0 bg-black bg-opacity-10" />

                    <div className="fixed inset-0  overflow-y-auto">
                        <div className="min-h-screen text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-500 transform"
                                enterFrom="-translate-y-full"
                                enterTo="translate-y-0"
                                leave="transition ease-in-out duration-500 transform"
                                leaveFrom="translate-y-0"
                                leaveTo="-translate-y-full"
                            >
                                <Dialog.Panel className="w-full bg-[#f1f1f1] max-w-screen h-[360px] transform overflow-hidden  shadow-xl transition-all">
                                    <div className='flex justify-end pt-4 pr-4' onClick={closeModal}>
                                        <AiOutlineClose size='24' className='hover:text-[#42c3d6] hover:cursor-pointer' />
                                    </div>
                                    <div className='space-y-4'>
                                        {navigateItem.map(item => (
                                            <div key={item.id}>
                                                <p className='hover:text-[#42c3d6]'>{item.title}</p>
                                            </div>
                                        ))}
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

export default ModalHeader;
