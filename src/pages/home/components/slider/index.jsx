import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import S from "./index.module.css";
import Banner_1 from "../../../../assets/images/sliderbanner_1.webp";
import Banner_2 from "../../../../assets/images/sliderbanner_2.webp";

const Slider = () => {
  return (
    <section className={S.Slider}>
      <Swiper
        className="h-full"
        loop={true}
        autoplay={{ delay: 3600, disableOnInteraction: false }}
        slidesPerView={1}
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <Link to={""} className="contents">
            <div className="h-full bg-[#f5d9e7]">
              <img src={Banner_1} alt="" />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={""} className="contents">
            <div className="h-full bg-[#bea6da]">
              <img src={Banner_2} alt="" />
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
