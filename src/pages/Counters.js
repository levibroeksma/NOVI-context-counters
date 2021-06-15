import React, {useContext} from "react";
import {countContext} from "../App";

export default function Counters() {
    const { apples, setApples, bananas, setBananas, pears, setPears } = useContext(countContext);

    return (
        <div>
            <div>
                <h3>🍎: {apples}</h3>
                <button
                    onClick={() => setApples(apples + 1)}
                    onChange={(e) => {
                            setApples(e.target.value)
                        }}
                >+</button>
                <button
                    onClick={() => setApples(apples - 1)}
                    value={apples}
                    onChange={(e) => {
                        setApples(e.target.value)
                    }}
                >-</button>
            </div>
            <div>
                <h3>🍌: {bananas}</h3>
                <button
                    onClick={() => setBananas(bananas + 1)}
                    value={bananas}
                    onChange={(e) => {
                        setBananas(e.target.value)
                    }}
                >+</button>
                <button
                    onClick={() => setBananas(bananas - 1)}
                    onChange={(e) => {
                    setBananas(e.target.value)
                }}>-</button>
            </div>
            <div>
                <h3>🍐: {pears}</h3>
                <button
                    onClick={() => setPears(pears + 1)}
                    value={pears}
                    onChange={(e) => {
                        setPears(e.target.value)
                    }}
                >+</button>
                <button
                    onClick={() => setPears(pears - 1)}
                    onChange={(e) => {
                            setPears(e.target.value)
                        }}
                >-</button>
            </div>
        </div>
    );
}
