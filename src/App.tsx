import React from 'react'
import Weather from './components/Weather/Weather';
import { useAppSelector } from './redux/store';
import { TRenderView } from './types/types';
import SearchCol from './components/SearchCol/SearchCol';

const App: TRenderView = () => {
  const isSearch = useAppSelector((state) => state.isSearch);

  return (
    <div className="App">
      <Weather/>
      <SearchCol isSearch={isSearch} />
    </div>
  );
}

export default App;
