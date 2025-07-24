import { useState } from 'react';

const Bookshelf = ({ initialBooks }) => {
  const [books, setBooks] = useState(initialBooks);
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
  };

const handleSubmit = (event) => {
        event.preventDefault()
        if (newBook.title === "" || newBook.author === "") return
        // need to add new book to books
        const newBookWithId = { ...newBook, id: Math.random() * 10000 }
        setBooks([...books, newBookWithId])
        // to reset the input for title and author
        setNewBook({ title: "", author: "" })
    };

return (
<div className="bookshelfDiv">
<div className="formDiv">
<h3>Add a new book</h3>
<form onSubmit={handleSubmit}>
<label htmlFor="title">Title</label>
<input type="text" id="title" name="title" value={newBook.title} onChange={handleInputChange} />
 <label htmlFor="author">Author</label>
<input type="text" name="author" id="author" value={newBook.author} onChange={handleInputChange} />
<button>Add</button>
</form>
  </div>
  <div className="bookCardsDiv">{books.map((book) => (<li key={book.id}>{book.title} by {book.author}</li>))}</div>
</div>
)
};
export default Bookshelf;
