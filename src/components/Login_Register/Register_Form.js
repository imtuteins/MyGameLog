import React, { useState } from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';

const RegisterForm = ({ onSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [valid, setValid] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            onSubmit({ firstName, lastName, username, email, password });
        }
        setValid(true);
    };

    return (
            <Container style={{ maxWidth: '400px', marginTop: '10px', backgroundColor: '#2c2c54', padding: '20px', borderRadius: '10px', color: 'white' }}>
                <h2 className="text-center">Register</h2>
                <Form noValidate validated={valid} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First Name"
                                style={{ backgroundColor: '#1e1e2f', color: 'white', border: 'none' }}
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">Please provide a first name.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last Name"
                                style={{ backgroundColor: '#1e1e2f', color: 'white', border: 'none' }}
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">Please provide a last name.</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Form.Group controlId="formLastName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Username"
                            style={{ backgroundColor: '#1e1e2f', color: 'white', border: 'none' }}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">Please provide a username.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Correo"
                            style={{ backgroundColor: '#1e1e2f', color: 'white', border: 'none' }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Contraseña"
                            style={{ backgroundColor: '#1e1e2f', color: 'white', border: 'none' }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">Please provide a valid password.</Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{ marginLeft:"3rem", marginTop: '20px', width: '75%', backgroundColor: '#6c63ff', border: 'none' }}>
                        Register
                    </Button>
                </Form>
        </Container>    
    );
};

export default RegisterForm;
