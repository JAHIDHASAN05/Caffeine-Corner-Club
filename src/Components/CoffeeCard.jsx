import React from 'react';

const CoffeeCard = ({ coffee }) => {
    console.log(coffee)
    const { photo, name, quantity, } = coffee;

    return (
        <div className='w-1/2 mx-auto mt-10'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className='w-2/3'><img src={photo} alt="Movie" /></figure>
                <div className="card-body flex flex-row items-center justify-between  w-full">
                    <div>
                        <h2 className="card-title"> Name :{name}</h2>
                        <h2 className="card-title"> Quantity :{quantity}</h2>
                        <h2 className="card-title">{name}</h2>
                    </div>

                    <div >
                        <div className="btn-group flex flex-col gap-3">
                            <button className="btn ">view</button>
                            <button className="btn">edit</button>
                            <button className="btn">delete</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default CoffeeCard;