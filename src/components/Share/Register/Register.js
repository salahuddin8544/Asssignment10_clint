import React,{useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const {createUser} =useContext(AuthContext)
    const handleAccepted = event => {
        setAccepted(event.target.checked)
    };
    const handleRegister = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photoURL,email,password);
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <Form  onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" placeholder="email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
                type="checkbox"
                onClick={handleAccepted}
                label={<>Accept :<Link to="/terms">Terms and conditions</Link></>} />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accepted}>
            Register
        </Button>
        <Form.Text className="text-danger">
            {error}
        </Form.Text>
    </Form>
    );
};

export default Register;