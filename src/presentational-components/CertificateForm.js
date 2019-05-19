import React from 'react';
import HeaderProgressContainer from '../container-components/HeaderProgress';
import FormInput from '../container-components/FormInput';
import '../styles/CertificateForm.scss';

function CertificateForm({
                             changePage,
                             visibleFields,
                             isFieldsValid
                         }) {
    return  (
        <div className="container form-container p-2">
            <HeaderProgressContainer />
            {
                visibleFields.map(data => <FormInput key={data.id} data={data}/>)
            }
            <section className="d-flex justify-content-between mt-2">
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => changePage('back')}
                >
                    Назад
                </button>
                <button
                    type="button"
                    disabled={!isFieldsValid()}
                    className="btn btn-outline-secondary"
                    onClick={() => changePage('next')}
                >
                    Продолжить
                </button>
            </section>
        </div>
    );
}

export default CertificateForm;