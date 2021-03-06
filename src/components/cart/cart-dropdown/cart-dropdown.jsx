import React from 'react'
import CustomButton from '../../custom-button/custom-button'
import './cart-dropdown.scss'
import CartItem from '../cart-item/cart-item'
import { connect } from 'react-redux'

const CartDropDown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem=> 
                    <CartItem 
                        key={cartItem.id}
                        item={cartItem}
                        />)
            }
        </div>
        <CustomButton>Go To Checkout</CustomButton>
    </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropDown)
