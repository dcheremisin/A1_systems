import React from 'react';
import {connect} from 'react-redux';
import CertificateForm from '../presentational-components/CertificateForm';
import actions from '../action';
import fields from '../../test/fields.json';

import '../styles/CertificateForm.scss';

function CertificateFormContainer({
                                      page,
                                      formPage,
                                      setPage,
                                      setFormPage,
                                      type,
                                      changeType,
                                      clearFormValues
}) {

    const visibleFields = () => {
        if (formPage === 1) {
            return (
                [{"name":"ТИП",
                    "id":"type",
                    "values":[
                        {"name":"Юр.лицо","value":"organization"},
                        {"name":"ИП","value":"personal"}
                        ]}]
            );
        } else if (formPage === 2) {
            return (type === 'organization'
                ? fields["organization"]
                : fields["personal"]
                );
        } if (formPage === 3) {
            return fields["individual_organization"];
        }
    };

    const changePage = (type) => {
        if (formPage === 1 && type === 'back') {
            clearFormValues();
            changeType(null);
            setPage('home');
        } else if (formPage === 3 && type === 'next') {
            setPage('home');
        } else if (type === 'next') {
            setFormPage(formPage + 1);
        } else if (type === 'back') {
            setFormPage(formPage - 1);
        }
    };

    const isFieldsValid = () => {
        let valid = false;
        switch (formPage) {
            case 1:
                return valid = !!type;
            case 2:
                return valid = isFormValid("organization")
                    || isFormValid("personal");
            case 3:
                return valid = isFormValid("individual_organization");
        }
    };

    const isFormValid = (formFields) => {
        console.log('formFields', fields[formFields]);
    };

    return (
        <CertificateForm
            changePage={changePage}
            visibleFields={visibleFields()}
            isFieldsValid={isFieldsValid}
        />
    );
}

const mapStateToProps = state => ({
    type: state.type,
    page: state.page,
    formPage: state.formPage,
});

const mapDispatchToProps = {
    setPage: actions.setPage,
    changeType: actions.changeType,
    setFormPage: actions.setFormPage,
    clearFormValues: actions.clearFormValues,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CertificateFormContainer);