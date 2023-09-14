import React from 'react';
import { useValue } from '../Context';

const ChocolateCard = ({ name, price, image_url, id }) => {
    const { handleAdd, handleRemove, cart } = useValue();
    const qty = cart.find((item) => item.id === id)?.qty;

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
            <div className="w-full h-48 mx-auto overflow-hidden">
                <img src={image_url} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="text-lg font-semibold mt-4 text-gray-800">{name}</div>
            <div className="text-gray-800 mt-1">&#x20B9; {price.toFixed(2)}</div>
            <div className="flex justify-between mt-4">
                <button
                    className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded font-semibold"
                    onClick={() => handleAdd({ price, id, qty })}
                >
                    Add
                </button>

                {qty > 0 && (
                    <div className="bg-orange-500 text-white px-3 py-2 rounded font-semibold">
                        Qty: {qty}
                    </div>
                )}

                <button
                    className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded font-semibold"
                    onClick={() => handleRemove({ id })}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default ChocolateCard;
