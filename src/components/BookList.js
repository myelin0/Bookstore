import React from 'react';
import BookItem from './BookItem';

const BookList = () => (
  <ul>
    <BookItem title="The Hunger Games" author="Suzanne Collins" />
    <BookItem title="Dorian Gray" author="Oscar Wild" />
    <BookItem title="Clean Code" author="Robert C Martin" />
  </ul>
);

export default BookList;
