import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import Annotation from "../../components/Annotation/Annotation";
import Book from "../../components/Book/Book";
import Reviews from "../../components/Reviews/Reviews";

function BookPage({ book }) {
  return (
    <main className={classnames(styles.main)}>
      <Book
        name={book.name}
        authors={book.authors}
        genre={book.genre}
        price={book.price}
        key={book.id}
        target={"annotation"}
      />
      <Annotation annotation={book.annotation} />
      {book.reviews && <Reviews reviews={book.reviews} />}
    </main>
  );
}

export default BookPage;
