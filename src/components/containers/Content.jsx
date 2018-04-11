import React from "react"
import {Route} from "react-router-dom"
import {Switch} from "react-router-dom"

// style
import "./Content.css"

// components
import Landing from "../landing/Landing"
import UserRegister from "../user/UserRegister"
import UserLogin from "../user/UserLogin"
import UserForgot from "../user/UserForgot"
import UserSettingsAccount from "../user/UserSettingsAccount"
import UserSettingsPassword from "../user/UserSettingsPassword"
import Feedback from "../feedback/Feedback"
import ProtectedRoute from "../common/ProtectedRoute"


const Content = () => (

    <div className="content">

        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/register" component={UserRegister}/>
            <Route exact path="/login" component={UserLogin}/>
            <Route exact path="/forgot" component={UserForgot}/>
            <ProtectedRoute exact path="/feedback" component={Feedback}/>
            <ProtectedRoute exact path="/settings/account" component={UserSettingsAccount}/>
            <ProtectedRoute exact path="/settings/password" component={UserSettingsPassword}/>
        </Switch>

    </div>

)


// export
export default Content
