import React, { useContext, useEffect, useState } from 'react'
import { pedirProductos } from '../../Helpers/pedirProductos'
import { useParams } from 'react-router'
import { ItemDetail } from './ItemDetail'
import { UIContext } from '../../context/UIContext'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    // const [loading, setLoading] = useState(false)

    const { loading, setLoading } = useContext(UIContext)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirProductos()
            .then(res => {
                setItem(res.find(prod => prod.id === Number(itemId)))
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <div>
            {
                loading ? <h2> Cargando...</h2>
                    : <ItemDetail {...item} />
            }
        </div>
    )
}
