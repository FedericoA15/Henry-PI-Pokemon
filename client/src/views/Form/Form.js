import axios from 'axios';
import React, { useState } from 'react';


const Form = () => {

    const [form, setForm] = useState({
        name: "",
        image: "",
        type: [],
        health: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: ""
    })

    const changeHandler = (event) => {
        const property = event.target.name;
        let value = event.target.value;
        if(property === "type") value = value.split(",");
        setForm({ ...form, [property]: value })
    }    
    
    const submitHandler = (event) =>{
        event.preventDefault()
        axios.post("http://localhost:3001/pokemons",form)
        .then(res=>alert("El pokemon fue creado correctamente"))
        .catch(err=>alert("Error! Revisa tus datos"))
        console.log(form);
    }


    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Name</label>
                <input type="text" value={form.name} onChange={changeHandler} name="name"></input>
            </div>
            <div>
                <label>Image</label>
                <input type="text" value={form.image} onChange={changeHandler} name="image"></input>
            </div>
            <div>
                <label>Type</label>
                <input type="text" value={form.type} onChange={changeHandler} name="type"></input>
            </div>
            <div>
                <label>Health</label>
                <input type="text" value={form.health} onChange={changeHandler} name="health"></input>
            </div>
            <div>
                <label>Attack</label>
                <input type="number" value={form.attack} onChange={changeHandler} name="attack"></input>
            </div>
            <div>
                <label>Defense</label>
                <input type="number" value={form.defense} onChange={changeHandler} name="defense"></input>
            </div>
            <div>
                <label>Speed</label>
                <input type="number" value={form.speed} onChange={changeHandler} name="speed"></input>
            </div>
            <div>
                <label>Height</label>
                <input type="number" value={form.height} onChange={changeHandler} name="height"></input>
            </div>
            <div>
                <label>Weight</label>
                <input type="number" value={form.weight} onChange={changeHandler} name="weight"></input>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}
export default Form;