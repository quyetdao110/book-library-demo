import { gql } from '@apollo/client';

const addNewBook = gql`
    mutation addNewBookMutation($name: String, $type: String, $authorId: ID!){
        createBook(name: $name, type: $type, authorId: $authorId){
            id
            name
        }
    }
`;

const updateBook = gql`
    mutation updateBookMutation($id: ID!, $name: String, $type: String, $authorId: ID!){
        updateBook(id: $id, name: $name, type: $type, authorId: $authorId){
            id
            name
        }
    }
`;

const deleteBook = gql`
    mutation deleteBookMutation($id: ID!){
        deleteBook(id: $id){
            id
            name
        }
    }
`;

const addNewAuthor = gql`
    mutation addNewAuthorMutation($nameAuthor: String, $age: Int){
        createAuthor(nameAuthor: $nameAuthor, age: $age){
            id
            nameAuthor
        }
    }
`;

export { addNewBook, addNewAuthor, updateBook, deleteBook };