import React from 'react';
import {useValue} from "../Context";

const Navbar = () => {
    const{item,total} = useValue();
    console.log(item, total)
    return (
        <div className="bg-gray-800 text-white p-4 flex justify-between items-center w-full h-20">
            <div className="text-2xl font-semibold ml-10">Chocolate Store</div>
            <div className="flex gap-4 mr-10">
                <div>
                    <span className="font-bold text-xl text-orange-400">Total price:</span>
                    <span className="ml-2 text-xl text-orange-600">{total}</span>
                </div>
                <div>
                    <span className="font-bold text-xl text-orange-400">Cart Items:</span>
                    <span className="ml-2 text-xl text-orange-600">{item}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
