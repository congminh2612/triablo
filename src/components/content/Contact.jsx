import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import TextInput from '../input/TextInput';
import { AiOutlineMail } from 'react-icons/ai'




const Contact = () => {
    const form = useRef();
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
        <div className='bg-[#f1f1f1] pt-[60px] px-[60px] lg:px-[120px] xl:px-[200px] 2xl:px-[260px] pb-[40px]'>
            <p className='text-center text-xl lg:text-2xl xl:text-3xl'>CONTACT OR FIND US ON <span className='text-[#42c3d6]'>THE MAP</span></p>
            <form ref={form} onSubmit={sendEmail} >
                <div className='block lg:flex items-center lg:space-x-20 pt-6'>
                    <div className='space-y-6'>
                        <div className='space-y-2'>
                            <label htmlFor="" className='text-[#545454]'>Name</label>
                            <TextInput className='w-[340px] lg:w-[440px]' />
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="" className='text-[#545454]'>Phone Number</label>
                            <TextInput className='w-[340px] lg:w-[440px]' />
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="" className='text-[#545454]'>Subject</label>
                            <TextInput className='w-[340px] lg:w-[440px]' />
                        </div>
                    </div >
                    <div className='relative'>
                        <textarea className='w-[340px] lg:w-[440px] p-2 h-[180px] lg:h-[236px] mt-10 outline-none bg-[#ddd]' />
                        <div className='absolute bottom-3 right-8 lg:bottom-3 lg:right-3 group' id="icon-container ">
                            <AiOutlineMail size={22} color='#42c3d6' className="cursor-pointer" id="mail-icon" />
                            <span className='text-[#42c3d6] -z-20 absolute  bottom-[2px] right-3 group-hover:z-10 text-sm  transition group-hover:-translate-x-4 ease-in-out duration-300' id="send-text">Send</span>
                        </div>
                    </div>
                </div>

            </form >
            <div className='pt-8 flex justify-center space-x-6'>
                <div className='cursor-pointer'>
                    <i className="fa-brands fa-instagram text-[22px]"></i>
                </div>
                <div className='cursor-pointer'>
                    <i className="fa-brands fa-twitter text-[22px]"></i>
                </div>
                <div className='cursor-pointer'>
                    <i className="fa-brands fa-facebook text-[22px]"></i>
                </div>
                <div className='cursor-pointer'>
                    <i className="fa-brands fa-dribbble text-[22px]"></i>
                </div>

                <div className='cursor-pointer'>
                    <i className="fa-brands fa-tumblr text-[22px]"></i>
                </div>
            </div>

        </div >
    );
}

export default Contact