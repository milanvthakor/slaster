import CarouselItem from "./item.jsx";
import "./carousel.css";

const carouselItems = [
  {
    imageSrc: "/home.png",
    altText: "Slaster Home Dashboard",
  },
  {
    imageSrc: "/configure_status.png",
    altText: "Configure Status Settings",
  },
];

export default function ImageCarousel() {
  return (
    <div className="container-fluid p-0 mt-5">
      <div
        id="imageCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#imageCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <CarouselItem
              key={index}
              imageSrc={item.imageSrc}
              altText={item.altText}
              title={item.title}
              description={item.description}
              isActive={index === 0}
            />
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
