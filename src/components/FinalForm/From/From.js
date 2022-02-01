// import necessary file 
import React from 'react';
import { useForm } from "react-hook-form";
import './form.css'

// create from component
const From = (props) => {
    const { setDeparture } = props

    const { register, handleSubmit } = useForm();
    const onSubmit = data => setDeparture(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Departure</label>
                <input placeholder='Select departure' {...register("departure")} />
            </form>
        </div>
    );
};

export default From;