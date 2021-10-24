import React, { useContext, useEffect, useState } from 'react'
import { pedirProductos } from '../../Helpers/pedirProductos'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'
import { UIContext } from '../../context/UIContext'

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    // const [loading, setLoading] = useState(false)

    const { loading, setLoading } = useContext(UIContext)

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true)

        pedirProductos()
            .then((res) => {

                if (categoryId === "todos") {
                    setItems(res)
                }
                else {
                    setItems(res.filter(prod => prod.tipo === categoryId))
                }

            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    return (
        <section className="container my-5">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <> <h2> {categoryId.toUpperCase()} </h2> <ItemList productos={items} /> </>
            }

        </section>
    )
}

