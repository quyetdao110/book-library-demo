import { gql } from '@apollo/client';

const getBooks = gql `
    query getAllBooks{
        books{
            name
            id
        }
    }
`;

const getOneBook = gql `
    query getOneBook($id: ID!){
        book(id: $id){
            id
            name
            type
            author{
                id
                name
                age
                books{
                    id
                    name
                }
            }
        }
    }
`;

const getAuthors = gql `
    query getAllAuthors{
        authors{
            id
            name
        }
    }
`;

export { getBooks, getOneBook, getAuthors };