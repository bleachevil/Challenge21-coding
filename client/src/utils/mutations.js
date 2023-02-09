import { gql } from "@apollo/client";

export const LoginUSER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const AddUSER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SaveBOOK = gql`
  mutation saveBook($book: BookItem!) {
    saveBook(book: $book) {
      _id
      username
      email
      bookCount
      savedBooks {
        description
        bookId
        authors
        title
        image
        link
      }
    }
  }
`;

export const RemoveBOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks {
        description
        bookId
        authors
        title
        image
        link
      }
    }
  }
`;
