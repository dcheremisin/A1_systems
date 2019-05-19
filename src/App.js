import React, { Component } from "react";
import CertificateContainer from './container-components/Certificate'

import './styles/App.scss';

class App extends Component {
    render() {
        return (
            <div className={'app'}>
                <div
                    className="header"
                >
                    Тестовое - А1 Системс
                </div>
                <div
                    className="main"
                >
                    <CertificateContainer />
                </div>
            </div>
        );
    }
}

export default App;