import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/style.css"

import Gallery1 from "../assets/gallery-1.png"
import Gallery2 from "../assets/gallery-2.png"
import Gallery3 from "../assets/gallery-3.png"
import Gallery4 from "../assets/gallery-4.png"
import Gallery5 from "../assets/gallery-5.png"
import Gallery6 from "../assets/gallery-6.png"
import Gallery7 from "../assets/gallery-7.png"
import Gallery8 from "../assets/gallery-8.png"
import Gallery9 from "../assets/gallery-9.png"
import Gallery10 from "../assets/gallery-10.png"
import Gallery11 from "../assets/gallery-11.png"
import Gallery12 from "../assets/gallery-12.png"

const images = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery7,
    Gallery8,
    Gallery9,
    Gallery10,
    Gallery11,
    Gallery12,
];

const Gallery = () => {
    return (
        <section className="gallery-section">
            <div className="headings">
                <h3>Gallery</h3>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <Swiper
                modules={[Autoplay, Pagination]}
                loop
                centeredSlides
                slidesPerView="auto"
                spaceBetween={30}
                autoplay={{ delay: 3000 }}
                pagination={{
                    el: ".gallery-pagination",
                    clickable: true,
                }}
                className="gallery-swiper"
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 3 },
                    992: { slidesPerView: 5 },
                    1200: { slidesPerView: 7 },
                }}
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index} className="gallery-slide">
                        <img src={img} alt="app screen" />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="gallery-pagination"></div>

        </section>
    );
};

export default Gallery;
