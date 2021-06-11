import React, { Component } from 'react'
import CollectionPreview from '../../components/collection-preview/CollectionPreview.jsx'
import SHOP_DATA from './Shop.data.js'
class Shop extends Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }

    }



    render() {
        const { collections } = this.state;
        return (
            <>
                {
                    collections.map(({ id, ...otherCollectionProps })=>
                        (
                            <CollectionPreview key={id} {...otherCollectionProps} />
                        )
                    )
                }
               
            </>
        )
    }
}

export default Shop;