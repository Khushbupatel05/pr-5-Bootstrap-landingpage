import Sectionheading from './Sectionheading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const TestimonialSlider = () => {

    let title = "What people said about my books";
    let des = " Testimonials"
    return (
        <>
            <section className='bg-color  py-5 my-5 mt-5'>
                <div className="container">
                    <div className="row">
                        <div className="  col-sm-12">
                            <div className="text-center ">
                                <Sectionheading title={title} des={des} />
                            </div>
                        </div>
                        <div>
                            <Swiper 
                                slidesPerView={3}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper">
                                <SwiperSlide>lorem</SwiperSlide>
                                <SwiperSlide>lorem</SwiperSlide>
                                <SwiperSlide>lorem</SwiperSlide>
                                <SwiperSlide>lorem</SwiperSlide>
                                <SwiperSlide>lorem</SwiperSlide>
                                <SwiperSlide>lorem</SwiperSlide>
                                <SwiperSlide>lorem</SwiperSlide>
                                <SwiperSlide>lorem</SwiperSlide>
                                <SwiperSlide>lorem</SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TestimonialSlider;