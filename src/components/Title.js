import React from 'react';

export default function Title({ title, name }) {
    return (
        <div className="Row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold">
                    {name} <strong className="text-capitalize">
                        {title}
                    </strong>
                </h1>
            </div>
        </div>
    )
}

