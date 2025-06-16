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
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor neque molestiae distinctio, voluptatum suscipit in, reiciendis, dolores enim optio corporis maxime impedit rerum iure illum quae iusto obcaecati quod laboriosam?`,
            name: "Junl Sarukh",
            role: "CEO Of Softing",
            image: "/images/user-1.png" 
        },
        {
            icon: "bi bi-quote",
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor neque molestiae distinctio, voluptatum suscipit in, reiciendis, dolores enim optio corporis maxime impedit rerum iure illum quae iusto obcaecati quod laboriosam?`,
            name: "Anil Spia",
            role: "Director of Softing",
            image: "/images/user-2.png"
        },
        {
            icon: "bi bi-quote",
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor neque molestiae distinctio, voluptatum suscipit in, reiciendis, dolores enim optio corporis maxime impedit rerum iure illum quae iusto obcaecati quod laboriosam?`,
            name: "Paul Munni",
            role: "Developer of Softing",
            image: "/images/user-1.png"
        },
        {
            icon: "bi bi-quote",
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor neque molestiae distinctio, voluptatum suscipit in, reiciendis, dolores enim optio corporis maxime impedit rerum iure illum quae iusto obcaecati quod laboriosam?`,
            name: "Paul Munni",
            role: "Developer of Softing",
            image: "/images/user-1.png"
        },
        {
            icon: "bi bi-quote",
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor neque molestiae distinctio, voluptatum suscipit in, reiciendis, dolores enim optio corporis maxime impedit rerum iure illum quae iusto obcaecati quod laboriosam?`,
            name: "Paul Munni",
            role: "Developer of Softing",
            image: "/images/user-1.png"
        },
        {
            icon: "bi bi-quote",
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor neque molestiae distinctio, voluptatum suscipit in, reiciendis, dolores enim optio corporis maxime impedit rerum iure illum quae iusto obcaecati quod laboriosam?`,
            name: "Paul Munni",
            role: "Developer of Softing",
            image: "/images/user-1.png"
        },
    ];

    const title = "What people said about my books";
    const des = "Testimonials";

    return (
        <section className='bg-color py-5 my-5 mt-5'>
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
                            className="mySwiper "
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <Card className="border-0 bg-transparent testimony-card ">
                                        <Card.Body className='bg-white rounded-2 p-4'>
                                            <div className="quote-icon text-center fs-1 mb-3">
                                                <i className={testimonial.icon}></i>
                                            </div>
                                            <Card.Text className="mb-5 my-4 testimony-txt">
                                                {testimonial.text}

                                            </Card.Text>
                                            <div className="d-flex gap-4 mb-3 align-items-center card-line">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="rounded-circle"
                                                    style={{
                                                        width: "80px",
                                                        height: "80px",
                                                        objectFit: "cover"
                                                    }}
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
