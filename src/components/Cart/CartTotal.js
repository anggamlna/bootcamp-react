import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../Button';

/* Menampilkan total harga beserta pajak untuk keseluruhan produk yang dipilih */

export default function CartTotal({ context }) {

    const { cartSubTotal, cartTax, cartTotal, clearCart } = context;

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-2 mt-2 ml=sm-5 ml-md-auto col-sm-8 text-right">
                        <Link to="/">
                            <ButtonContainer cart className="text-capitalize" type="button" onClick={() => clearCart()}>
                                Clear cart
                            </ButtonContainer>
                        </Link>
                        <br />
                        <br />
                        <br />
                        <h5>
                            <span className="text-black">
                                Subtotal:
    </span><strong>${cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-black">
                                Tax:
    </span><strong>${cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-black">
                                Total:
    </span><strong>${cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
