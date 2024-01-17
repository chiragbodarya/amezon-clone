import React from 'react'
import "../css/Checkout.css"
import Subtotal from './Subtotal'
import ADS from "../Assets/Img/ads.jpg"
import { useStateValue } from './StateProvider'

const Checkout = () => {
  const [{ basket }, disptch] = useStateValue();
  return (
    <>
      <div className="checkout">
        <div className="checkout_left">
          <img className='checkout_ad' src={ADS} alt="" />
          <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
          </div>
        </div>
        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
    </>
  )
}

export default Checkout
