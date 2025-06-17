import Sectionheading from './Sectionheading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Card } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialSlider = () => {
    const testimonials = [
        {
            icon: "bi bi-quote",
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor neque molestiae distinctio...`,
            name: "Junl Sarukh",
            role: "CEO Of Softing",
            image: "/image/user-1.png"
        },
        {
            icon: "bi bi-quote",
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor neque molestiae distinctio...`,
            name: "Anil Spia",
            role: "Director of Softing",
            image: "/image/user-2.png"
        },
        {
            icon: "bi bi-quote",
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor neque molestiae distinctio...`,
            name: "Paul Munni",
            role: "Developer of Softing",
            image: "/image/user-1.png"
        },
        {
            icon: "bi bi-quote",
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor neque molestiae distinctio...`,
            name: "Paul Munni",
            role: "Developer ",
            image: "/image/user-2.png"
        },
        {
            icon: "bi bi-quote",
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor neque molestiae distinctio...`,
            name: "Paul Munni",
            role: "Developer of Softing",
            image: "/image/user-1.png"
        },
        {
            icon: "bi bi-quote",
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor neque molestiae distinctio...`,
            name: "Paul Munni",
            role: "Developer of Softing",
            image: "/image/user-2.png"
        },
    ];

    const title = "What people said about my books";
    const des = "Testimonials";

    return (
        <section className='bg-color py-5  '>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <Sectionheading title={title} des={des} />
                    </div>
                    <div className=''>
                        <Swiper
                            spaceBetween={30}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 }
                            }}
                            className="mySwiper"
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <Card className="border-0 bg-transparent testimony-card">
                                        <Card.Body className='bg-white rounded-2 p-3'>
                                            <div className="quote-icon text-center fs-1 mb-3 icon-color">
                                                <i className={testimonial.icon}></i>
                                            </div>
                                            <Card.Text className="mb-5 my-4  fs-5 testimony-txt">
                                                {testimonial.text}
                                            </Card.Text>
                                            <div className="d-flex gap-4 mb-3 align-items-center card-line">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="rounded-circle mt-4"
                                                   style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                                />
                                                <div>
                                                    <h5 className="fw-bold mt-2 testimony-name">{testimonial.name}</h5>
                                                    <p className="testimony-role mb-0">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;
