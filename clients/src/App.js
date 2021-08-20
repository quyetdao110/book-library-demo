import { Container } from "react-bootstrap";
import BookList from "./components/BookList";
import Forms from "./components/Forms";
import React, { useState } from "react";

function App() {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [authorId, setAuthorId] = useState();
  const [age, setAge] = useState();
  const [nameAuthor, setNameAuthor] = useState();

  return (
      <Container className="py-3 mt-3">
        <h1 className="text-center text-info mb-3"> Books library </h1> <hr />
        <Forms
          id={id}
          setId={setId}
          name={name}
          setName={setName}
          type={type}
          setType={setType}
          authorId={authorId}
          setAuthorId={setAuthorId}
          nameAuthor={nameAuthor}
          setNameAuthor={setNameAuthor}
          age={age}
          setAge={setAge}
        />
        <hr />
        <BookList
          id = {id}
          setId = {setId}
          setName={setName}
          setType={setType}
          setAuthorId={setAuthorId}
        />
      </Container>
  );
}

export default App;
