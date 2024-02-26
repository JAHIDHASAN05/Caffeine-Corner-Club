import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee,setCoffees,  coffees }) => {
    
    const { _id, photo, name, quantity, test, } = coffee;

  console.log(coffee)
     const handleDelet=_id=>{
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffees/${_id}`,{
                    method : "DELETE",
                })
                .then(res=> res.json())
                .then(data=> {console.log(data)
                 if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });

                      const remaining=  coffees.filter(cof=> cof._id !== _id)
                      setCoffees(remaining)
                 }
                })
            }
          });
   
     }
    return (
        <div className='w-1/2 mx-auto mt-10'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className='w-2/3'><img src={photo} alt="Movie" /></figure>
                <div className="card-body flex flex-row items-center justify-between  w-full">
                    <div>
                        <h2 className="card-title"> Name :{name}</h2>
                        <h2 className="card-title"> Quantity :{quantity}</h2>
                        <h2 className="card-title"> teste :{test}</h2>
                    </div>

                    <div >
                        <div className="btn-group flex flex-col gap-3">
                            <button className="btn ">view</button>
                           <Link to={`/update-coffee/${_id}`}>
                           <button className="btn">edit</button>
                           </Link>
                            <button 
                            onClick={()=>handleDelet(_id)}
                            className="btn"
                            >delete</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default CoffeeCard;