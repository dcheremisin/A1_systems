import React from 'react';
import {connect} from 'react-redux';
import FormInput from '../presentational-components/FormInput';
import actions from '../action';
import {regexpEmail, validates} from "../helpers";

function FormInputContainer({
                                data,
                                type,
                                changeType,
                                formValues,
                                setFieldValue,
                                formPage
                            }) {
    const setValue = (e, type, field) => {
        setFieldValue({
            value: e.target.value,
            type,
            field
        });
    };
    const checkFiled = (type, field) => {
        let pass = '';
        const mask = validates[type][field];
        const value = formValues[type][field];
        if (value.length === 0) {
            return pass;
        }
        if (mask.type === 'number') {
            pass = (!(pass === 'is-invalid')
                && Number.isInteger(Number(value)))
                ? 'is-valid'
                : 'is-invalid';
        }
        if (mask.type === 'email') {
            pass = (!(pass === 'is-invalid')
                && regexpEmail.test(value))
                ? 'is-valid'
                : 'is-invalid';
        }
        if (mask.fieldLength) {
            pass = (!(pass === 'is-invalid')
                && value.length === mask.fieldLength)
                ? 'is-valid'
                : 'is-invalid';
        }
        return (!(pass === 'is-invalid')
            && value.length > 0)
            ? 'is-valid'
            : 'is-invalid';
    };

    return (
        <FormInput
            data={data}
            type={type}
            changeType={changeType}
            formValues={formValues}
            setValue={setValue}
            formPage={formPage}
            checkFiled={checkFiled}
        />
    );
}

const mapStateToProps = state => ({
    type: state.type,
    formValues: state.formValues,
    formPage: state.formPage,
});

const mapDispatchToProps = {
    changeType: actions.changeType,
    setFieldValue: actions.setFieldValue,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FormInputContainer);