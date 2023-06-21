import React, { useState } from "react";


const formData = [
    {
        name: 'name',
        type: 'text',
        label: 'Name'
    },
    {
        name: 'email',
        type: 'email',
        label: 'Email'
    },
    {
        name: 'password',
        type: 'password',
        label: 'Password'
    }
]

const Form = () => {
    // const [values, setValues] = useState({});

    function submitListener(e) {
        e.preventDefault();
        const data = new FormData(document.getElementById('form'));
        let obj = {};
        for (const [name, value] of data) {
             obj[name] = value;
        }
        // setValues(obj);
        console.log(obj);
    }

    return (
        <form id="form" onSubmit={submitListener}>
            {
                formData.map(obj => (
                    <div>
                        <label>{obj.label}</label>
                        <input name={obj.name} type={obj.type}></input>
                    </div>
                ))
            }
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;