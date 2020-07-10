import React from 'react';

/* Product List yang ditampilkan di Cart Page setelah dipilih */

export default function CartItem({ item, context }) {
    const { id, title, price, total, count } = item;
    const { increment, decrement, removeItem } = context;

    return (
        <div className="row my-4 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-times" />
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">
                    product:
                </span> {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">
                    price:
                </span>${price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
                            -
                        </span>
                        <span className="btn btn-black mx-1">
                            {count}
                        </span>
                        <span className="btn btn-black mx-1" onClick={() => increment(id)}>
                            +
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                ${total}
            </div>
        </div>
    )
}
