import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from './constants';

const Header = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  return (
    <div className="bg-white py-2 md:py-4">
      <div className="container px-4 mx-auto md:flex md:items-center">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-bold text-xl text-black">
          <div className="fw7 mr1">SpaceX</div>
        </Link> 
      </div>
      <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0">          
        <Link to="/" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-black">
          Home
        </Link>
        {/* <Link
          to="/search"
          className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
        >
          search
        </Link> */}
        {authToken && (
          <div className="flex">
            <Link
              to="/spacex"
              className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              SpaceX
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-fixed">
        {authToken ? (
          <div
            className="p-2 lg:px-4 md:mx-2 text-black text-center border border-transparent rounded hover:bg-gray-100 hover:text-gray-700 transition-colors duration-300 cursor-pointer"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              navigate(`/`);
            }}
          >
            Logout
          </div>
        ) : (
          <Link
            to="/login"
            className="p-2 lg:px-4 md:mx-2 text-black text-center border border-transparent rounded hover:bg-gray-100 hover:text-gray-700 transition-colors duration-300 cursor-pointer"
          >
            Login
          </Link>
        )}
      </div>
    </div>
    </div>
  );
};

export default Header;