import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import BookForm from "./BookForm";
import AuthorForm from "./AuthorForm";

const Forms = ({
  id,
  setId,
  name,
  setName,
  type,
  setType,
  authorId,
  setAuthorId,
  age,
  setAge,
  nameAuthor,
  setNameAuthor
}) => {

  return (
    <Row>
      <Col>
        <BookForm
          id={id}
          name={name}
          handleName={setName}
          type={type}
          handleType={setType}
          authorId={authorId} 
          handleAuthorId={setAuthorId}
          />
      </Col>
      <Col>
        <AuthorForm 
        nameAuthor={nameAuthor}
        handleAuthorName={setNameAuthor}
        age={age}
        handleAge={setAge}
         />
      </Col>
    </Row>
  );
};

export default Forms;
