import React from 'react';

function FormInput({
                       data,
                       type,
                       changeType,
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
                element = (
                    <form>
                        <div className="d-flex form-group">
                            <label className="mr-2">
                                {data.name}
                            </label>
                            <input type="email" className="form-control" id={data.id}>
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