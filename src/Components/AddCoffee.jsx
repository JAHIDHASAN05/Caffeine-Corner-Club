import React from 'react';

const AddCoffee = () => {
    return (
        <div>
            <h1 className='text-center text-6xl text-purple-600 m-5 mb-12 font-extrabold '>add coffee</h1>

            <form  >
                <div className='bg-[#F4F3F0] p-24'>
                    {/* form name and chef row */}
                    <div className='flex gap-10 container justify-center mb-8 '>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">coffee name</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" placeholder="coffee Name" className="input w-full input-bordered" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="available quantity" className="input w-full input-bordered" />
                            </label>
                        </div>



                    </div>
                    {/* form supplier and test row */}
                    <div className='flex gap-10 container justify-center mb-8 '>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">supplier</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" placeholder="enter coffee supllier" className="input w-full input-bordered" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">test</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="enter coffee test" className="input w-full input-bordered" />
                            </label>
                        </div>



                    </div>
                    {/* form  category and details row */}
                    <div className='flex gap-10 container justify-center mb-8 '>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">category</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" placeholder="enter coffee category" className="input w-full input-bordered" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Detail</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="enter coffe detail" className="input w-full input-bordered" />
                            </label>
                        </div>



                    </div>
                    {/* form photp row */}
                    <div className='flex gap-10 container justify-center mb-8 '>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Photo</span>
                            </label>
                            <label className="input-group ">
                                
                                <input type="text"  placeholder="enter photo url" className="input w-full input-bordered" />
                            </label>
                        </div>
                     


                    </div>

                <input type="submit" value={"Add Coffee"}  className='btn btn-block bg-[#D2B48C]'/>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;