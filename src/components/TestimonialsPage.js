import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style/TestimonialsPage.scss";
// import required modules
import { Pagination } from "swiper/modules";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function TestimonialsPage() {
  const TestimonialsData = [
    {
      name: "Lorem Ipsum",
      img: "https://www.w3schools.com/howto/img_avatar.png",
      about:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
      position: "frontend developer",
    },
    {
      name: "Lorem Ipsum",
      img: "https://www.w3schools.com/howto/img_avatar.png",
      about:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
      position: "frontend developer",
    },
    {
      name: "Lorem Ipsum",
      img: "https://www.w3schools.com/howto/img_avatar.png",
      about:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
      position: "frontend developer",
    },
  ];

  return (
    <>
      <div className="TestimonialsPageOutterBody">
        <div className="TestimonialsPageInnerBody">
          <div className="TestimonialsPageWidthManage">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {
                // map through the data and render each item in a swiper slide component
                TestimonialsData?.map((item) => {
                  return (
                    <SwiperSlide id="slide">
                      <div className="slideInnerBody">
                        <div className="topQuoteIcon">
                          <FormatQuoteIcon
                            style={{ fontSize: "50", rotate: "180deg" }}
                          />
                        </div>
                        <div className="slideImg">
                          <img src={item.img} />
                        </div>
                        <div className="slideTitleBody">
                          <h2>{item.name}</h2>
                          <p>{item.position}</p>
                        </div>
                        <div className="slideTextAboutBody">
                          <p>{item.about}</p>
                        </div>
                        <div className="bottomQuoteIcon">
                          <FormatQuoteIcon style={{ fontSize: "50" }} />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })
              }
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
