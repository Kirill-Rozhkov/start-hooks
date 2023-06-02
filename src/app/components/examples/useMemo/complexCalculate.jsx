import React, { useEffect, useState, useMemo } from "react"
import CardWrapper from "../../common/Card"
import SmallTitle from "../../common/typografy/smallTitle"

function factorial(n) {
    return n ? n * factorial(n - 1) : 1
}
function runFactorial(n) {
    console.log("run Factorial ")
    return factorial(n)
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100)
    const [otherState, setOtherState] = useState(false)

    const buttonColor = otherState ? "primary" : "secondary"
    useEffect(() => {
        console.log("render")
    })

    const fact = useMemo(() => runFactorial(value), [value])
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value: {value}</p>
                <p>Result fact: {fact}</p>
                <button
                    onClick={() => setValue((prev) => prev + 10)}
                    className="btn btn-primary mx-2"
                >
                    Increment
                </button>
                <button
                    onClick={() => setValue((prev) => prev - 10)}
                    className="btn btn-primary mx-2"
                >
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    onClick={() => setOtherState((prev) => !prev)}
                    className={`btn btn-${buttonColor} ms-mb-2`}
                >
                    Change color
                </button>
            </CardWrapper>
        </>
    )
}

export default ComplexCalculateExample
