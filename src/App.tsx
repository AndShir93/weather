import React from 'react'
import SearchCity from './components/SearchCity';
import Weather from './components/Weather';
import ListCity from "./components/ListCity";

function App() {
  return (
    <div className="App">
      <Weather/>
      <div className='search-weather'>
        <SearchCity/>
         <ListCity/>
      </div>
    </div>
  );
}

export default App;
