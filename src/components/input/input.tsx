import React from 'react';
import { Input } from 'antd';
import "./input.scss"

const { Search } = Input;

const SearchInput: React.FC = () => {
  return <>
    <Search placeholder="input search text" enterButton="Search" size="large" loading className='searchinput' />
    
  </>;
};

export default SearchInput;