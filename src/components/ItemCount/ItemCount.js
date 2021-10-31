import React from 'react'
import './ItemCount.css';

export const ItemCount = ({ cantidad, modify, maximo }) => {

    const handleRestar = () => {
        if (cantidad > 0) {
            modify(cantidad - 1)
        }
    }

    const handleSumar = () => {
        if (cantidad < maximo) {
            modify(cantidad + 1)
        }
    }

    return (
        <div>
            <button
                onClick={handleRestar}
                className={`btn ${cantidad === 0 ? "btn-secondary desactivado" : "btn-warning"}`}
            >
                -
            </button>

            <span className="mx-3">{cantidad}</span>

            <button
                onClick={handleSumar}
                className={`btn ${cantidad === maximo ? "btn-secondary desactivado" : "btn-warning"}`}
            >
                +
            </button>
            {cantidad === maximo && <p> Máximo disponible: {cantidad} productos  </p>}
        </div>
    )
}