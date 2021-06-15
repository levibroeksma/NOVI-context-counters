import React from "react";

export default function Home(props) {
    const { totalFruit } = props;
    return <div>{totalFruit} stuks fruit besteld </div>;
}