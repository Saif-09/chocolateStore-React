import React from 'react';
import {useValue} from '../Context';

const ChocolateCard = ({ name, price, image_url ,id}) => {

    const {handleAdd,handleRemove, cart} = useValue();
    const qty = cart.find((item) => item.id === id)?.qty;
    const isQuantityGT0 = qty > 0;

    // console.log(name, price, image_url)
    return (

        <div className="bg-gray-800 rounded-lg shadow-lg p-1 pb-3 m-2 w-64">
            <div className="w-full h-44 mx-auto">
                <img src={image_url} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="text-lg font-semibold mt-2 text-white ml-3">{name}</div>
            <div className="text-white ml-3">&#x20B9; {price.toFixed(2)}</div>
            <div className="flex justify-between mt-4">
                <button
                    className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 ml-3 rounded font-bold"
                    onClick={()=>handleAdd({price, id,qty})}
                >
                    Add
                </button>
                
                {isQuantityGT0 ? (
                    <div className='bg-zinc-600 text-white px-3 py-2 rounded font-semibold'>Qty:{qty}</div>
                ) : null}
                <button
                    className="bg-yellow-500 hover:bg-yellow-300 text-white px-3 py-2 mr-3 rounded font-semibold"
                    onClick={() => handleRemove({id})}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};


export default ChocolateCard;


