import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/header';
import Home from './components/pages/Home';
import Card from './components/Card/Card';
import Movielist from './components/movieslist/movielist';
import MoviesDetails from './components/moviesDetails/moviesDetails';

function App() {
  return (
    <div className="App">


      <Router>
        <Header />
        <Routes>

          <Route index element={<Home />}>  </Route>
          <Route path='movie/:id' element={<MoviesDetails/>}>   </Route>
          <Route path='movies/:type' element={<Movielist />}>   </Route>
          <Route path='card' element={<Card />}>  </Route>
         
          <Route path='/*' element={<h1>oops somethng not right</h1>}>   </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
