function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}
function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

export const setting2 = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  appendDots: (dots) => (
    <div>
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  customPaging: (i) => <div className="custom-dots"></div>,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: null,
        prevArrow: null
      }
    }
  ]
};
