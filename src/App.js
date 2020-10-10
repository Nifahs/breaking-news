import React from 'react';
import { Button} from 'react-bootstrap';
import Header from './components/Header/Header';

import News from './components/News/News';
import TopHeadline from './components/TopHeadline/TopHeadline';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TopHeadline></TopHeadline>
      <News></News>

    </div>
  );
}

export default App;
