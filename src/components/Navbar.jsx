import React from 'react';
import {useValue} from "../Context";

const Navbar = () => {
    const{item,total} = useValue();
    console.log(item, total)
    return (
        <div className="bg-gray-800 text-white p-4 flex justify-between gap-12 items-center w-full h-20 fixed ">
            <div className="text-2xl font-bold ml-10 sm:text-4xl">Chocolate Store</div>
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
