import React from 'react';
import CurrencyFormat from 'react-currency-format';
// import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css';

const Subtotal = () => {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  {/* Part of the homework */}
                  Subtotal ({basket.length} items): <strong>{value} </strong>
                </p>
                <small className="subtotal_gift">
                  <input type="checkbox" /> This order contains a gift
                </small>
              </>
            )}
            decimalScale={2}
            // value={getBasketTotal(basket)} // Part of the homework
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
    
            <button>Preceed to Checkout</button>

        </div>
    )
}

export default Subtotal