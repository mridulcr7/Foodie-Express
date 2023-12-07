import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import mainLogo from '../utility/preview.png';
import Avatar from "../utility/user-avatar.png";
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import cartLogo from '../utility/shopping-cart.jpg';

const Header = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    };

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="bg-purple-800 text-white p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="logo-container">
                    <img src={mainLogo} className="logo h-16" alt="Logo" />
                </div>
                {user && (
                    <div className="nav-items flex items-center">
                        <ul className="flex space-x-4 items-center">
                            <li>
                                <Link to="/" className="hover:text-gray-300 hover:underline text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-gray-300 hover:underline text-white">
                                    About Us
                                </Link>
                            </li>
                            <li className="relative flex items-center">
                                <Link to="/cart" className="hover:text-gray-300 hover:underline">
                                    Cart-({cartItems.length} items)
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <div className="flex items-center ml-2">
                                    <img
                                        src={Avatar}
                                        alt={`${user.name}'s Avatar`}
                                        className="w-8 h-8 rounded-full border-2 border-purple-500 mr-2"
                                    />
                                    <span className="text-white font-bold">{user.name}</span>
                                </div>
                                {user.avatar && (
                                    <div className="flex flex-col items-center ml-2">
                                        <img
                                            src={user.avatar}
                                            alt={`${user.name}'s Avatar`}
                                            className="w-8 h-8 rounded-full border-2 border-purple-500 mb-2"
                                        />
                                        <span className="text-white font-bold">{user.name}</span>
                                    </div>
                                )}
                                <button
                                    onClick={handleClick}
                                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red transition duration-300 ml-2"
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
                {!user && (
                    <div className="flex items-center">
                        <Link
                            to="/login"
                            className="text-white hover:text-gray-300 transition duration-300 mr-4"
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            className="text-white hover:text-gray-300 transition duration-300"
                        >
                            Signup
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
