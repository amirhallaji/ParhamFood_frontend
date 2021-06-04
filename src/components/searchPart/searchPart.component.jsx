import React from 'react';
import './searchPart.styles.css';
import { Input, Button } from 'antd';

export const SearchPart = () => {
      return (
            <div>
                  <Button>جستجو</Button>
                  <Input placeholder='نام منطقه'></Input>
                  <Input placeholder='نام رستوران'></Input>
                  <Input placeholder='نام غذا'></Input>
            </div>
      )
}