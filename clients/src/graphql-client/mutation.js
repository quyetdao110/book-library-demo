import { gql } from '@apollo/client';

const addNewBook = gql `
    mutation addNewBookMutation($name: String, $type: String, $authorId: ID!){
        createBook(name: $name, type: $type, authorId: $authorId){
            id
            name
        }
    }
`;

const addNewAuthor = gql `
    mutation addNewAuthorMutation($name: String, $age: Int){
        createAuthor(name: $name, age: $age){
            id
            name
        }
    }
`;

export { addNewBook, addNewAuthor };