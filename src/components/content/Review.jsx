import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css/effect-fade';

import { A11y, Pagination, Navigation } from 'swiper/modules';
import { SwiperNavButtons } from '../button/SwiperNavButtons';


const Review = () => {




    return (
        <div className="bg-[url('src/assets/image/reviews-bg.jpg')] bg-cover h-[406px]">
            <div className='pt-20 relative -z-2'>
                <Swiper
                    spaceBetween={30}
                    slidesPerView="auto"
                    loop={true}
                    modules={[Pagination, Navigation, A11y]}
                    breakpoints={{

                        640: {
                            spaceBetween: 20,
                        },


                    }}
                >

                    <SwiperSlide>
                        <div className='text-white flex justify-center flex-col items-center'>
                            <img src="https://themes.vsart.me/triablo/images/testim-auth-photo/auth1.jpg" alt="" className='block' width={70} />
                            <p className='pt-4'>John McKenzey, California</p>
                            <p className='text-center px-[60px] lg:px-[120px] xl:px-[200px] 2xl:px-[260px] text-sm pt-12'>Thank you so much. I really didn’t expect such a quick and positive response! Often when something goes wrong with a product it seems the consumer is the one that gets the “raw end of the deal it seems the consumer is the one that gets the “raw end of the deal.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-white flex justify-center flex-col items-center'>
                            <img src="https://themes.vsart.me/triablo/images/testim-auth-photo/auth3.png" alt="" className='block' width={70} />
                            <p className='pt-4'>John McKenzey, California</p>
                            <p className='text-center px-[60px] lg:px-[120px] xl:px-[200px] 2xl:px-[260px] text-sm pt-12'>Thank you so much. I really didn’t expect such a quick and positive response! Often when something goes wrong with a product it seems the consumer is the one that gets the “raw end of the deal it seems the consumer is the one that gets the “raw end of the deal.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-white flex justify-center flex-col items-center'>
                            <img src="https://themes.vsart.me/triablo/images/testim-auth-photo/auth2.png" alt="" className='block' width={70} />
                            <p className='pt-4'>John McKenzey, California</p>
                            <p className='text-center px-[60px] lg:px-[120px] xl:px-[200px] 2xl:px-[260px] text-sm pt-12'>Thank you so much. I really didn’t expect such a quick and positive response! Often when something goes wrong with a product it seems the consumer is the one that gets the “raw end of the deal it seems the consumer is the one that gets the “raw end of the deal.</p>
                        </div>
                    </SwiperSlide>

                    <div className='absolute top-3 md:left-[43%] lg:left-[45%] sm:left-[43%] left-[38.2%] z-10'>
                        <SwiperNavButtons className='lg:space-x-[110px] md:space-x-[90px]  space-x-[80px]' iconClassName='text-white text-[26px]' />
                    </div>

                </Swiper>
            </div>
        </div>
    )
}

export default Review