export interface BookItem {
  id: string;
  author: string;
  year: number;
  pages: number;
  rating: number;
  image?: string;
  link?: string;
}

import sanctuarioImg from "../assets/img/about.jpg";


export const booksContent: BookItem[] = [
  {
    id: "1",
    author: "Craig Larman",
    year: 2004,
    pages: 736,
    rating: 5,
    image: sanctuarioImg,
  },
  {
    id: "2",
    author: "Luciano Antonio Siqueira",
    year: 2014,
    pages: 256,
    rating: 4,
    image: sanctuarioImg,
  },
  {
    id: "3",
    author: "Fernando Nicolau Freitas Ferreira",
    year: 2019,
    pages: 224,
    rating: 4,
    image: sanctuarioImg,
  },
  {
    id: "4",
    author: "Various Authors",
    year: 2010,
    pages: 300,
    rating: 4,
    image: sanctuarioImg,
  },
  {
    id: "5",
    author: "Felipe Nery Rodrigues Machado, Maurício Pereira de Abreu",
    year: 2012,
    pages: 352,
    rating: 4,
    image: sanctuarioImg,
  },
  {
    id: "6",
    author: "Henry Brighton",
    year: 2020,
    pages: 192,
    rating: 5,
    image: sanctuarioImg,
  },
  {
    id: "7",
    author: "Nina Edelweiss, Renata Galante",
    year: 2009,
    pages: 288,
    rating: 4,
    image: sanctuarioImg,
  },
  {
    id: "8",
    author: "Willian Pereira Alves",
    year: 2010,
    pages: 240,
    rating: 4,
    image: sanctuarioImg,
  },
  {
    id: "9",
    author: "Scott Rogers",
    year: 2014,
    pages: 504,
    rating: 5,
    image: sanctuarioImg,
  }
];