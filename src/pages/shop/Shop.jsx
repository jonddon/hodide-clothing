import React, { Component } from 'react'
import SHOP_DATA from './Shop.data.js'
class Shop extends Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }

    }



    render() {
        return (
            <>
               SHOP PAGE 
            </>
        )
    }
}

export default Shop;