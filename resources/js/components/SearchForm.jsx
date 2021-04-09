import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Table } from "react-bootstrap";

export default function SearchForm() {
    // const [results, setResults] = useState([]);
    // const [keyWord, setKeyWord] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
    };
    // useEffect(() => {
    //     axios
    //         .get(`${window.location.origin}/api/search`)
    //         .then((response) => {
    //             setResults(response.data);
    //         })
    //         .catch((error) => console.error(error));
    // }, []);

    return (
        <Form onSubmit={handleSearch} className="w-25 mx-auto mt-5">
            <Form.Label>Enter key word</Form.Label>
            <Form.Control name="keyWord" type="text" />
            <Button className="mt-3" variant="primary" type="submit">
                Search
            </Button>
        </Form>
    );
}
