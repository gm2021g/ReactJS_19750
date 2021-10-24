import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            <h1> Home </h1>
            <br />
            <hr />

            <Link to="/productos/todos" className="btn btn-warning" > Ir a la Tienda </Link>
        </div>
    )
}
