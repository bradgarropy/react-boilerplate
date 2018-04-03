import React from "react"

// styles
import "./UserButton.css"

// utils
import localstorage from "../../utils/localstorage"

// components
import UserUnauthenticatedButton from "./UserUnauthenticatedButton"
import UserAuthenticatedButton from "./UserAuthenticatedButton"


const User = () => {

    const user = localstorage.user()

    const button = user
        ? <UserAuthenticatedButton user={user}/>
        : <UserUnauthenticatedButton/>

    return (

        <div className="user-button">
            {button}
        </div>

    )

}


// export
export default User
