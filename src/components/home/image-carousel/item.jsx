export default function CarouselItem({ imageSrc, altText, isActive = false }) {
  return (
    <div className={`carousel-item ${isActive ? "active" : ""}`}>
      <img src={imageSrc} className="d-block w-100" alt={altText} />
    </div>
  );
}
