import React from 'react';

import './SearchResult.css';
import pizza from './pizza.jpg';
import { Button } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import querystring from 'querystring';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import socketIOClient, { io } from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:4001";
const socket = socketIOClient(ENDPOINT)

export const SearchResult = () => {

      const [foods, setFoods] = useState([]);
      const location = useLocation();

      useEffect(() => {
            // getTemp()
            socket.on("get food from manager", data => {
                  console.log("data: ", data);
                  var data_dict = JSON.parse(data)
                  setFoods(foods.concat(data_dict))
            });
            // getFood()
      }, [])


      // const getFood = async (food) => {
      //       try {
      //             const search = querystring.parse(location.search.replace('?', ''));
      //             // API URL here instead of sample
      //             await fetch('sample', {
      //                   body: {
      //                         foodName: search.foodName,
      //                         restaurantName: search.restaurantName,
      //                         regionName: search.regionName,
      //                   },
      //                   // method: "GET",
      //                   headers: {
      //                         "Content-Type": "application/json",
      //                   }
      //             }).then((response) => response.json()).then((data) => {
      //                   setFoods(data);
      //                   console.log("data: ", data);
      //             })
      //       } catch (error) {
      //             console.log(error);
      //       }
      // };

      // const getTemp = async (food) => {

      //       const socket = io('http://localhost:4001');

      //       socket.on('connect', () => {
      //             // either with send()
      //             socket.send('Hello!');

      //             // or with emit() and custom event names
      //             socket.emit('salutations', 'Hello!', { 'mr': 'john' }, Uint8Array.from([1, 2, 3, 4]));
      //       });

      //       // handle the event sent with socket.send()
      //       socket.on('message', data => {
      //             console.log(data);
      //       });
      // };

      const purchaseFood = async (food) => {

      }

      return (
            <div style={{ minHeight: window.innerHeight }} className='search-result'>
                  <div className="products">
                        {
                              foods.map((item, key) => <div key={key} className='product'>
                                    <img src={pizza} alt='pizza' />
                                    <h2>{item.food_name}</h2>
                                    <h2>رستوران</h2>
                                    <h3>{item.price}</h3>
                                    <Link to='/purchase-food'>
                                          <Button type='primary' shape='round' className='button-purchase' onClick={{ purchaseFood }}>مشاهده بیشتر</Button>
                                    </Link>
                              </div>)
                        }

                  </div>
            </div>
      )
}