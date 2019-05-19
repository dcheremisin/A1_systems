import React from 'react';
import {connect} from 'react-redux';
import FormInput from '../presentational-components/FormInput';
import actions from '../action';

function FormInputContainer({
                                data,
                                type,
                                changeType
                            }) {
    return (
            <FormInput
                data={data}
                type={type}
                changeType={changeType}
            />
    );
}

const mapStateToProps = state => ({
    type: state.type,
});

const mapDispatchToProps = {
    changeType: actions.changeType,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FormInputContainer);