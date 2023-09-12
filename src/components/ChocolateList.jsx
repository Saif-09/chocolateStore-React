import React from 'react';
import chocolates from '../data/chocolates';
import ChocolateCard from './ChocolateCard';

const ChocolateList = () => {
    return (
        <div className='flex flex-wrap justify-center bg-slate-950 pt-24 gap-4'>
            {chocolates.map((choco, index) => {
                return (
                    <ChocolateCard
                        key={index}
                        id={choco['id']}
                        name={choco['name']}
                        price={choco['price']}
                        image_url={choco['image_url']}
                        qty={choco['quantity']}
                    />)
                // console.log(choco['price'])

            })}
        </div>
    )
}

export default ChocolateList
