import React from 'react';
import chocolates from '../data/chocolates';
import ChocolateCard from './ChocolateCard';

const ChocolateList = () => {
    return (
        <div className="bg-gray-100 py-0 px-4 sm:px-8 lg:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-36">
            {chocolates.map((choco, index) => (
                <ChocolateCard
                    key={index}
                    id={choco['id']}
                    name={choco['name']}
                    price={choco['price']}
                    image_url={choco['image_url']}
                    qty={choco['quantity']}
                />
            ))}
        </div>
    );
};

export default ChocolateList;
