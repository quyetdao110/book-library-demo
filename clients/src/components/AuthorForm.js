import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { useMutation } from "@apollo/client";
import { getAuthors } from "../graphql-client/query";
import { addNewAuthor } from "../graphql-client/mutation";

const AuthorForm = ({
  nameAuthor, handleAuthorName, age, handleAge 
  }) => {

    //graphql operations
    const [addAuthor, dataMutation] = useMutation(addNewAuthor);
    console.log(dataMutation);
  
    const onCreate = (event) => {
      event.preventDefault();
      addAuthor({
        variables: { nameAuthor, age }
      });
      handleAuthorName();
      handleAge();
    };
  
    return (
      <Form>
        <Form.Group className="invisible">
          <Form.Control />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Author name"
            name="nameAuthor"
            onChange={(event)=> handleAuthorName(event.target.nameAuthor)}
            value={nameAuthor}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="number"
            placeholder="Author age"
            name="age"
            onChange={(event)=> handleAge(event.target.age)}
            value={age}
          />
        </Form.Group>
        <Button className="float-right" variant="info" type="submit" onClick={onCreate}>Add Author </Button>
      </Form>
    );
};

export default AuthorForm;
