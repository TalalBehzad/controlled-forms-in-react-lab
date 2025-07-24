// src/App.jsx
import './App.css';
import './index.css';
import Bookshelf from './components/Bookshelf/Bookshelf.jsx';
const books = [{
  title: 'Fourth Wing',
  author: 'Rebecca Yarros',
  id: 1
},
{
  title: 'The Lion, the Witch and the Wardrobe',
  author: 'C.S. Lewis',
  id: 2
}]
const App = () => {
  return (
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf initialBooks={books} />
    </>
  );
};

export default App;
