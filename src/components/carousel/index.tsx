import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Carousel({
  children,
  className,
  autoplay = false
}: {
  children: React.ReactNode;
  className?: string;
  autoplay?: boolean;
}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoPlay: autoplay,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    fade: true,
    easing: "ease-in-out"
  };

  return (
    <Slider className={className} {...settings}>
      {children}
    </Slider>
  );
}
