import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { useQuery, useMutation } from "@apollo/client";
import { getAuthors, getBooks, getOneBook } from "../graphql-client/query";
import { addNewBook, updateBook, deleteBook } from "../graphql-client/mutation";

const BookForm = ({
  id,
  name,
  handleName,
  type,
  handleType,
  authorId,
  handleAuthorId,
}) => {
  
  //graphql operations
  const { loading, error, data } = useQuery(getAuthors, getOneBook);
  const [addBook, dataMutation] = useMutation(addNewBook);
  const [updatedBook] = useMutation(updateBook);
  const [deletedBook] = useMutation(deleteBook);

  console.log(dataMutation);

  const onCreate = (event) => {
    event.preventDefault();
    addBook({
      variables: { name, type, authorId },
      refetchQueries: [{ query: getBooks }],
    });
    handleName();
    handleType();
    handleAuthorId();
  };

  const onUpdate = (event) => {
    event.preventDefault();
    console.log("id---", id);
    updatedBook({
      variables: {
        id,
        name,
        type,
        authorId,
      },
      refetchQueries: [{ query: getBooks }],
    });
  };

  const onDelete = (event) => {
    event.preventDefault();
    deletedBook({
      variables: {
        id
      },
      refetchQueries: [{ query: getBooks }],
    })
  }

  return (
    <Form>
      <Form.Group>
        <Form.Control type="text" placeholder="Book name" name="name" onChange={(event) => handleName(event.target.value)} value={name} />
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="Book type" name="type" onChange={(event) => handleType(event.target.value)} value={type} />
      </Form.Group>
      <Form.Group>
        {loading ? (
          <p> Loading... </p>
        ) : (
          <Form.Control as="select" name="authorId" onChange={(event) => handleAuthorId(event.target.value)} value={authorId}
          >
            <option value="" disabled>Select author</option>
            {data.authors.map((author) => (<option key={author.id} value={author.id}>{author.nameAuthor} </option> ))}
          </Form.Control>
        )}
      </Form.Group>
      <Button className="float-right" variant="info" type="submit" onClick={onCreate}>Add Book </Button>
      <Button className="float-right" variant="info" type="update" onClick={onUpdate}>Update Book </Button>
      <Button className="float-right" variant="info" type="delete" onClick={onDelete}>Delete Book </Button>
    </Form>
  );
};

export default BookForm;
