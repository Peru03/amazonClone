import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';


const Checkout = () => {

    const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      
      <div className='checkout_left'>
        <img 
          className='checkout_ad'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/LPAIndia/Header/170_AP_1500x300.jpg'
          alt=''
          />
          <div>
            <h2 className='checkout_title'>Your Shoping basket</h2>
         
            {/* {basket.map(item => (
            <CheckoutProduct
            //   id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))} */}

          {basket.map((item, index) => (
                            <CheckoutProduct
                                key={index}
                                basketIndex={index}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                            />
                        ))}


    

          </div>
      </div>

      <div className='checkout_right'>
      <Subtotal/>

      </div>

    </div>
 
  )
}

export default Checkout
