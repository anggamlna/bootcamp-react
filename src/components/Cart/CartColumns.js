import React from 'react';

/* Header column Cart Page */

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"></p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">name</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">subtotal</p>
                </div>
            </div>
        </div>
    )
}
