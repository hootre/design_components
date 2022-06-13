import { Icon } from '@mui/material';
import React from 'react';
import { SearchInputBox } from './styles';

export const SearchInput = () => {
  return (
    <SearchInputBox>
      <input type="text" placeholder="search...." />
      <a href="#" className="icon">
        <Icon baseClassName="material-icons-outlined">search</Icon>
      </a>
    </SearchInputBox>
  );
};
