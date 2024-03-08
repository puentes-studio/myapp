import { useState } from 'react';

const CustomInput = () => {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <label htmlFor="nameInput">Type your name:</label>
            <input
                type="text"
                id="nameInput"
                value={name}
                onChange={handleChange}
                placeholder="Your name"
            />
            <p>Hello, {name}!</p>
        </div>
    );
};

export default CustomInput;
