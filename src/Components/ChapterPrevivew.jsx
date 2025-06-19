
import Sectionheading from './Sectionheading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Card } from 'react-bootstrap';


const ChapterPrevivew = () => {
    const title = "Chapter Preview";
    const des = "Read some chapter free.";
    const preview = [
        {
            image: "./image/1.jpg",
        },
        {
            image: "./image/1.jpg",
        },
        {
            image: "./image/1.jpg",
        },
        {
            image: "./image/1.jpg",
        },
        {
            image: "./image/1.jpg",
        },
        {
            image: "./image/1.jpg",
        },
    ]
    return (
        <>
            <div className="section">
                <div className="container">
                    <div className=" col-sm-12">
                        <div className="text-center ">
                            <Sectionheading title={title} des={des} />
                        </div>
                    </div>
                    <div className="row ">
                        <div className='col-12'>


                            <Swiper
                                slidesPerView={1}
                                spaceBetween={0}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    '@0.00': {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    '@0.75': {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    '@1.00': {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    '@1.50': {
                                        slidesPerView: 4,
                                        spaceBetween: 40,
                                    },
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {preview.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Card className="border-0 ms-0 me-0 testimony-card">
                                            <Card.Body className='bg-white rounded-2 '>
                                                <div className="d-flex  mb-3 align-items-center ">
                                                    <img
                                                        src={item.image}
                                                        alt={`Preview ${index + 1}`}
                                                        className="rounded "
                                                        style={{ width: "100%", height: "auto", objectFit: "cover" }}
                                                    />
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                ))}


                            </Swiper>
                            {/* <div className="">
                                <div className='preview'>
                                    <img src="./image/1.jpg" alt="" />
                                </div>
                            </div>
                            <div className="">
                                <div className='preview'>
                                    <img src="./image/2.jpg" alt="" />
                                </div>
                            </div>
                            <div className="">
                                <div className='preview'>
                                    <img src="./image/3.jpg" alt="" />
                                </div>
                            </div>
                            <div className="">
                                <div className='preview'>
                                    <img src="./image/4.jpg" alt="" />
                                </div>
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ChapterPrevivew;