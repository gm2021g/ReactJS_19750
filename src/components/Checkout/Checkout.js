import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import { CartContext } from '../../context/CartContext'
import 'firebase/firestore'
import Swal from 'sweetalert2'
import { Loader } from '../Loader/Loader'
import { UIContext } from '../../context/UIContext'
import { generarOrden } from '../../firebase/generarOrden'

export const Checkout = () => {
    const { loading, setLoading } = useContext(UIContext)
    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length < 2) {
            Swal.fire({
                icon: 'warning',
                title: 'Nombre inválido'
            })
            return
        }

        if (values.apellido.length < 2) {
            Swal.fire({
                icon: 'warning',
                title: 'Apellido inválido'
            })
            return
        }

        if (values.email.length < 3) {
            Swal.fire({
                icon: 'warning',
                title: 'Email inválido'
            })
            return
        }

        if (values.telefono.length < 3) {
            Swal.fire({
                icon: 'warning',
                title: 'Teléfono inválido'
            })
            return
        }

        setLoading(true)
        generarOrden(values, carrito, calcularTotal())
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Orden registrada!',
                    text: `Guarde su número: ${res}`,
                    willClose: () => {
                        vaciarCarrito()
                    }
                })
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Productos sin stock',
                    text: `No hay stock de: ${err.map(el => el.nombre).join(', ')}`
                })
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            {carrito.length === 0 && <Redirect to="/" />}
            {loading && <Loader />}

            <div>

                <div className="container my-5">

                    <form onSubmit={handleSubmit}>
                        <p className="tituloPrincipal">Completa tus datos</p>

                        <div className="my-4">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Nombre"
                                name="nombre"
                                value={values.nombre}
                                onChange={handleInputChange}
                            />
                            {values.nombre.length === 0 && <small>Campo obligatorio</small>}
                        </div>

                        <div className="my-4">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Apellido"
                                name="apellido"
                                value={values.apellido}
                                onChange={handleInputChange}
                            />
                            {values.apellido.length === 0 && <small>Campo obligatorio</small>}
                        </div>

                        <div className="my-4">
                            <input
                                className="form-control my-2"
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                            />
                            {values.email.length === 0 && <small>Campo obligatorio</small>}
                        </div>

                        <div className="my-4">
                            <input
                                className="form-control my-2"
                                type="telefono"
                                placeholder="Telefono"
                                name="telefono"
                                value={values.telefono}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <button className="btn btn-warning" type="submit">Finalizar</button>
                        </div>
                    </form >
                </div >

            </div>
        </>
    )
}
