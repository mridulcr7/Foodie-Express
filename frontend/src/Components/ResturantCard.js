// ResturantCard Component
import React from 'react';
import { res_logo } from "../utility/constants";

const ResturantCard = (props) => {
    const { resData } = props;
    const {
        name,
        cloudinaryImageId,
        costForTwo,
        cuisines,
        avgRating
    } = resData?.info;

    const deliveryTime = resData.info.sla.deliveryTime;

    return (
        <div className="bg-white p-4 rounded-md shadow-md mb-4 transition-transform transform hover:scale-105 h-96">
            <img
                src={res_logo + cloudinaryImageId}
                className="w-full h-40 object-cover rounded-md mb-2"
                alt="res-logo"
            />
            <h3 className="text-lg font-semibold mb-1">{name}</h3>
            <h4 className="text-gray-600 mb-1">{cuisines.join(', ')}</h4>
            <h4 className="text-gray-600 mb-1">Cost for Two: {costForTwo}</h4>
            <h4 className="text-yellow-500 mb-1">Rating: {avgRating} Stars</h4>
            <h4 className="text-gray-600">Delivery Time: {deliveryTime} minutes</h4>
        </div>
    );
};

export const ResturantCardWithDiscountLabel = (ResturantCard) => {
    return (props) => {
        return (
            <div className="relative">
                <label className="bg-gray-800 text-white text-sm font-semibold px-2 py-1 absolute top-0 right-0 m-2 rounded-full">
                    {props?.resData?.info?.aggregatedDiscountInfoV3?.header}
                </label>
                <ResturantCard {...props} />
            </div>
        );
    };
};

export default ResturantCard;
