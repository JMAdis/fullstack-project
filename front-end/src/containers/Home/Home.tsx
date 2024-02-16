import BookRequest from "../../types/BookRequest";
import Form from "../../components/Form/Form";
import Carousel from "../../components/Carousel/Carousel";

type HomeProps = {
  books: BookRequest[];
  onBookFormSubmit: (newBook: BookRequest) => void;
};


const Home = ({ books, onBookFormSubmit }: HomeProps) => {

  const handleCreateBook = async (newBook: BookRequest) => {
    const result = await fetch("http://localhost:8080/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    });
    
    if (result.ok) {
      alert("Book created successfully");
      const createdBook = await result.json();
      onBookFormSubmit(createdBook);
    } else {
      const message = await result.text();
      alert(message);
    }
  };

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
        handleSubmit={handleCreateBook}
      />
      <Carousel books={books} />
    </section>
  );
};

export default Home;
