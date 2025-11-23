import './ClientReviews.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaStar } from "react-icons/fa6";

import {reviewsData} from './reviewsData';

const ClientReviews = () => {
    return (
        <>
            <section className="client-reviews">
                <div className="client-reviews-container">
                    <div className="client-reviews-head">
                        <h6>Client Reviews</h6>
                    </div>
                    <div className="client-reviews-body">
                        <div className="reviews-slider">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                slidesPerView={1}
                                centeredSlides={true}
                                loop={true}
                                grabCursor={true}
                                spaceBetween={0}
                                speed={1000}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}
                            >

                                {reviewsData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="slide-image">
                                            <img src={item.image} alt={item.name} loading="lazy" />
                                        </div>
                                        <div className="slide-content">
                                            <span>{item.name}</span>
                                            <span>{item.designation}</span>
                                            <div className="rating">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar key={i} className="star" />
                                                ))}
                                            </div>
                                            <p>{item.review}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}

                            </Swiper>

                            {/* Navigation Buttons */}
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ClientReviews
