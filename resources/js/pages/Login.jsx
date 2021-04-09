import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });
    const [state, setState] = useState(false);
    const [responseData, setResponseData] = useState({});

    useEffect(async () => {
        if (state) {
            const headers = {
                // 'Content-Type': 'application/json',
                Accept: 'application/json',
            };
            const url = `${window.location.origin}/api/login`;
            axios.post(url, userData, { headers })
                .then((response) => response.data)
                .then((response) => {
                    setResponseData(...response);
                })
                .catch((error) => setResponseData(...error));
        }
        setState(false);
    }, [state]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(userData));
        setState(true);
    };

    const handleChange = (event) => setUserData({
        ...userData,
        [event.target.name]: event.target.value,
    });

    return (
        <>
            <pre>{JSON.stringify(responseData, null, 4)}</pre>
            <Form
                className="w-25 mx-auto mt-5"
                onSubmit={handleSubmit}
            >
                <Form.Label className="mt-3">Email</Form.Label>
                <Form.Control
                    name="email"
                    type="email"
                    value={userData.email}
                    onChange={handleChange}
                />
                <Form.Label className="mt-3">Password</Form.Label>
                <Form.Control
                    name="password"
                    type="password"
                    placeholder="Type in new password"
                    value={userData.password}
                    onChange={handleChange}
                />
                <Button
                    className="mt-3"
                    variant="primary"
                    type="submit"
                >
                    Login
                </Button>
            </Form>
        </>
    );
};

export default Login;
