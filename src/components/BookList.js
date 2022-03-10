import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeBook } from '../redux/books/books';
import BookItem from './BookItem';

const BookList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.booksReducer);
  const removeBookfromStore = (bookId) => {
    dispatch(removeBook(bookId));
  };
  return (
    <div>
      <ul>
        {data.length > 0 ? (
          data.map(({
            id, title, author, category,
          }) => (
            <BookItem
              key={id}
              title={title}
              author={author}
              category={category}
              id={id}
              removeBookHandler={removeBookfromStore}
            />
          ))
        ) : (
          <li>
            <h3>No books in store yet</h3>
          </li>
        )}
      </ul>
    </div>
  );
};

export default BookList;
