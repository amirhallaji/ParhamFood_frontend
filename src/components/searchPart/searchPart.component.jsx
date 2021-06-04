import React from 'react';
import './searchPart.styles.css';
import { Input, Button } from 'antd';

export const SearchPart = () => {
      return (
            <div className='search-fields'>
                  <Input type="search" className='search-field' placeholder='نام غذا'></Input>
                  <Input type="search" className='search-field' placeholder='نام رستوران'></Input>
                  <Input type="search" className='search-field' placeholder='نام منطقه'></Input>
                  <Button type="primary" shape="round" className='search-field' >جستجو</Button>
            </div>
      )
}