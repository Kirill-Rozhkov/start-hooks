import React from "react"
import CardWrapper from "../common/Card"

const withFunctions = (SimpleComponent) => () => {
    const isAuth = localStorage.getItem("auth")

    const onLogin = () => {
        localStorage.setItem("auth", "token")
    }
    const onLogOut = () => {
        localStorage.removeItem("auth")
    }
    return (
        <CardWrapper>
            <SimpleComponent
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
            />
        </CardWrapper>
    )
}

export default withFunctions
