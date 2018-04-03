import React from "react"
import {Route} from "react-router-dom"
import {Switch} from "react-router-dom"

// style
import "./Content.css"

// components
import Landing from "../landing/Landing"
import UserRegister from "../user/UserRegister"
import UserLogin from "../user/UserLogin"
import Protected from "./Protected"
import ProtectedRoute from "../common/ProtectedRoute"


const Content = () => (

    <div className="content">

        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/register" component={UserRegister}/>
            <Route exact path="/login" component={UserLogin}/>
            <ProtectedRoute exact path="/protected" component={Protected}/>
        </Switch>

    </div>

)


// export
export default Content