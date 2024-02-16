import { ReactNode } from "react";

type BookRequest = {
    id: number;
    bookTitle: string;
    author: string; 
    category: string;
    bookCover: string;
    genre: string;
    score: number | ReactNode;
    review: string | ReactNode;
    dateRead: Date | string | ReactNode;
    format: string | ReactNode;
};

export default BookRequest;