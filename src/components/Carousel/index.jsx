import SwiperCore from "swiper";
import "swiper/css";
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

import styles from "/src/components/Carousel/index.module.scss";

SwiperCore.use([Autoplay]);

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export default function Carousel({children}) {
    return (
        <Swiper
            autoplay={{
                delay: 8000,
            }}
            loop={true}
            speed={500}
            className={styles.carousel}
        >
            {children.map((slide, index) => (
                <SwiperSlide key={index}>
                    {slide}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}