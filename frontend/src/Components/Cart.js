import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from './ItemList';
import { clearCart } from '../store/cartSlice';
import cartLogo from '../utility/shopping-cart.jpg';
import { useDispatch } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const Price = useSelector((store) => store.cart.totalPrice);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(clearCart());
    };

    return (
        <div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg text-center">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-4xl font-extrabold text-gray-800">Your Shopping Cart</h2>
                <button
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                    onClick={handleClick}
                >
                    Clear Cart
                </button>
            </div>

            {cartItems.length === 0 ? (
                <div className="text-gray-600">
                    <p className="text-lg">Your cart is feeling lonely...</p>
                    <p className="text-sm">Why not add some items and make it happy?</p>
                    <img
                        src={cartLogo}
                        alt="Shopping Cart"
                        className="mt-4 mx-auto w-1/2 md:w-1/4 lg:w-1/5"
                    />
                </div>
            ) : (
                <div>
                    <div className>
                        <ItemList data={cartItems} btn="Remove" />
                    </div>
                    <div className="flex items-center justify-center">
                        <p className="text-lg font-semibold mr-4">Total Price: ₹{Price.toFixed(2)}</p>
                        <button
                            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                            onClick={() => alert('Checkout functionality can be added here.')}
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
