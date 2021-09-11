import { useState } from 'react'

function AddBookForm({ isAddBook, setIsAddBook, books, setBooks }) {

  const baseURL = "https://book-app-heroku-backend.herokuapp.com/";

  const [ formState, setFormState ] = useState({
    title: "",
    author: "",
    tag_name: ""
  });

  function addBook(book) {
    fetch(`${baseURL}books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book)
    })
      .then(r => r.json())
      .then(addedBook => {
        const updatedBooks = [ ...books, addedBook ];
        setBooks(updatedBooks);
      });
  }

  function handleEntryChange(event) {
    const fieldName = event.target.name;
    const userInput = event.target.value;
    setFormState( formState => ({
      ...formState,
      [fieldName]: userInput
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const addingBook = {
      title: formState.title,
      author: formState.author,
      tag_name: formState.tag_name
    };
    addBook(addingBook);
    setIsAddBook(isAddBook => !isAddBook);
    setFormState({
      title: "",
      author: "",
      tag_name: ""
    });
  }

  return (
    <form className="add-book-form" onSubmit={handleSubmit}>

        <label>Title</label>
        <input type="text" onChange={handleEntryChange}     
          name="title" value={formState.title} />

        <label>Author(s)</label>
        <input type="text" onChange={handleEntryChange} name="author" value={formState.author} />

        <label>Tag(s)</label>
        <input type="text" onChange={handleEntryChange} name="tag_name" value={formState.tag_name} />

        {/* <label>Description: </label>
        <textarea onChange={handleEntryChange}
          name="book_description" 
          value={formState.book_description} />

        <label>Group: </label>
        <select onChange={handleSelectGroupClick}>
          {
            groups.map(group => 
              <option key={group.id} value={group.id}>
                {group.group_name}
              </option>)
          }
        </select>

        <label>Read Status: </label>
        <select onChange={handleSelectStatusClick}>
          {
            statuses.map(status => (
              <option key={status.id} value={status.id}>
                {status.read_status}
              </option>))
          }
        </select> */}

        <input type="submit" value="Add" />
      </form>
  );
}

export default AddBookForm;
