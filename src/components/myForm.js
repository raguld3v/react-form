import { useState } from "react";

function MyForm(){
    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');
    // const [email, setEmail] = useState('');

    const [inputs,setInputs] = useState({phone: "+91",email: "@gmail.com",country: "india",about: "im a dev"});

    function handleSubmit(e){
        e.preventDefault();
        console.log("submit submitted");
        // console.log("current state",name,age,email);
        console.log(inputs);
    }

    function handleChange(e){
        setInputs(previousState=>{return {...previousState,[e.target.name]:e.target.value}})
        // (e)=>{setInputs(previousState=>{return {...previousState,name:e.target.value}})}
    }

    return <form onSubmit={handleSubmit}>
        <label>Enter your name:<input type="text" name="name" onChange={handleChange}/></label>
        <label>Enter your age:<input type="text" name="age" onChange={handleChange}/></label>
        <label>Enter your Email:<input type="text" name="email" onChange={handleChange} value={inputs.email}/></label>
        <label>Enter your Phone:<input type="text" name="phone" onChange={handleChange} value={inputs.phone}/></label>
        <label>Enter your Country:
            <select name="country" onChange={handleChange} value={inputs.country}>
                <option value=''>select option</option>
                <option value="austria">austria</option>
                <option value="india">india</option>
                <option value="nz">nz</option>
            </select>
        </label>
        <label>Enter about you:<textarea name="about" value={inputs.about} onChange={handleChange}></textarea></label>
        <input type="submit" value="submit form"/>
    </form>
}

export default MyForm;