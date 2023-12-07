import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
    render() {
        return (
            <div className="bg-gray-300 text-gray-800 p-8">
                <h1 className="text-4xl font-bold">About Us</h1>
                <h2 className="text-2xl mt-4">Welcome to Foodie Express</h2>
                <p className="mt-4">Discover a world of flavors and indulge in the finest culinary experiences.</p>
                <UserClass name="Mridul" location="Lucknow" />
            </div>
        );
    }
}

export default About;
