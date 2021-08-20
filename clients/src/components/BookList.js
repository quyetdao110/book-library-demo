import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { CardColumns } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import BookDetails from "./BookDetail";

import { useQuery, useLazyQuery } from "@apollo/client";
import { getBooks, getOneBook } from "../graphql-client/query";
// import { getAuthors, getBooks, getBookToUpdate } from '../graphql-client/query';

const BookList = ({ id, setId, setName, setType, setAuthorId }) => {
  const [bookSelected, setBookSelected] = useState(null);

  const handleChooseBook = (id) => {
    setBookSelected(id);
    setId(id);
    getData();
  };

  const [getData] = useLazyQuery(getOneBook, {
    variables: {
      id: bookSelected,
    },
    onCompleted: (data) => {
      console.log("dât--", data);
      setName(data.book.name);
      setType(data.book.type);
      setAuthorId(data.book.author.id);
    },
    fetchPolicy: "network-only",
  });

  const { loading, error, data } = useQuery(getBooks);
  if (loading) return <p> Loading... </p>;
  if (error) return <p> Loading error!!! </p>;

  return (
    <Row>
      <Col xs={8}>
        <CardColumns>
          {data.books.map((book) => (
            <Card
              border="info"
              text="info"
              className="text-center shadow"
              key={book.id}
              onClick={() => handleChooseBook(book.id)}
            >
              <Card.Body> {book.name} </Card.Body>{" "}
            </Card>
          ))}{" "}
        </CardColumns>{" "}
      </Col>{" "}
      <Col>
        <BookDetails bookId={bookSelected} />{" "}
      </Col>{" "}
    </Row>
  );
};

export default BookList;
