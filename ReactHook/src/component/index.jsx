import React, { useState, useEffect } from 'react';
import CardList from './Card/cardList';
import Navbar from './navbar/navbar';
import Loading from './Loading/loading';

const Body = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setIsLoading(true);
      const url = `https://newsapi.org/v2/top-headlines?q=${searchQuery}&country=id&apiKey=8433effe354a4a12925b65155fa041be`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.articles.length < 1) {
        displayMessage('');
      } else {
        console.log(data.articles);
        setArticles(data.articles);
      }

      setTimeout(() => {
        // Do something after 2000 milliseconds
      }, 2000);
    } catch (error) {
      console.error('Error fetching data:', error);
      displayMessage('circular');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    fetchArticles();
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const displayMessage = (type) => {
    if (type === 'circular') {
      return (
        <div id="app">
          <div className="spinner"></div>
        </div>
      );
    } else if (type === 'data') {
      return <CardList articles={articles} />;
    } else {
      return (
        <div className="card border-danger text-white bg-transparent">
          <div className="card-body text-danger">No Content</div>
        </div>
      );
    }
  };

  return (
    <div>
      <Navbar logo="React Class News" menuItems={['Home', 'About', 'Contact']} />
      <div className="container">
        <div className="row justify-content-center mt-4">
          <div className="col-lg-6">
            <div className="input-group">
              <input
                id="Search"
                type="text"
                className="form-control mr-2"
                placeholder="Search"
                onChange={handleInputChange}
              />
              <button className="btn btn-primary" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          {isLoading ? (
            <Loading />
          ) : (
            displayMessage(articles.length > 0 ? 'data' : 'kosong')
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
