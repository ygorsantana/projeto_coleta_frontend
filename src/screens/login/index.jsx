import React from 'react';
import OpenAPIClientAxios from 'openapi-client-axios';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import logo from "../../static/logo.png";
import "./styles.css";


const api = new OpenAPIClientAxios(
    {
        definition: 'http://192.168.15.18:8000/swagger.json',
        axiosConfigDefaults: {
            baseURL: 'http://192.168.15.18:8000/'
        }
    }
);
api.init();

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    async authDispatch() {
        console.log(this.state);
        const client = await api.getClient();
        const res = await client.auth_token_login_create(null, {
            email: this.state.email,
            password: this.state.password
        });
        localStorage.setItem("token", res.data.auth_token)
        if (res.data.auth_token) {
            window.location.pathname = '/'
        }
    }

    onInputChange(evt) {
        this.setState(
            {
                [evt.currentTarget.name]: evt.currentTarget.value
            }
        )
    }

    render() {
        return (
            <div>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    style={{ minHeight: '100vh' }}
                >
                    <div className="logo"><img src={logo} /></div>
                    <Grid item xs={10} sm={6} md={4} lg={3}>
                        <Card style={{ borderRadius: '0', marginBottom: '30px' }}>
                            <CardContent>
                                <h2 className="welcome">
                                    Bem-vindo!
                                </h2>
                                <TextField
                                    className="input"
                                    required
                                    id="filled-basic"
                                    variant="filled"
                                    label="Email"
                                    name="email"
                                    margin="normal"
                                    onChange={this.onInputChange.bind(this)}
                                />
                                <br />
                                <TextField
                                    className="input"
                                    required
                                    id="filled-basic"
                                    variant="filled"
                                    label="Password"
                                    margin="normal"
                                    type="password"
                                    name="password"
                                    onChange={this.onInputChange.bind(this)}
                                />
                                <br />
                                <br />
                                <button className="btn-login" onClick={this.authDispatch.bind(this)} variant="contained" color="primary">
                                    ENTRAR
                                </button>
                                <br />
                                <div className="cadastrar">
                                    <h3>Não possui uma conta?</h3>
                                    <button>
                                        <Link to="/signup" style={{ textDecoration: "none"}}>
                                            Cadastrar
                                        </Link>
                                    </button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default LoginScreen;