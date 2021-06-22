import React from 'react';
import './searchPart.styles.css';
import { Input, Button } from 'antd';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const SearchPart = () => {

      const history = useHistory();

      const [foodName, setFoodName] = useState('');
      const [restaurantName, setRestaurantName] = useState('');
      const [regionName, setRegionName] = useState('');

      const submitSearch = () => {
            history.push({
                  pathname: '/search-result',
                  search: `?${foodName !== '' ? `foodName=${foodName}&` : ''}${restaurantName !== '' ? `restaurantName=${restaurantName}&` : ''}${regionName !== '' ? `regionName=${regionName}&` : ''}`,
            })

      }

      return (
            <div className='search-fields'>
                  <Input type="search" className='search-field' placeholder='نام غذا' value={foodName} onChange={(e) => { setFoodName(e.target.value) }}></Input>
                  <Input type="search" className='search-field' placeholder='نام رستوران' value={restaurantName} onChange={(e) => { setRestaurantName(e.target.value) }}></Input>
                  <Input type="search" className='search-field' placeholder='نام منطقه' value={regionName} onChange={(e) => { setRegionName(e.target.value) }}></Input>
                  <Button type="primary" shape="round" className='search-field' onClick={submitSearch} >جستجو</Button>
            </div>
      )
}