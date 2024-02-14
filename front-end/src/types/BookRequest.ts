type BookRequest = {
    id: number;
    bookTitle: string;
    author: string; 
    category: string;
    bookCover: string;
    genre: string;
    score: number;
    review: string;
    date: Date;
    format: string;
};

export default BookRequest;