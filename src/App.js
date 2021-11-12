import { BrowserRouter , Route, Routes } from 'react-router-dom';
import AddMovies from './AddMovies/AddMovies';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home.js';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/addMovies"  element={<AddMovies></AddMovies>} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
