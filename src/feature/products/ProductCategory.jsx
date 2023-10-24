// import ProductItem from "./ProductItem"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';
import ProductItem from './ProductItem';
import { bags } from './data';
import { SwiperNavButtons } from '../../components/button/SwiperNavButtons';

const ProductCategory = () => {
    return (
        <div className='relative z-0'>


            <div>
                <Swiper
                    slidesPerView={4}
                    grid={{
                        rows: 2,
                        fill: 'row'
                    }}
                    breakpoints={{
                        400: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                            grid: {
                                rows: 2
                            }
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            grid: {
                                rows: 2
                            }
                        },

                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    spaceBetween={30}
                    modules={[Grid, Pagination]}
                    style={{
                        position: 'static'
                    }}
                >

                    {bags.map((bag) => {
                        return (
                            <SwiperSlide key={bag.id}>
                                <ProductItem bag={bag} />
                            </SwiperSlide>
                        )
                    })}
                    <div className='absolute top-0 -translate-y-12 right-0 z-[200]'>
                        <SwiperNavButtons className="text-black space-x-6" iconClassName='text-[26px]' />
                    </div>

                </Swiper>
            </div>
        </div>

    )
}

export default ProductCategory