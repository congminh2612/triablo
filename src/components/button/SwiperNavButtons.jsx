
import { useSwiper } from 'swiper/react';
import { twMerge } from 'tailwind-merge';

export const SwiperNavButtons = ({ className, iconClassName }) => {
    const swiper = useSwiper();

    return (
        <div className={className}>
            <button onClick={() => swiper.slidePrev()} className='z-100'>
                <i className={twMerge('z-100 fa-solid fa-angle-left  ', iconClassName)} ></i>
            </button>
            <button onClick={() => swiper.slideNext()}>
                <i className={twMerge('fa-solid fa-angle-right ', iconClassName)}></i>
            </button>

        </div>
    );
};
