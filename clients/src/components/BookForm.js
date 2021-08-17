import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { useQuery, useMutation } from '@apollo/client';
import { getAuthors, getBooks } from '../graphql-client/query';
import { addNewBook } from '../graphql-client/mutation';

const BookForm = () => {
    const [newBook, setNewBook] = useState({
        name: '',
        type: '',
        authorId: ''
    });

    const { name, type, authorId } = newBook;

    const onInputChange = event => {
        setNewBook({
            ...newBook,
            [event.target.name]: event.target.value
        })
    };

    const onSubmit = event => {
        event.preventDefault();
        addBook({
            variables: { name, type, authorId },
            refetchQueries: [{ query: getBooks }]
        })
        setNewBook({
            name: '',
            type: '',
            authorId: ''
        })

    };
    //graphql operations
    const { loading, error, data } = useQuery(getAuthors);

    const [addBook, dataMutation] = useMutation(addNewBook);

    console.log(dataMutation);

    return ( <
            Form onSubmit = { onSubmit } >
            <
            Form.Group >
            <
            Form.Control type = 'text'
            placeholder = 'Book name'
            name = 'name'
            onChange = { onInputChange }
            value = { name }
            />  < /
            Form.Group > <
            Form.Group >
            <
            Form.Control type = 'text'
            placeholder = 'Book type'
            name = 'type'
            onChange = { onInputChange }
            value = { type }
            />  < /
            Form.Group > <
            Form.Group > {
                loading ? < p > Loading... < /p> : <Form.Control as = 'select' name='authorId' onChange={onInputChange} value={authorId}>  <
                option value = ''
                disabled > Select author < /option> { data.authors.map(author => < option key = { author.id } value = { author.id } > { author.name } </option > )
        } <
        /Form.Control >
}

<
/Form.Group>  <
Button className = 'float-right'
variant = 'info'
type = 'submit' > Add Book < /Button>  < /
    Form >
)
}

export default BookForm