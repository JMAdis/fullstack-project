import Slider from "react-slick";
import Book from "../Book/Book";
import BookRequest from "../../types/BookRequest";


const NextArrow = ({ onClick }) => (
    <button className="custom-next-arrow" onClick={onClick}>
      Next
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button className="custom-prev-arrow" onClick={onClick}>
      Prev
    </button>
  );

  type CarouselProps = {
    books: BookRequest[];
  };

const Carousel = ( {books} : CarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={undefined} />,
    prevArrow: <PrevArrow onClick={undefined} />,
  };

  
  return (
    <Slider {...settings}>
      {books.map((book) => (
        <div key={book.id}>
          <Book book={book} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;