
import BaseButton from "./components/button/BaseButton"
import Contact from "./components/content/Contact"
import News from "./components/content/News"
import Review from "./components/content/Review"
import WhyTriablo from "./components/content/WhyTriablo"
import { Footer } from "./components/footer"
import Header from "./components/header/Header"
import Product from "./feature/products/Product"


function App() {
  return (
    <>
      <Header />
      <Product />
      <WhyTriablo />
      <div className='bg-[#f5f5f5] px-[60px] xl:px-[200px] 2xl:px-[260px]  py-[60px]  block  text-center xl:flex justify-between items-center'>
        <p>Excited about what&apos;s waiting for you? Check out our new summer collection.</p>
        <BaseButton title="CHECK IT OUT" className='px-6 py-[6px] rounded-[20px] mt-[16px] xl:mt-0' />
      </div>
      <Review />
      <News />
      <Contact />
      <Footer />
    </>
  )
}

export default App
