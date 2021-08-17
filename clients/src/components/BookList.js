import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { CardColumns } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import BookDetails from './BookDetail';

import { useQuery } from '@apollo/client';
import { getBooks } from '../graphql-client/query';

const BookList = () => {
    const [bookSelected, setBookSelected] = useState(null);

    const { loading, error, data } = useQuery(getBooks);
    if (loading) return <p > Loading... < /p>
    if (error) return <p > Loading error!!! < /p>

    return ( <
        Row >
        <
        Col xs = { 8 } >
        <
        CardColumns >

        {
            data.books.map(book => < Card border = 'info'
                text = 'info'
                className = 'text-center shadow'
                key = { book.id }
                onClick = { setBookSelected.bind(this, book.id) } >
                <
                Card.Body > { book.name } < /Card.Body>  < /
                Card > )
        } <
        /CardColumns>  < /
        Col > <
        Col >
        <
        BookDetails bookId = { bookSelected }
        /> <
        /Col>  < /
        Row >
    )
}

export default BookList