import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './App.css';


const PaginationPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const perPage = 10;
  const offset = currentPage * perPage;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=1000'
      );
      setPokemonList(response.data.results);
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(0);
  };

  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredPokemonList.length / perPage);
  const displayedPokemonList = filteredPokemonList.slice(
    offset,
    offset + perPage
  );

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div>
      
      <h1>Pokémon Search</h1>
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={handleSearch}
      />
       <div className="button-container">
      {displayedPokemonList.map((pokemon) => (
        <div key={pokemon.name} className="pokemon-button">
          {pokemon.name}
        </div>
      ))}
    </div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default PaginationPage;
