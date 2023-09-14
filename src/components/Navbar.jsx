import React from 'react';
import { useValue } from '../Context';

const Navbar = () => {
    const { item, total } = useValue();

    return (
        <nav className="bg-white text-gray-800 p-4 shadow-md fixed top-0 left-0 right-0 z-10">
            <div className="container mx-auto flex justify-between items-center h-20">
                <div className="text-3xl font-bold">Chocolate Store</div>
                <div className="flex gap-6">
                    <div>
                        <span className="font-semibold text-lg text-orange-400">Total Price:</span>
                        <span className="ml-2 text-lg text-orange-600">&#x20B9; {total}</span>
                    </div>
                    <div>
                        <span className="font-semibold text-lg text-orange-400">Cart Items:</span>
                        <span className="ml-2 text-lg text-orange-600">{item}</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
