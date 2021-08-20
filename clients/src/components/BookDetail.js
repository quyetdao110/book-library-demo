import { useQuery } from "@apollo/client";
import React from "react";
import { Card } from "react-bootstrap";
import { getOneBook } from "../graphql-client/query";

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(getOneBook, {
    variables: {
      id: bookId,
    },
    skip: bookId === null,
  });

  if (loading) return <p> Loading... </p>;
  if (error) return <p> Loading error!!! </p>;

  const book = bookId !== null ? data.book : null;

  return (
    <Card bg="info" text="white" className="shadow">
      <Card.Body>
        {" "}
        {book === null ? (
          <Card.Text> Choose a book </Card.Text>
        ) : (
          <div>
            <Card.Title> {book.name} </Card.Title>{" "}
            <Card.Subtitle> {book.type} </Card.Subtitle>{" "}
            <p> {book.author.nameAuthor} </p> <p> Age: {book.author.age} </p>{" "}
            <p> All books by this author </p>{" "}
            <ul>
              {" "}
              {book.author.books.map((book) => (
                <li key={book.id}> {book.name} </li>
              ))}{" "}
            </ul>{" "}
          </div>
        )}{" "}
      </Card.Body>{" "}
    </Card>
  );
};

export default BookDetails;
