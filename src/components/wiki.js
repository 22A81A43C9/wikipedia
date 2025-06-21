import React, { useState, useEffect } from 'react';
import './wiki.css';
import wikiLogo from './wiki.png';
import { FaSearch } from 'react-icons/fa'; // ✅ import icon from react-icons

function Wiki() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.trim() === '') return;

    const fetchData = async () => {
      const res = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&format=json&origin=*`
      );
      const data = await res.json();
      setResults(data.query.search);
    };
    
    fetchData();
  }, [query]);

  return (
    <div className="wiki-container">
      <img
        src={wikiLogo}
        alt="Wikipedia globe logo"
        className="wiki-pic"
      />

      <div className="search-bar">
        <input
          type="search"
          className="wiki-search"
          placeholder="Search Wikipedia"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-icon">
          <FaSearch />
        </button>
      </div>

      <div className="search-results">
        {results.map((item) => (
          <div key={item.pageid} className="search-item">
            <a
              href={`https://en.wikipedia.org/?curid=${item.pageid}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
            </a>
            <p dangerouslySetInnerHTML={{ __html: item.snippet }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wiki;