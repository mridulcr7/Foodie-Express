import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: props.name,
                location: props.location,
                avatar_url: "null"
            },
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/mridulcr7");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json
        });
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className="bg-gray-200 p-4 shadow-md rounded-md">
                <img src={avatar_url} alt="Avatar" className="w-16 h-16 rounded-full mx-auto mb-4" />
                <h2 className="text-lg font-semibold text-center">{name}</h2>
                <h3 className="text-sm text-gray-600 text-center">Location: {location}</h3>
            </div>
        );
    }
}

export default UserClass;
