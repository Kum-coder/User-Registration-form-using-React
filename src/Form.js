import React, { useEffect, useState } from 'react';

function Form() {
    const data = { name: "", email: "", password: "" };
    const [input, setInput] = useState(data);
    const [flag, setFlag] = useState(false);

    function handleChange(e) {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        console.log("Input updated:", input);
    }, [input]);

    useEffect(() => {
        if (flag) {
            console.log("Registered");
        }
    }, [flag]);

    function handleSubmit(e) {
        e.preventDefault();
        if (!input.name || !input.email || !input.password) {
            alert("All fields are mandatory");
        } else {
            setFlag(true);
        }
    }

    return (
        <>
            <pre>{flag ? <h2>Hello {input.name}, you have successfully registered.</h2> : ""}</pre>
            <form onSubmit={handleSubmit}>
                <div><h1>Registration Form</h1></div>
                <div><input type='text' name='name' placeholder='Enter your name' value={input.name} onChange={handleChange}></input></div>
                <div><input type='text' name='email' placeholder='Enter your email' value={input.email} onChange={handleChange}></input></div>
                <div><input type='text' name='password' placeholder='Enter your password' value={input.password} onChange={handleChange}></input></div>
                <div><button type='submit'>Submit</button></div>
            </form>
        </>
    );
}

export default Form;