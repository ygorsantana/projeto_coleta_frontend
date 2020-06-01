import React from 'react';
import HomeScreen from "./screens/home";
import LoginScreen from "./screens/login";
import SignUpScreen from "./screens/signup";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import './App.css';
import TemporaryDrawer from "./components/Drawer";
import {Helmet} from "react-helmet";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openDrawer: false
        };
    }
    toggleDrawer(open) {
        this.setState({ openDrawer: open })
    }
    render() {
        console.log(localStorage.getItem('token'));
        return (
            <div className={`App ${localStorage.getItem('token') ? "" : "App-background"}`}>
                <Router>
                    <Helmet>
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" />
                        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,400;0,500;0,700;0,900;1,400&display=swap" rel="stylesheet"></link>
                    </Helmet>
                    {
                        localStorage.getItem('token') &&
                        <TemporaryDrawer closeDrawer={this.toggleDrawer.bind(this, false)} open={this.state.openDrawer} />
                    }
                    {
                        localStorage.getItem('token') ? (
                            <React.Fragment>
                                <Header openDrawer={this.toggleDrawer.bind(this, true)} />
                                <Link to="/"></Link>
                                <Switch>
                                    <Route path="/signup">
                                        <SignUpScreen />
                                    </Route>
                                    <Route path="/">
                                        <HomeScreen />
                                    </Route>
                                </Switch>
                            </React.Fragment>
                        ) : (
                                <React.Fragment>
                                    {window.location.href.includes("/signup") ? "" : <Redirect to='/login' />}
                                    <Switch>
                                        <Route path="/login">
                                            <LoginScreen />
                                        </Route>
                                        <Route path="/signup">
                                            <SignUpScreen />
                                        </Route>
                                    </Switch>
                                </React.Fragment>
                            )
                    }
                </Router>
            </div>
        );
    }
}

export default App;
