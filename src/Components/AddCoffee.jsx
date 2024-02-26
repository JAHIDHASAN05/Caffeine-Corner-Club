import React from 'react';
import Swal from 'sweetalert2'
const AddCoffee = () => {
    const handlerAddCoffee=e=>{
        e.preventDefault()
        const form= e.target;
        const name= form.name.value
        const quantity= form.quantity.value
        const supllier= form.supllier.value
        const test= form.test.value
        const category= form.category.value
        const detail= form.detail.value
        const photo= form.photo.value
        const newCoffee= {name, quantity, supllier, test, category, detail, photo, }
        console.log(newCoffee)


        fetch('http://localhost:5000/coffees',{
            method: "POST",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res=> res.json())
        .then(data=> {console.log(data)
         if(data.insertedId){
            Swal.fire({
                title: 'success!',
                text: 'coffee added succesfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
         }
        })
    }
    return (
        <div>
            <h1 className='text-center text-6xl text-purple-600 m-5 mb-12 font-extrabold '>add coffee</h1>

            <form onSubmit={handlerAddCoffee} >
                <div className='bg-[#F4F3F0] p-24'>
                    {/* form name and chef row */}
                    <div className='flex gap-10 container justify-center mb-8 '>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">coffee name</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" name="name" placeholder="coffee Name" className="input w-full input-bordered" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='quantity' placeholder="available quantity" className="input w-full input-bordered" />
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
                                <input type="text" name='supllier' placeholder="enter coffee supllier" className="input w-full input-bordered" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">test</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="test" placeholder="enter coffee test" className="input w-full input-bordered" />
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
                                <input type="text" name="category" placeholder="enter coffee category" className="input w-full input-bordered" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Detail</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="detail" placeholder="enter coffe detail" className="input w-full input-bordered" />
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

                                <input type="text" name="photo"  placeholder="enter photo url" className="input w-full input-bordered" />
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