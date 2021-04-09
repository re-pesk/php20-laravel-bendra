import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import Search from "./components/Search";
import Error from "./pages/Error";

export default function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/search" component={Search} />
                <Route component={Error} />
            </Switch>
        </>
    );
}
