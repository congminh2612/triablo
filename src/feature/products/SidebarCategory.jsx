import { AiOutlineClose } from 'react-icons/ai';
import { categories } from './data';
import { useAtom } from 'jotai';
import { openSideBarAtom } from './state/state';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const SidebarCategory = () => {
    const [openSideBar, setOpenSideBar] = useAtom(openSideBarAtom);
    const toggleSidebar = () => {
        setOpenSideBar(!openSideBar);
    };

    return (
        <>
            <Transition appear show={openSideBar} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => toggleSidebar()}>

                    <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => toggleSidebar()} />


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
                                <Dialog.Panel className="w-full max-w-[250px] h-screen transform overflow-hidden bg-white shadow-xl transition-all">
                                    <div className='flex justify-end p-4'>
                                        <AiOutlineClose size='24' onClick={() => toggleSidebar()} className='hover:text-[#42c3d6] hover:cursor-pointer' />
                                    </div>
                                    <div className='space-y-4 pt-[50px]'>
                                        {categories.map(category => (
                                            <div key={category.id} >
                                                <div className='text-xl font-normal hover:text-[#42c3d6] hover:cursor-pointer'>{category.title}</div>
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

export default SidebarCategory;
