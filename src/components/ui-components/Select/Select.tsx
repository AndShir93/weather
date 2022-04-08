import React from 'react';
import { TRenderViewProps } from '../../../types/types';
import Option from './Option';

interface IProps {
  options: {
    value: number;
    label: string;
  }[];
  onSelectOption: (value: number, label: string) => void;
}

const Select: TRenderViewProps<IProps> = ({ options , onSelectOption }) => {
  const handleSelect = (option: HTMLOptionElement) => {
    onSelectOption(Number(option.value), option.innerHTML);
  }

  return (
    <div>
      <select style={{ width: 300 }} onChange={({ target }) => handleSelect(target.options[target.selectedIndex])}>
        {options.map(({ value, label }) => (
          <Option
            key={value}
            value={value}
            label={label}
          />
        ))}
      </select>
    </div>
  );
};

export default Select;