import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Carousel({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0
  };

  return (
    <Slider className={className} {...settings}>
      {children}
    </Slider>
  );
}
