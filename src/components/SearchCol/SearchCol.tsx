import React from 'react';
import SearchCity from './SearchCity';
import thunder from '../../img/thunder.svg';
import ListCity from './ListCity';
import { TRenderViewProps } from '../../types/types';
import style from './style.module.scss';

interface IProps {
  isSearch: boolean;
}

const SearchCol: TRenderViewProps<IProps> = ({ isSearch }) => {
  const renderList = (showIcon: boolean): JSX.Element => {
    if (!showIcon) return <ListCity/>;

    return (
      <div className={style.iconWrap}>
        <img src={thunder} className={style.icon} alt="Гроза"/>
      </div>
    );
  };

  return (
    <div className={style.searchWeather}>
      <SearchCity />
      {renderList(isSearch)}
    </div>
  );
};

export default SearchCol;