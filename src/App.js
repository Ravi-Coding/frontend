import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/searchBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import axios from 'axios';

function App() {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;

    axios.get(apiUrl)
    .then(response => {
      // console.log('Fetched Cards:', response.data); 
      setCards(response.data);
    })
      .catch(error => console.error('Error fetching data:', error));
      
  }, []);

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <div className = "help-text">
        <h1>How Can We Help You ?</h1>
      </div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <MainContent cards={filteredCards} />
      <Footer />
    </div>
  );
}

export default App;



// localhost : 'http://localhost:3008/cards'