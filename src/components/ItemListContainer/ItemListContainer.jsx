import React, { useEffect, useState } from 'react'
import { PedirProductos } from '../../Helpers/PedirProductos'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        PedirProductos()
            .then((res) => {
                setItems(res)
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return (
        <section className="container my-5">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList productos={items} />
            }

        </section>
    )
}

