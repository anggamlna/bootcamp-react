import React, { Component } from 'react';

/* Halaman muncul saat menggunakan url yang tidak terdaftar */

export default class PageNotFound extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3">
                            404
                        </h1>
                        <h1>error</h1>
                        <br />
                    </div>
                    <h3 className="mx-auto text-center">page not found</h3>
                </div>
            </div>
        );
    }
}
