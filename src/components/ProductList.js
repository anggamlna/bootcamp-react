import React, { Component } from 'react';
import Products from './Products';
import Title from './Title';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row">
                            <ProductConsumer>
                                {(context) => {
                                    return context.products.map(product => {
                                        return <Products key={product.id} product={product}
                                        />;
                                    })   /* callback function */
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            //Products
        );
    }
}
