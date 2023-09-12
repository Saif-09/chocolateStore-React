import React from 'react';

const Navbar = () => {
    return (
        <div className="bg-gray-800 text-white p-4 flex justify-between items-center w-full h-20">
            <div className="text-2xl font-semibold ml-10">Chocolate Store</div>
            <div className="flex gap-4 mr-10">
                <div>
                    <span className="font-bold text-xl text-orange-400">Total price:</span>
                    <span className="ml-2 text-xl text-orange-600">0</span>
                </div>
                <div>
                    <span className="font-bold text-xl text-orange-400">Cart Items:</span>
                    <span className="ml-2 text-xl text-orange-600">0</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
