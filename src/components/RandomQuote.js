import React, { useState } from 'react'

const quotes = [
    "I am a believer of Allah",
    "Allah is the only God, everyone should worship",
    "I love Allah",
    "abc",
    "def"
]



function RandomQuote() {

    const [quote, setQuote] = useState("");


    function random() {
        const randomquote = quotes[Math.floor(Math.random() * quotes.length)]
        setQuote(randomquote)
    }



    return (
        <>

            <div>{quote}</div>
            <button onClick={random}>Click Me</button>





        </>
    )
}

export default RandomQuote