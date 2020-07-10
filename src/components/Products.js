import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

/* Halaman ini memuat main page yang menampilkan seluruh product */

export default class Products extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {/* Bagian ini menampilkan foto produk dan tombol 'add to cart' saat dihover dan berubah menjadi 'in cart' saat telah selesai diklik */}

                        {(context) => (
                            <div className="img-container p-5" onClick={() => context.handleDetail(id)}>

                                <Link to="/details">
                                    <img src={img} alt="product" className="card-img-top" />
                                </Link>

                                <button className="cart-btn" disabled={inCart ? true : false} onClick={() => {
                                    context.addtoCart(id);
                                }}>
                                    {inCart ? (
                                        <p classname="text-capitalize mt-0" disabled >
                                            {" "} In cart
                                        </p>
                                    ) : (
                                            <i className="fas fa-shopping-cart" />
                                        )}
                                </button>
                            </div>
                        )}
                    </ProductConsumer>

                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h6 className="text-grey mb-0">
                            <span>$</span>{price}
                        </h6>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}


const ProductWrapper = styled.div`
.card {
    border-color: tranparent;
    transition: all .3s linear;
}

.card-footer {
    background: transparent;
    border: transparent;
    transition: all .3s linear
}

&:hover {
    .card {
        box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.1)
    }

    .card-footer {
        background: rgba(247, 247, 247)
    }
}

.img-container {
    position: relative;
    overflow: hidden;
}

.card-img-top {
    transition: all 0.3s linear;
}

.img-container:hover .card-img-top {
    transform: scale(1.05);
}

.cart-btn {
    position: absolute;
    bottom: 0;
    left: 45%;
    right: 50%;
    padding: .2rem .4rem;
    background: var(--mainWhite);
    border: none;
    border-radius: .5rem;
    color: var(--lightBlack);
    font-size: 1rem;
    transform: translate(0%,100%);  /* hide the button */
    transition: all 0.3s linear;
}

.img-container:hover .cart-btn {
    transform: translate(0,0);
}

.cart-btn:hover {
    background: var(--mainBlack);
    color: var(--lightWhite);
}
}
`