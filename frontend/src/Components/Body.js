import { useState, useEffect } from "react";
import ResturantCard, { ResturantCardWithDiscountLabel } from "./ResturantCard";
import { ShimmerUi } from "./ShimmerUi";
import { Link } from "react-router-dom";

const Body = () => {
    const RestaurantCardLabel = ResturantCardWithDiscountLabel(ResturantCard);
    const [resList, setresList] = useState([]);
    const [filteredList, setfilteredList] = useState(null);
    const [searchText, setsearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6691565&lng=77.45375779999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        setfilteredList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setresList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return filteredList == null ? (
        <ShimmerUi />
    ) : (
        <div className="bg-gray-100 min-h-screen p-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <div className="search flex items-center">
                        <input
                            type="text"
                            className="border border-gray-300 p-2 rounded-l-md focus:outline-none"
                            value={searchText}
                            onChange={(e) => setsearchText(e.target.value)}
                            placeholder="Search restaurants"
                        />
                        <button
                            className="bg-indigo-500 text-white p-2 rounded-r-md hover:bg-indigo-600 focus:outline-none"
                            onClick={() => {
                                const Res = resList.filter((res) =>
                                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                );
                                setfilteredList(Res);
                            }}
                        >
                            Search
                        </button>
                    </div>
                    <div className="space-x-2">
                        <button
                            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none"
                            onClick={() => {
                                const Res = resList.filter((res) => res.info.avgRating >= 4.2);
                                setfilteredList(Res);
                            }}
                        >
                            Top Rated Restaurants
                        </button>
                        <button
                            className="bg-gray-700 text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none"
                            onClick={() => {
                                setfilteredList(resList);
                            }}
                        >
                            See All
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filteredList.map((res) => (
                        <Link key={res.info.id} to={`/resturant/${res.info.id}`}>
                            <RestaurantCardLabel resData={res} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Body;
