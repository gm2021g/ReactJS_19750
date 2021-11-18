import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { UIContext } from '../../context/UIContext'
import { getFirestore } from '../../firebase/config'
import { Loader } from '../Loader/Loader'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const { loading, setLoading } = useContext(UIContext)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const db = getFirestore()
        const productos = (categoryId !== 'todos')
            ? db.collection('productos').where('tipo', '==', categoryId)
            : db.collection('productos')

        productos.get()
            .then((response) => {
                const newItems = response.docs.map((doc) => {
                    // docs es el listado de documentos de la base
                    return { id: doc.id, ...doc.data() }
                })

                setItems(newItems)
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            }
            )

    }, [categoryId, setLoading])

    // render con operador ternario
    return (

        <section className="container my-5">
            <p className="tituloPrincipal"> {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} </p>
            {
                loading
                    ? <Loader />
                    : <ItemList productos={items} />
            }
        </section>
    )
}
