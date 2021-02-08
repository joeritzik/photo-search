import './App.css';
import React from 'react';
import PictureSelector from './components/PictureSelector';
import PictureList from './components/PictureList';
import UseFetch from './hooks/UseFetch';
require('dotenv').config();


function App() {

  const {data, error, isLoading, setUrl} = UseFetch();

  const getContent = () => {
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    return <PictureList pictures={data} />
  }

  return (
    <div className="App">
      <PictureSelector onSearch={(input) => setUrl(`${process.env.REACT_APP_BASE_URL}/search/photos?page=1&per_page=20&query=${input}?&client_id=${process.env.REACT_APP_API_KEY}`)}/>
      {getContent()}
    </div>
  );
}

export default App;
