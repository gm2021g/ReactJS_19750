import React from 'react'
import { SpinnerDotted } from 'spinners-react';
import './loader.css';

export const Loader = () => {
    return (
        <div className="load" >
            <SpinnerDotted />
            <h2>Cargando ...</h2>
        </div>
    )
}
