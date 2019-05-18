import React from "react";
import { useState } from 'react';

function Certificate() {
    const [page, setPage] = useState('home');

    return (
        <div className="container">
            {page === 'home' && (
                <button
                    className="start-button btn btn-primary"
                    onClick={() => setPage(1)}
                >
                    Создать заявку
                </button>
            )}
        </div>
    );
}

export default Certificate;