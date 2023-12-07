import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
   // console.log(err);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-500 mb-2">Oops!!!</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Something Went Wrong</h2>
            <h3 className="text-lg font-medium text-gray-700 mb-2">{err.status}: {err.statusText}</h3>
            <p className="text-sm text-gray-500">{err.data}</p>
        </div>
    );
};

export default Error;
