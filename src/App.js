
import BookForm from "./components/BookForm";
import BookList from "./components/BooksList";
import Navbar from "./components/Navbar";
import BookContextProvider from "./contexts/BookContext";


function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <BookForm/>
        
      </BookContextProvider>
    </div>
  );
}

export default App;
