import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const WhyTriablo = () => {
    return (
        <div className='bg-[#eeeced] pt-[60px]'>
            <p className='text-center text-3xl tracking-wider'>WHY PEOPLE CHOOSE TRIABLO?</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 mx-[60px] lg:mx-[100px] xl:mx-[200px] 2xl:mx-[260px] pt-16 gap-10'>
                <div className="pt-6">
                    <div className=''>
                        <p className='text-left lg:text-right text-2xl text-[#424242] tracking-wide w-full lg:w-[218px]'>PREORDER SYSTEM</p>
                        <p className='pt-6 leading-6 text-left lg:text-right text-sm text-[#424242] w-full lg:w-[220px] '>Donec fermentum vulputate nisl non sollicitudin.Vivamus sagittis fermentum dolor, porta adipiscing magna.</p>
                    </div>
                    <div className='pt-[100px]'>
                        <p className='text-left lg:text-right text-2xl text-[#424242] tracking-wide w-full lg:w-[218px]'>RETINA READY</p>
                        <p className='pt-6 leading-6 text-left lg:text-right text-sm text-[#424242] w-full lg:w-[220px]'>Donec fermentum vulputate nisl non sollicitudin.Vivamus sagittis fermentum dolor, porta adipiscing magna.</p>
                    </div>
                </div>
                <div>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        slidesPerView={1}
                        effect={'fade'}
                        autoplay={{
                            delay: 2000,

                        }}
                        loop={true}
                        pagination={false}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper">
                        <SwiperSlide>
                            <img src="https://themes.vsart.me/triablo/images/whyus-bg3.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://themes.vsart.me/triablo/images/whyus-bg.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://themes.vsart.me/triablo/images/whyus-bg2.jpg" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="pt-6  lg:pl-16">
                    <div>
                        <p className='text-left text-2xl text-[#424242] tracking-wide w-full  lg:w-[200px]'>RESPONSIVE LAYOUT</p>
                        <p className='text-left pt-6 leading-6 text-sm text-[#424242] w-full lg:max-w-[220px]'>Donec fermentum vulputate nisl non sollicitudin.Vivamus sagittis fermentum dolor, porta adipiscing magna.</p>
                    </div>
                    <div className='pt-[100px]'>
                        <p className='text-left text-2xl text-[#424242] tracking-wide w-full lg:w-[220px]'>MATERIAL DESIGN</p>
                        <p className='text-left pt-6 leading-6 text-sm text-[#424242] w-full lg:max-w-[220px]'>Donec fermentum vulputate nisl non sollicitudin.Vivamus sagittis fermentum dolor, porta adipiscing magna.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyTriablo