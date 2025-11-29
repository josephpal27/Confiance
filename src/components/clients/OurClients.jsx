import './OurClients.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const OurClients = () => {

    // const clientImages = [
    //     "/images/clients/1.avif",
    //     "/images/clients/2.avif",
    //     "/images/clients/3.avif",
    // ];

    const clientImages = Array.from({ length: 104 }, (_, i) => `/images/clients/${i + 1}.avif`);

    const blackImages = [31, 32, 54, 69, 75, 83];

    return (
        <>
            <section className="our-clients">
                <h5 data-aos="zoom-out">Our Clients</h5>

                <div className="our-clients-slider">
                    <Swiper
                        modules={[Navigation, Autoplay, EffectCoverflow]}
                        slidesPerView={4}
                        centeredSlides={true}
                        loop={true}
                        grabCursor={true}
                        spaceBetween={0}
                        speed={600}
                        effect="coverflow"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 300,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        breakpoints={{
                            0: { slidesPerView: 2 },
                            768: { slidesPerView: 4 },
                        }}
                    >
                        {clientImages.map((img, index) => {
                            const imageNumber = index + 1; // because index starts at 0
                            
                            return (
                                <SwiperSlide key={index}>
                                    <img
                                        src={img}
                                        loading="lazy"
                                        alt="client"
                                        className={blackImages.includes(imageNumber) ? "black" : ""}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
            </section>
        </>
    )
}

export default OurClients
