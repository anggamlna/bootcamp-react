import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

/* Halaman ini menampilkan detail produk dari Product List Page */

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(context) => {
                    const {
                        id,
                        model,
                        img,
                        info,
                        price,
                        title,
                        inCart
                    } = context.detailProduct;

                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx- auto text-center text-slanted text-black my-5 text-title">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>

                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h4>{model}</h4>
                                    <h5 className="text-grey">
                                        <span>$</span>{price}
                                    </h5>

                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Description:
                                    </p>
                                    <p className="text-muted small">
                                        {info}
                                    </p>

                                    <div>
                                        <Link to="/">
                                            <ButtonContainer cart>
                                                Continue shopping
                                            </ButtonContainer>
                                        </Link>

                                        <ButtonContainer
                                            disabled={inCart ? true : false}
                                            onClick={() => {
                                                context.addtoCart(id);
                                            }}>
                                            {inCart ? 'In cart' : 'Add to cart'}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}
