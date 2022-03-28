import React, { useState } from 'react'


export default function Custom(props) {


    const [counter, setCounter] = useState(0)

    function decrease() {
        setCounter(counter - 1)
    }

    function increase() {
        setCounter(counter + 1)
    }


    return (
        <>
            <h1>Counter:{counter}</h1>
            <button onClick={decrease}>Decrease Value</button>
            <button onClick={increase}>Increase Value</button>

        </>


    )
}
