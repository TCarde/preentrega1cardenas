import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './styles/CartWidget.css';

export const CartWidget = () => {
    return (
        <div className='cart-widget'>
            <FontAwesomeIcon icon={faShoppingCart} size="2x" color="black"/>
 {/*            <i className="bi bi-cart4"></i> */}
            <div className='qty-display'>0</div>
        </div>

    );
}

export default CartWidget;