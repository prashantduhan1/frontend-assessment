import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PaginationPage from './PaginationPage';
import LazyLoadPage from './LazyLoadPage';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Pokémon App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/pagination">Pagination Page</Link>
            </li>
            <li>
              <Link to="/lazyload">Lazy Load Page</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/pagination" element={<PaginationPage />} />
        <Route path="/lazyload" element={<LazyLoadPage />} />
      </Routes>
    </Router>
  );
};

export default App;
