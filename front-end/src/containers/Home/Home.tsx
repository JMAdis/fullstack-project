import BookRequest from "../../types/BookRequest";
import Form from "../../components/Form/Form";
import Carousel from "../../components/Carousel/Carousel";;

type HomeProps = {
  books: BookRequest[];
  onBookFormSubmit: (newBook: BookRequest) => void;
};

const Home = ({ books, onBookFormSubmit }: HomeProps) => {
  return (
    <section>
      <Form
        defaultFormState={{
          id: 0,
          bookTitle: "",
          author: "",
          category: "",
          bookCover: "",
          genre: "",
          score: 0,
          review: "",
          dateRead: new Date(),
          format: "",
        }}
        formTitle={"What book are you reading?"}
        handleSubmit={onBookFormSubmit}
      />
      <Carousel books={books} />
    </section>
  );
};

export default Home;
