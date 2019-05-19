import React from 'react';
import {connect} from 'react-redux';
import Certificate from '../presentational-components/Certificate'
import actions from '../action';

function CertificateContainer({
                                  page,
                                  setPage,
                                  setFormPage,
                                  changeType,
                                  clearFormValues
}) {

    const setHomePage = () => {
        clearFormValues();
        setFormPage(1);
        changeType(null);
        setPage('home');
    };

    return <Certificate
        page={page}
        setPage={setPage}
        setHomePage={setHomePage}
    />;
}

const mapStateToProps = state => ({
  page: state.page,
});

const mapDispatchToProps = {
    clearFormValues: actions.clearFormValues,
    setPage: actions.setPage,
    changeType: actions.changeType,
    setFormPage: actions.setFormPage,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CertificateContainer);