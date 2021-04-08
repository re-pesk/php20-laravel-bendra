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
        <h1>Test</h1>
        // <Form className="w-25 mx-auto">
        //     <Form.Label>Firstname</Form.Label>
        //     <Form.Input type="text" defaultValue={user.name} />

        //     <Form.Label>Lastname</Form.Label>
        //     <Form.Input type="text" defaultValue={user.lastname} />

        //     <Form.Label>Email</Form.Label>
        //     <Form.Input type="email" defaultValue={user.email} />


        //     <Form.Label>Password</Form.Label>
        //     <Form.Input type="password" placeholder="Type in new password" />

        //     <Button variant="primary" type="submit">
        //         Update info
        //     </Button>
        // </Form>
    );
}

export default UserCard;