import React from 'react';

function FormInput({
                       data,
                       type,
                       changeType,
                       formValues,
                       setValue
                   }) {

    const setInputType = (data) => {
        let element;
        switch (data.id) {
            case 'type':
                element = (
                    <form>
                        <h6>
                            Для кого хотите получить сертификат
                        </h6>
                        {data.values.map(item => (
                            <div
                                key={item.value}
                                className="form-check d-flex align-items-center"
                            >
                                <input
                                    onChange={() => changeType(item.value)}
                                    className="form-check-input"
                                    type="radio"
                                    name={data.name}
                                    id={data.id}
                                    value={item.value}
                                    checked={item.value === type}
                                >
                                </input>
                                <label
                                    className="form-check-label"
                                    htmlFor={data.name}
                                >
                                    {item.name}
                                </label>
                            </div>
                        ))}
                    </form>
                );
                return element;
            default:
                if(!type) return null;
                element = (
                    <form>
                        <div className="mx-2 row form-group">
                            <label className="col-3">
                                {data.name}
                            </label>
                            <input
                                value={formValues[type][data.id]}
                                onChange={(e) => setValue(e, type, data.id)}
                                type="text"
                                className="form-control col-9"
                                id={data.id}
                            >
                            </input>
                        </div>
                    </form>
                );
                return element;
        }
    };

    return (
        <div className="container form-container p-2">
            {setInputType(data)}
        </div>
    );
}

export default FormInput;