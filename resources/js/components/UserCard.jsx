import React from 'react';
import axios from 'axios';
import { Form, Button } from "react-bootstrap";

const UserCard = () => {

    const [user, setUser] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://127.0.0.1:3000/api/users/10')
            .then(response => {
                setUser(response.data)
            })
            .catch(error => console.error(error));
    }, []);

    return (
        // <h1>Test</h1>
        <Form className="w-25 mx-auto mt-5">
            <Form.Label>Firstname</Form.Label>
            <Form.Control type="text" defaultValue={user.name} />

            <Form.Label className="mt-3">Lastname</Form.Label>
            <Form.Control type="text" defaultValue={user.lastname} />

            <Form.Label className="mt-3">Email</Form.Label>
            <Form.Control type="email" defaultValue={user.email} />

            <Form.Label className="mt-3">Password</Form.Label>
            <Form.Control type="password" placeholder="Type in new password" />

            <Button className="mt-3" variant="primary" type="submit">
                Update info
            </Button>
        </Form>
    );
}

export default UserCard;