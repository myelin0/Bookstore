const Form = () => (
  <div>
    <h3>ADD A NEW BOOK</h3>
    <input placeholder="Book Title" />
    <select
      name="category"
      defaultValue=""
      required
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
    </select>
    <button type="submit">Add Book</button>
  </div>
);

export default Form;
