import React from "react"
import {Route} from "react-router-dom"
import {Switch} from "react-router-dom"

// style
import "../css/Content.css"

// components
import Landing from "./views/Landing"
import Register from "./views/Register"
import Login from "./views/Login"
import Protected from "./views/Protected"
import ProtectedRoute from "./ProtectedRoute"


const Content = () => (

    <div className="content">

        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <ProtectedRoute exact path="/protected" component={Protected}/>
        </Switch>

    </div>

)


// export
export default Content
