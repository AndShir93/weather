import React from 'react'
import Weather from './components/Weather';
import { useAppSelector } from './redux/store';
import { TRenderView } from './types/types';
import SearchCol from './components/SearchCol/SearchCol';
import Select from './components/ui-components/Select/Select';

const App: TRenderView = () => {
  const isSearch = useAppSelector((state) => state.isSearch);
  const options = [ {
    value: 0, label: 'Кекоран'
  },{
    value: 1, label: 'Порва'
  },{
    value: 2, label: '2'
  },{
    value: 3, label: '3'
  } ]

  return (
    <div className="App">
      <Weather/>
      <SearchCol isSearch={isSearch} />
      <Select
        options={options}
        onSelectOption={(value, label) => console.log(222, value, label)}
      />
    </div>
  );
}

export default App;
