import React from 'react';
import { useForm } from "react-hook-form";

const To = (props) => {
    const { setTo } = props;
    const { register, handleSubmit } = useForm();
    const onSubmit = data => setTo(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>To</label>
                <input placeholder='Select departure' {...register("to")} />
            </form>
        </div>
    );
};

export default To;