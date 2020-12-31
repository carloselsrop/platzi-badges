import React from 'react';

import logo from '../images/logo.svg'

class Navbar extends React.Component {
    render() {
        return (
            <div className="w-full h-16 bg-gray-800">
                <a className="flex w-40  h-16 ml-6" href="#">
                    <img src={logo} alt="Logo" />
                    <span className=" text-gray-200 font-light pl-4 py-6">Platzi</span>
                    <span className="font-bold text-white pl-1 py-6 ">Conf</span>
                </a>
            </div>
        );
    }
}

export default Navbar;