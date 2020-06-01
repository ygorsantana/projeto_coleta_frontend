import React from 'react';
import api from "../../config/api";
import "./styles.css";

api.axiosConfigDefaults.headers.Authorization = `Token ${localStorage.getItem('token')}`;
api.init();

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    // async listProducts() {
    //     const client = await api.getClient();
    // }
    // componentDidMount() 
    // }

    render() {
        return (<div class="content center-align">
            <div class="row">
                <div class="col s6 offset-s3">
                    <h4>Você possui 50 pontos.</h4>
                </div>
            </div>
            <div class="row">
                <div class="col s6 offset-s3">
                    <p>Veja o que você pode fazer com seus pontos clicando aqui</p>
                </div>
            </div>
            <div class="row">
                <div class="col s6 offset-s3">
                    <input class="main-btn" type="button" value="Encontrar pontos de coleta" />
                </div>
            </div>

            <div class="row">
                <div class="col s6 offset-s3">
                    <h5>Teste lorem </h5>
                </div>
            </div>
        </div>)
    }
}

export default HomeScreen;