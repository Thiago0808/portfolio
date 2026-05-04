export interface BookItem {
  id: string;
  author: string;
  year: number;
  pages: number;
  rating: number;
  image?: string;
}

import book1Img from "../assets/img/books/book1.jpg";
import book2Img from "../assets/img/books/book2.jpg";
import book3Img from "../assets/img/books/book3.png";
import book4Img from "../assets/img/books/book4.jpg";
import book5Img from "../assets/img/books/book5.webp";
import book6Img from "../assets/img/books/book6.jpg";
import book7Img from "../assets/img/books/book7.webp";
import book8Img from "../assets/img/books/book8.jpg";
import book9Img from "../assets/img/books/book9.jpg";


export const booksContent: BookItem[] = [
  {
    id: "1",
    author: "Craig Larman",
    year: 2004,
    pages: 736,
    rating: 5,
    image: book1Img,
  },
  {
    id: "2",
    author: "Luciano Antonio Siqueira",
    year: 2014,
    pages: 256,
    rating: 4,
    image: book2Img,
  },
  {
    id: "3",
    author: "Fernando Nicolau Freitas Ferreira",
    year: 2019,
    pages: 224,
    rating: 4,
    image: book3Img,
  },
  {
    id: "4",
    author: "Various Authors",
    year: 2010,
    pages: 300,
    rating: 4,
    image: book4Img,
  },
  {
    id: "5",
    author: "Felipe Nery Rodrigues Machado, Maurício Pereira de Abreu",
    year: 2012,
    pages: 352,
    rating: 4,
    image: book5Img,
  },
  {
    id: "6",
    author: "Henry Brighton",
    year: 2020,
    pages: 192,
    rating: 5,
    image: book6Img,
  },
  {
    id: "7",
    author: "Nina Edelweiss, Renata Galante",
    year: 2009,
    pages: 288,
    rating: 4,
    image: book7Img,
  },
  {
    id: "8",
    author: "Willian Pereira Alves",
    year: 2010,
    pages: 240,
    rating: 4,
    image: book8Img,
  },
  {
    id: "9",
    author: "Scott Rogers",
    year: 2014,
    pages: 504,
    rating: 5,
    image: book9Img,
  }
];