import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const setup = () => ({
    id: '',
    title: '',
    author: '',
    category: '',
  });

  const dispatch = useDispatch();

  const [bookData, setBookData] = useState(setup());
  const { title, author, category } = bookData;
  const changeHandler = (e) => {
    setBookData((prevState) => ({
      ...prevState,
      id: uuidv4(),
      [e.target.name]: e.target.value,
    }));
  };

  const formHandler = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && author.trim() !== '') {
      dispatch(addBook(bookData));
      setBookData(setup());
    }
  };

  return (
    <div>
      <h3>ADD A NEW BOOK</h3>
      <form onSubmit={formHandler}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={title}
          onChange={changeHandler}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Book Author"
          value={author}
          onChange={changeHandler}
          required
        />
        <select
          name="category"
          value={category}
          required
          onChange={changeHandler}
        >
          <option value="" hidden>
            Category
          </option>
          <option value="Action">
            Action
          </option>
          <option value="sci-fi">
            Science Fiction
          </option>
          <option value="economy">
            Economy
          </option>
          <option value="Coding">
            Coding
          </option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};
export default Form;
