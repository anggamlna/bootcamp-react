import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotal from './CartTotal';

/* Halaman utama dari Cart Page */

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {context => {
                        const { cart } = context;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="your" title="cart" />
                                    <CartColumns />
                                    <CartList context={context} />
                                    <CartTotal context={context} />
                                </React.Fragment>
                            );
                        } else {
                            return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}
