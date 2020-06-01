import React from 'react';
import OpenAPIClientAxios from 'openapi-client-axios';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
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

class SignUpScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            cep: "",
            endereco_apelido: "",
            endereco: "",
            bairro: "",
            numero_casa: "",
            localizacao_geografica: "",
            nome: "",
            documento: "",
            data_nascimento: "",
            sexo: "",
            telefone: "",
            pontuacao: "",
            uf_id: "",
        };
    }

    async authDispatch() {
        console.log(this.state);
        const client = await api.getClient();
        let user_response = await client.auth_users_create(null, {
            email: this.state.email,
            password: this.state.password,
        })
        // const res = await client.auth_token_login_create(null,{
        //     email: this.props.email,
        //     cep: this.props.cep,
        //     endereco_apelido: this.props.endereco_apelido,
        //     endereco: this.props.endereco,
        //     bairro: this.props.bairro,
        //     numero_casa: this.props.numero_casa,
        //     localizacao_geografica: this.props.localizacao_geografica,
        //     nome: this.props.nome,
        //     documento: this.props.documento,
        //     data_nascimento: this.props.data_nascimento,
        //     sexo: this.props.sexo,
        //     telefone: this.props.telefone,
        //     pontuacao: this.props.pontuacao,
        //     uf_id: this.props.uf_id,
        //     user_id: user_response.data.id,
        // });

        // window.location.pathname = '/login'
    }

    onInputChange(evt) {
        this.setState(
            {
                [evt.currentTarget.name]: evt.currentTarget.value
            }
        )
    }

    render() {
        return(
            <div>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    style={{ minHeight: '100vh' }}
                >
                    <div className="logo"><img src={logo} /></div>
                    <Grid item xs={10} sm={6} md={4} lg={3}>
                                <h2 className="cadastro">
                                    Preencha os campos com seus dados.
                                </h2>
                                <TextField
                                    className="input"
                                    required
                                    id="filled-basic"
                                    variant="filled"
                                    label="Nome"
                                    margin="normal"
                                    name="name"
                                    onChange={this.onInputChange.bind(this)}
                                />
                                <br />
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
                                    label="Telefone"
                                    margin="normal"
                                    name="telephone"
                                    onChange={this.onInputChange.bind(this)}
                                />
                                <br />
                                <TextField
                                    className="input"
                                    required
                                    id="filled-basic"
                                    variant="filled"
                                    label="CPF"
                                    margin="normal"
                                    name="cpf"
                                    onChange={this.onInputChange.bind(this)}
                                />
                                <br />
                                <TextField
                                    className="input"
                                    required
                                    id="filled-basic"
                                    variant="filled"
                                    label="CEP"
                                    margin="normal"
                                    name="cep"
                                    onChange={this.onInputChange.bind(this)}
                                />
                                <br />
                                <TextField
                                    className="input"
                                    required
                                    id="filled-basic"
                                    variant="filled"
                                    label="Endereço"
                                    margin="normal"
                                    name="address"
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
                                    name="password"
                                    onChange={this.onInputChange.bind(this)}
                                />
                                <br />
                                <br />
                                <button className="btn-login btn-cadastrar" onClick={this.authDispatch.bind(this)} variant="contained" color="primary">
                                    CADASTRAR
                                </button>
                    </Grid>
                </Grid>

            </div>
        )
    }
}

export default SignUpScreen;