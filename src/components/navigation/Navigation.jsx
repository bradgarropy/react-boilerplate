import React from "react"
import {Link} from "react-router-dom"

// style
import "./Navigation.css"

// material ui
import FlatButton from "material-ui/FlatButton"
import FilterOne from "material-ui/svg-icons/image/filter-1"
import FilterTwo from "material-ui/svg-icons/image/filter-2"
import FilterThree from "material-ui/svg-icons/image/filter-3"
import FilterFour from "material-ui/svg-icons/image/filter-4"


const Navigation = () => {

    return (

        <div className="navigation">

            <FlatButton
                label="home"
                hoverColor="none"
                disableTouchRipple
                containerElement={<Link to="/"/>}
                icon={<FilterOne/>}
            />

            <FlatButton
                label="register"
                hoverColor="none"
                disableTouchRipple
                containerElement={<Link to="/register"/>}
                icon={<FilterTwo/>}
            />

            <FlatButton
                label="login"
                hoverColor="none"
                disableTouchRipple
                containerElement={<Link to="/login"/>}
                icon={<FilterThree/>}
            />

            <FlatButton
                label="feedback"
                hoverColor="none"
                disableTouchRipple
                containerElement={<Link to="/feedback"/>}
                icon={<FilterFour/>}
            />

        </div>

    )


}


// export
export default Navigation
