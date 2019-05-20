import React from 'react';
import {connect} from 'react-redux';
import CertificateForm from '../presentational-components/CertificateForm';
import actions from '../action';
import fields from '../../test/fields.json';
import { validates, regexpEmail } from '../helpers.js';
import '../styles/CertificateForm.scss';

function CertificateFormContainer({
                                      page,
                                      formPage,
                                      setPage,
                                      setFormPage,
                                      type,
                                      changeType,
                                      clearFormValues,
                                      formValues
}) {

    const visibleFields = () => {
        if (formPage === 1) {
            return (
                [{"name":"ТИП",
                    "id":"type",
                    "values":[
                        {"name":"Юр.лицо","value":"organization"},
                        {"name":"ИП","value":"individual_organization"}
                        ]}]
            );
        } else if (formPage === 2) {
            return fields["personal"];
        } else if (formPage === 3) {
            return (type === 'organization'
                ? fields["organization"]
                : fields["individual_organization"]
                );
        }
    };

    const showResult = () => {
        let params = Object.assign(formValues.personal, formValues[type]);
        console.log('"params":', JSON.stringify(params));
        clearFormValues();
        changeType(null);
        setFormPage(1);
        setPage('home');
    };

    const changePage = (type) => {
        if (formPage === 1 && type === 'back') {
            clearFormValues();
            changeType(null);
            setPage('home');
        } else if (formPage === 3 && type === 'next') {
            showResult();
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
                return valid = isFormValid("personal");
            case 3:
                return valid = isFormValid("organization")
                    || isFormValid("individual_organization");
        }
    };

    const isFormValid = (formFields) => {
        let pass = true;
        const mask = validates[formFields];
        const values = formValues[formFields];
        for (let key in mask) {
            if (values[key].length === 0) {
                pass = false;
            }
            if (mask[key].fieldLength
                && values[key].length !== mask[key].fieldLength) {
                pass = false;
            }
            if (mask[key].type === 'number'
                && !(Number.isInteger(Number(values[key]))
                && values[key] > 0)) {
                pass = false;
            }
            if (mask[key].type === 'email'
                && !regexpEmail.test(values[key])) {
                pass = false;
            }
        }

        return pass;
    };

    return (
        <CertificateForm
            changePage={changePage}
            visibleFields={visibleFields()}
            isFieldsValid={isFieldsValid}
            formPage={formPage}
        />
    );
}

const mapStateToProps = state => ({
    type: state.type,
    page: state.page,
    formPage: state.formPage,
    formValues: state.formValues,
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