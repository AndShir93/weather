import React from 'react'
import ListCity from './components/ListCity';
import SearchCity from './components/SearchCity';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
        <Weather/>
        <div className='search-weather'>
          <SearchCity/>
          {/* <ListCity/> */}
        </div>
    </div>
  );
}

export default App;
