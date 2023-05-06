import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img
          className='home-image'
          src='https://images-na.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/slide8/PRIME_Banner1242_x_450._CB427911645_.jpg'
          alt=""
        />

        <div className='home_row'>
          <Product 
            title={"The lean startup"}
            price="29.99"
            rating={4}
            image={'https://images-eu.ssl-images-amazon.com/images/I/41wh5WGSxaL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'}
          />
          <Product
            title={"Titan Neo Economy Analog White Dial Men's Watch 1802SL04/NN1802SL04/NP1802SL04"}
            price="1,995.00"
            rating={4}
            image={'https://m.media-amazon.com/images/I/71Qv0osgggL._UL1500_.jpg'}
          />
          <Product
            title={"LG 32 L Convection Microwave Oven (MC3286BRUM, Black)"}
            price="16,490"
            rating={4}
            image={'https://m.media-amazon.com/images/I/91fSgD70z0L._SL1500_.jpg'}
          />

        </div>
        <div className='home_row'>
          <Product 
            title={"Whirlpool 1.5 Ton 5 Star, Inverter Split AC (Copper, Convertible 4-in-1 Cooling Mode, 2022 Model, 1.5T Magicool Convert Pro 5S INV (N), White)"}
            price="36,490."
            rating={4}
            image={'https://m.media-amazon.com/images/I/41uMPN7SoIL._SL1000_.jpg'} />
          <Product
            title={"The lean startup"}
            price="29.99"
            rating={4}
            image={'https://images-eu.ssl-images-amazon.com/images/I/41wh5WGSxaL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'}
          />
          <Product
            title={"The lean startup"}
            price="29.99"
            rating={4}
            image={'https://images-eu.ssl-images-amazon.com/images/I/41wh5WGSxaL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'}
          />
        </div>
        <div className='home_row'>
          <Product
            title={"The lean startup"}
            price="29.99"
            rating={4}
            image={'https://images-eu.ssl-images-amazon.com/images/I/41wh5WGSxaL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'}
          />
          <Product
            title={"The lean startup"}
            price="29.99"
            rating={4}
            image={'https://images-eu.ssl-images-amazon.com/images/I/41wh5WGSxaL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'}
          />
          <Product
            title={"The lean startup"}
            price="29.99"
            rating={4}
            image={'https://images-eu.ssl-images-amazon.com/images/I/41wh5WGSxaL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'}
          />
        </div>
      </div>
    </div>
  )
}

export default Home