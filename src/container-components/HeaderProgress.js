import React from 'react';
import {connect} from 'react-redux';
import HeaderProgress from '../presentational-components/HeaderProgress';
import actions from '../action';

function HeaderProgressContainer({
                                     page,
                                     formPage,
                                 }) {
    const formProgress = () => {
        switch (formPage) {
            case 1:
                return {
                    value: '1',
                    percent: '0%',
                };
            case 2:
                return {
                    value: '2',
                    percent: '50%',
                };
            case 3:
                return {
                    value: '3',
                    percent: '100%',
                };
            default:
                return {
                    value: '-',
                    percent: '0%',
                };
        }
    };

    return (
            <HeaderProgress
                formProgress={formProgress()}
            />
    );
}

const mapStateToProps = state => ({
    page: state.page,
    formPage: state.formPage,
});

const mapDispatchToProps = {
    setPage: actions.setPage,
    setFormPage: actions.setFormPage,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HeaderProgressContainer);