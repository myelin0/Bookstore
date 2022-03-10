import React from 'react';

const BookItem = () => (
  <div>
    <p className="bookCategory">Action</p>
    <h2 className="BookTitle">The Hunger Games</h2>
    <span className="author">Suzanne Collins</span>
    {' '}
    <br />
    <button type="button">Comments</button>
    <button type="button">Remove</button>
    <button type="button">Edit</button>
    <div>circle</div>
    <div>64% Completed</div>
    <p className="chapter">CURRENT CHAPTER</p>
    <p className="chapterDetail">Chapter 17</p>
    <button type="button">UPDATE PROGRESS</button>
  </div>
);

export default BookItem;
