import { gql } from '@apollo/client';

const getBooks = gql`
    query getAllBooks{
        books{
            name
            id
        }
    }
`;

const getOneBook = gql`
    query getOneBook($id: ID!){
        book(id: $id){
            id
            name
            type
            author{
                id
                nameAuthor
                age
                books{
                    id
                    name
                }
            }
        }
    }
`;

const getAuthors = gql`
    query getAllAuthors{
        authors{
            id
            nameAuthor
        }
    }
`;

export { getBooks, getOneBook, getAuthors };