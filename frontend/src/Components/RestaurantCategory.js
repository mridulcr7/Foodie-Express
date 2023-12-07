import React, { useState } from 'react';
import { ItemList } from './ItemList';

export const RestaurantCategory = ({ menu, isOpen, index, setIndex }) => {
    const handleClick = () => {
        isOpen ? setIndex(null) : setIndex(index);
    };
    return (
        <div className="mb-6">
            <div className="flex items-center justify-between cursor-pointer p-4 bg-white rounded-md shadow-md" onClick={() => handleClick()}>
                <h2 className="text-lg font-semibold text-center flex-grow">{menu.title} ({menu.itemCards.length})</h2>
                <span className={`text-gray-500 transform transition-transform duration-300`}>⬇️</span>
            </div>
            {isOpen && (
                <div className="mt-4">
                    <ItemList data={menu.itemCards} btn="Add +" />
                </div>
            )}
        </div>
    );
};