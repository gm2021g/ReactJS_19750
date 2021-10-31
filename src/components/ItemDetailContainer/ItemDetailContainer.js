import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Loader } from '../Loader/Loader'
import { ItemDetail } from './ItemDetail'
import { UIContext } from '../../context/UIContext'
import { getFirestore } from '../../firebase/config'


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    // const [loading, setLoading] = useState(false)

    const { loading, setLoading } = useContext(UIContext)

    const { itemId } = useParams()

    console.log('*** itemId ' + itemId)

    useEffect(() => {
        setLoading(true)

        const db = getFirestore()
        const productos = db.collection('productos')
        const item = productos.doc(itemId)
        item.get()
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })

            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })

    }, [itemId, setLoading])

    //return (
    // <section className="container my-5">
    //     {  
    //         loading
    //             ? <Loader />
    //             : <ItemDetail {...item} />
    //     }
    // </section>)

    return (
        <section className="cointainer my-5">
            {loading && <Loader />}
            {!loading && <ItemDetail {...item} />}
        </section>
    )
}
