import "./Carousel.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Book from "../Book/Book";
import BookRequest from "../../types/BookRequest";


type CarouselProps = {
  books: BookRequest[];
};

const Carousel = ({ books }: CarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-wrapper">
      <Slider className="carousel" {...settings}>
        {books.map((book) => (
          <div key={book.id}>
            <Book book={book} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
