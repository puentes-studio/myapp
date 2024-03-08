import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useName } from '../../../Context/Name.Context';

const CustomInput = () => {
    const [name, setName] = useState('');

    const { handleName, nameState } = useName()
    const handleChange = (event) => {
        handleName(event.target.value);
    };

console.log(nameState.name)
    return (
        <div>
            <label htmlFor="nameInput">Type your name:</label>
            <input
                type="text"
                id="nameInput"
                value={nameState.name}
                onChange={handleChange}
                placeholder="Your name"
            />
            <NavLink to="/home">Go</NavLink>
            <p>Hello, {name}!</p>
        </div>
    );
};

export default CustomInput;
