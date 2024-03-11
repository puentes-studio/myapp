import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import AlertModal from '../alerts/Alert';
import { useName } from '../../../Context/Name.Context';
import './CustomInput.css'

const CustomInput = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [name, setName] = useState('');
    const { handleName, nameState } = useName();


    const handleChange = (event) => {
        const inputValue = event.target.value;
        setName(inputValue); 
        handleName(inputValue);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        try {
            const trimmedName = nameState.name.trim();
            const inputConditions = /^[a-zA-Z]{1,35}$/;
    
            if (trimmedName === '') {
                setAlertMessage('Please enter your name.');
                setIsOpen(true);
            } else if (!inputConditions.test(trimmedName)) {
                setAlertMessage('Please enter name with no simbols and numbers');
                setIsOpen(true);
            } else {
                navigate('/home');
            }
        } catch (error) {
            // Handle any potential errors here
            console.error('An error occurred:', error);
        }
    };

console.log(nameState.name)

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <label className="label-input" htmlFor="nameInput">Hi! What's your name?</label>
                <input
                    className='custom-input'
                    type="text"
                    id="nameInput"
                    value={name}
                    onChange={handleChange}
                    placeholder="Your name"
                />
                <button type="submit" className="button">Go in!</button>
            </form>

            <AlertModal isOpen={isOpen} message={alertMessage} onClose={closeModal} />
        </div>
    );
};

export default CustomInput;
