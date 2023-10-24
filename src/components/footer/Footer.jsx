

const Footer = () => {
    return (
        <div className='space-y-2 lg:space-y-0 bg-[#383838] block lg:flex items-center justify-between py-[20px] text-white px-[60px] lg:px-[120px] xl:px[200px] 2xl:px-[260px]'>
            <div className='text-center space-y-1'>
                <p className='text-sm'>e-mail: <span className='text-[#b2b2b2] text-sm'>clothes_shop@triablo.com</span> </p>
                <p className='text-sm'>address: <span className='text-[#b2b2b2] text-sm'>New York, Saint Nicholas Avenue 13/1</span> </p>
                <p className='text-sm'>fax: <span className='text-[#b2b2b2] text-sm'>+1 0123-4567-8900</span> </p>
            </div>
            <div className=' flex items-center justify-center'>
                <img src="src/assets/image/logo.png" alt="" />
            </div>
            <div>
                <p className='text-sm text-center'>© Triablo 2014. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer