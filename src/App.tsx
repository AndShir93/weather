import React, { useEffect, useState } from 'react'
import SearchCity from './components/SearchCity';
import Weather from './components/Weather';
import ListCity from './components/ListCity';
import thunder from './img/thunder.svg';
import { useAppSelector } from './redux/store';
import { TRenderView } from './types/types';

const App: TRenderView = () => {
  const [ isSearch, setIsSearch ] = useState(false);
  const levels = useAppSelector(state => state.levels);
  useEffect(() => {
    setIsSearch(false);
  }, [ levels.length ]);

  return (
    <div className="App">
      <Weather/>
      <div className='search-weather'>
        <SearchCity setIsSearch={setIsSearch} />
        {isSearch ? <img src={thunder} alt=""/> : <ListCity/>}
      </div>
    </div>
  );
}

export default App;
