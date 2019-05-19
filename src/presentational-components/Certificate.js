import React from 'react';
import CertificateFormContainer from '../container-components/CertificateForm';
import '../styles/Certificate.scss';

function Certificate({
                         page,
                         setPage,
                         setHomePage,
}) {
    return (
        <div className="container">
            <nav className="m-1">
                <button className="p-1" onClick={setHomePage}>
                    <i className="material-icons">
                        home
                    </i>
                </button>
            </nav>
            {page === 'home' ? (
                <button
                    className="start-button btn btn-primary"
                    onClick={() => setPage('form')}
                >
                    Создать заявку
                </button>
            ) : (
                <div className="p-2 mx-auto w-75">
                    <h4>
                        Заявление на создание
                    </h4>
                    <CertificateFormContainer />
                </div>
            )}
        </div>
    );
}

export default Certificate;