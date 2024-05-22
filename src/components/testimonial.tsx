import { FC, useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  styled,
} from "@mui/material";
import { Rating } from "@mui/material";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { StyledBox } from "./ourServices";

import "swiper/css";
import "swiper/css/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "swiper/swiper-bundle.css";
import { StyledBackgroundBox } from "./aboutUs";

const dummyArray = [
  {
    id: 1,
    title: "John D.",
    subTitle: "Senior Project Manager at BuildRight Inc.",
    rating: 3,
    image: "Rectangle 48.jpg",
    description:
      "Emartech's real-time project insights and comprehensive marketplace have streamlined our construction processes. Their support team is top-notch, making informed decision-making effortless. ",
  },
  {
    id: 2,
    title: "Sarah L.",
    subTitle: "Operations Director at Prime Constructions Ltd.",
    rating: 5,
    image: "Rectangle 48.jpg",
    description:
      "With Emartech, we get instant insights and easy access to quality materials and services. Their platform has improved our efficiency and project success rates significantly.",
  },
  {
    id: 3,
    title: "John D.",
    subTitle: "Senior Project Manager at BuildRight Inc.",
    rating: 3,
    image: "Rectangle 48.jpg",
    description:
      "Emartech's real-time project insights and comprehensive marketplace have streamlined our construction processes. Their support team is top-notch, making informed decision-making effortless. ",
  },
  {
    id: 4,
    title: "Sarah L.",
    subTitle: "Operations Director at Prime Constructions Ltd.",
    rating: 5,
    image: "Rectangle 48.jpg",
    description:
      "With Emartech, we get instant insights and easy access to quality materials and services. Their platform has improved our efficiency and project success rates significantly.",
  },
];

const StyledBackgroundBoxTestimonial = styled(StyledBackgroundBox)({
  // ".swiper-wrapper": {
  //   ".swiper-slide.swiper-slide-active": {
  //     ".MuiContainer-root": {
  //       display: "flex",
  //       alignItems: "center",
  //       justifyContent: "space-around",
  //       padding: "0",
  //       // ".MuiPaper-elevation": {
  //       //   maxWidth: "100%",
  //       // },
  //     },
  //   },
  // },
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const SwiperButtonNext: FC<any> = ({ isEnd, isStart }) => {
  const swiper = useSwiper();
  return (
    <>
      <Button
        disabled={isStart}
        onClick={() => swiper.slidePrev()}
        // sx={{ width: "5%" }}
      >
        <ArrowBackIosIcon />
      </Button>
      <Button
        disabled={isEnd}
        onClick={() => swiper.slideNext()}
        // sx={{ width: "5%", marginLeft: 2 }}
      >
        <ArrowForwardIosIcon />
      </Button>
    </>
  );
};

export const Testimonial: FC = () => {
  const [isEnd, setIsEnd] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleSlideChange = (swiper: any) => {
    setIsEnd(swiper.isEnd);
    setIsStart(swiper.isBeginning);
  };

  return (
    <StyledBox>
      <StyledBackgroundBoxTestimonial
        sx={{ backgroundImage: "url('/assets/Rectangle 1378.png')" }}
      >
        <Box className="content-box" sx={{ padding: "30px" }}>
          <h4 className="sub-heading-text">
            <span className="line-span-holder">
              <span className="line-span" />
              <span className="line-span" />
            </span>
            TESTIMONIAL
          </h4>
          <Box className="content-holder">
            <h1 className="heading-text">Build Everything You Need</h1>
          </Box>
          <Box>
            <Swiper
              breakpoints={{
                480: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },

                // 0: { slidesPerView: 1, spaceBetween: 10 },
                // 480: { slidesPerView: 1, spaceBetween: 20 },
                // 768: { slidesPerView: 2, spaceBetween: 30 },
                // 1280: { slidesPerView: 2, spaceBetween: 40 },
              }}
              modules={[Navigation, Pagination, A11y]}
              onSlideChange={(swiper: any) => handleSlideChange(swiper)}
              pagination={windowWidth < 768 ? { clickable: true } : false}
            >
              {dummyArray.map((item, index) => (
                <SwiperSlide key={index}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Card
                      sx={{
                        marginTop: "30px",

                        maxWidth: 900,
                        position: "relative",
                        marginBottom: 5,
                        overflow: "visible",
                        width: "100%",
                      }}
                    >
                      <img
                        src={"/assets/Rectangle 48.jpg"}
                        alt="Image Not Found"
                        // style={{ position: "absolute", top: -30, right: 30 }}
                        style={{
                          position: "absolute",
                          top: -30,
                          right: 30,

                          zIndex: 1,
                          maxHeight: windowWidth < 768 ? "150px" : "300px",
                          maxWidth: windowWidth < 768 ? "80px" : "300px",
                        }}
                      />
                      <CardContent
                        sx={{
                          padding: windowWidth < 768 ? "10px" : "20px",
                        }}
                      >
                        <Typography
                          gutterBottom
                          variant={windowWidth < 768 ? "subtitle1" : "h5"}
                          component="div"
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant={windowWidth < 768 ? "subtitle2" : "h7"}
                          sx={{ width: windowWidth < 768 ? "60%" : "100%" }}
                          component="div"
                        >
                          {item.subTitle}
                        </Typography>
                        <Rating name="read-only" value={item.rating} readOnly />
                        <Typography variant="body2" color="text.secondary">
                          {item.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </SwiperSlide>
              ))}

              {windowWidth > 768 && (
                <SwiperButtonNext isEnd={isEnd} isStart={isStart} />
              )}
            </Swiper>
          </Box>
        </Box>
      </StyledBackgroundBoxTestimonial>
    </StyledBox>
  );
};
