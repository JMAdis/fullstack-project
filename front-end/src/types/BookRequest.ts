import { ReactNode } from "react";

type BookRequest = {
    id: number;
    bookTitle: string;
    author: string; 
    category: string;
    bookCover: string;
    genre: string;
    score: number;
    review: string;
    dateRead: string;
    format: string;
};

export default BookRequest;