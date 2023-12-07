import React, { useState, useEffect } from "react";
import { res_api } from "../utility/constants";
import { useParams } from 'react-router-dom';
import { RestaurantCategory } from "./RestaurantCategory";
import { ShimmerMenu } from "./ShimmerMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [resInfo, setResInfo] = useState(null);
    const [showIndex, setshowIndex] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(res_api + resId);
        const json = await data.json();
        setResInfo(json);
    };

    if (resInfo != null) {
        const { name, cuisines } = resInfo?.data?.cards[0]?.card?.card?.info;
        const cards = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const itemmenu = cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        return (

            <div className="p-4 max-w-screen-xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-4">{name}</h1 >
                <h2 className="text-gray-600 text-center mb-6">{cuisines.join(", ")}</h2>
                {
                    itemmenu.map((category, index) => (
                        <RestaurantCategory
                            key={category.card.card.title}
                            menu={category.card.card}
                            isOpen={showIndex == index}
                            setIndex={(idx) => setshowIndex(idx)}
                            index={index}
                        />
                    ))
                }
            </div >
        );
    }
    else {
        return (
            <ShimmerMenu />
        );
    }

   
};

export default RestaurantMenu;