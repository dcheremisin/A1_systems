import React from 'react';

function HeaderProgress({
                            formProgress,
                        }) {
    return  (
        <div className="container form-container p-2">
            <h5>
                {`Шаг ${formProgress.value} из 3`}
            </h5>
            <div className="progress">
                <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={formProgress.value}
                    aria-valuemin="1"
                    aria-valuemax="3"
                    style={{ width: formProgress.percent }}
                >
                </div>
            </div>
        </div>
    );
}

export default HeaderProgress;