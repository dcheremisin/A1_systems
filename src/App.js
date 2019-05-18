import React, { Component } from "react";
import Certificate from './container-components/Certificate'

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
                    <Certificate />
                </div>
            </div>
        );
    }
}

export default App;