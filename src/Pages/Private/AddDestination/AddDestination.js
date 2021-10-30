import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddDestination.css'

const AddTrip = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)

        axios.post('https://rocky-bastion-46955.herokuapp.com/destinations', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully')
                    reset()
                }
            console.log(res)
        })
    };
    return (
        <div>
            <h1>from add Trip</h1>
            <div className="add-trip">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder='Name' />
                    <textarea {...register("description")} placeholder='Details' />
                    <input {...register("thumbnail")} placeholder='Banner Image' />
                    <input {...register("img")} placeholder='Thumbnail Image' />
                    <input type="number" {...register("cost")} placeholder='Cost' />
                    <input type="submit" />
                </form>
            </div>
            
        </div>
    );
};

export default AddTrip;