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
    author: "Patrick Rothfuss",
    year: 2007,
    pages: 662,
    rating: 5,
    image: sanctuarioImg,
  },
  {
    id: "2",
    author: "Outro Autor",
    year: 2007,
    pages: 662,
    rating: 5,
    image: sanctuarioImg,
  },
];