import './ClientReviews.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaStar } from "react-icons/fa6";

import reviewImage1 from '/images/reviews/1.webp';

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
                                speed={600}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}
                            >

                                <SwiperSlide>
                                    <div className="slide-image">
                                        <img src={reviewImage1} alt="Client Image" loading="lazy" />
                                    </div>
                                    <div className="slide-content">
                                        <span>H. Deniz Ersoz</span>
                                        <span>Culture & Tourism Counsellor, Embassy of the Republic of Turkiye</span>
                                        <div className="rating">
                                            <FaStar className="star" />
                                            <FaStar className="star" />
                                            <FaStar className="star" />
                                            <FaStar className="star" />
                                            <FaStar className="star" />
                                        </div>
                                        <p>Choosing to collaborate with Confiance was driven by Bushra’s profound insight into the sentiments of Indian consumers regarding international travel. I take great satisfaction in recognizing them as an exemplary partner for the India campaign of Türkiye Tourism. Throughout our association, Confiance has consistently provided valuable strategic inputs and leveraged relationships to establish robust awareness around Türkiye's locations as premier travel, leisure, and wedding destinations. I anticipate many more years of a fruitful partnership with Confiance, relying on their expertise as our strategic communication advisor for India.</p>
                                    </div>
                                </SwiperSlide>
                                
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
