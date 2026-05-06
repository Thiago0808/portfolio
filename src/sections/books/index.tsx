import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import type { SectionsProps } from "../../App";
import { booksContent } from "../../content/booksContent";
import { contents } from "../../content/languages/content";
import "./style.css";

function Books({ language }: SectionsProps) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const content = contents[language].books;

  const navigate = (dir: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + dir + booksContent.length) % booksContent.length);
      setAnimating(false);
    }, 200);
  };

  const booksData = booksContent.map((book) => ({
    ...book,
    title: content.items[book.id as keyof typeof content.items].title,
    genre: content.items[book.id as keyof typeof content.items].genre,
    description: content.items[book.id as keyof typeof content.items].description,
  }));

  const book = booksData[current];

  const stars = (n: number) => "★".repeat(n) + "☆".repeat(5 - n);

  return (
    <div className="books-section" id="books">
      <SectionTitle title="BOOKS" positioning="center" />

      <div className="book-wrapper">
        <button className="nav-btn" onClick={() => navigate(-1)}>←</button>

        <div style={{ flex: 1 }}>
          <div className={`book-open ${animating ? "page-turning" : ""}`}>
            <div className="book-spine" />

            <div className="page-left">
              {book.image ? (
                <img src={book.image} alt={book.title} className="book-cover-img" />
              ) : (
                <div className="book-cover-placeholder">
                  <span className="book-emoji">📖</span>
                  <span className="book-cover-title">{book.title.toUpperCase()}</span>
                </div>
              )}
            </div>

            <div className="page-right">
              <div>
                <span className="book-genre-tag">{book.genre}</span>
                <h2 className="book-title-display">{book.title}</h2>
                <p className="book-author">{book.author}</p>
                <p className="book-desc">{book.description}</p>
              </div>
              <div className="book-meta">
                <span className="book-stars">{stars(book.rating)}</span>
                <span>📅 {book.year}</span>
                <span>📄 {book.pages}p</span>
              </div>
            </div>
          </div>

          <p className="page-num">{current + 1} of {booksContent.length}</p>

          <div className="progress-dots">
            {booksContent.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? "active" : ""}`}
                onClick={() => { setAnimating(true); setTimeout(() => { setCurrent(i); setAnimating(false); }, 200); }}
              />
            ))}
          </div>
        </div>

        <button className="nav-btn" onClick={() => navigate(1)}>→</button>
      </div>
    </div>
  );
}

export default Books;