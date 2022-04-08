import React from 'react';
import { TRenderViewProps } from '../../../types/types';

interface IProps {
  value: number;
  label: string;
}

const Option: TRenderViewProps<IProps> = ({ value, label }) => {

  return (
    <option value={value}>
        {label}
    </option>
  );
};

export default Option;