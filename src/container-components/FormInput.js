import React from 'react';
import {connect} from 'react-redux';
import FormInput from '../presentational-components/FormInput';
import actions from '../action';

function FormInputContainer({
                                data,
                                type,
                                changeType,
                                formValues,
                                setFieldValue
                            }) {
    const setValue = (e, type, field) => {
        setFieldValue({
                value: e.target.value,
                type,
                field
            });
    };

    return (
            <FormInput
                data={data}
                type={type}
                changeType={changeType}
                formValues={formValues}
                setValue={setValue}
            />
    );
}

const mapStateToProps = state => ({
    type: state.type,
    formValues: state.formValues,
});

const mapDispatchToProps = {
    changeType: actions.changeType,
    setFieldValue: actions.setFieldValue,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FormInputContainer);