import React from 'react';

const AddCoffee = () => {
    return (
        <div>
           <h1 className='text-center text-6xl text-purple-600 m-5 mb-12'>add coffee</h1>

            <form >
                <div className='flex gap-10 container justify-center bg-[#F4F3F0]'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">coffee name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="coffee Name" className="input input-bordered" />
                        </label>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="available quantity" className="input input-bordered" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;