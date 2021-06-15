import React from "react";

export default function Checkout(props) {
    const { apples, bananas, pears } = props;
    return (
        <div>
            <div>
                <h3>🍎: {apples}</h3>
            </div>
            <div>
                <h3>🍌: {bananas}</h3>
            </div>
            <div>
                <h3>🍐: {pears}</h3>
            </div>
            <button>Checkout!</button>
        </div>
    );
}
