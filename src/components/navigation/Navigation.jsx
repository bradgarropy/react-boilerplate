import React from "react"
import {Link} from "react-router-dom"

// style
import "./Navigation.css"

// material ui
import FlatButton from "material-ui/FlatButton"
import HomeIcon from "material-ui/svg-icons/action/home"
import PersonAddIcon from "material-ui/svg-icons/social/person-add"
import FeedbackIcon from "material-ui/svg-icons/action/feedback"


const Navigation = () => {

    return (

        <div className="navigation">

            <FlatButton
                label="home"
                hoverColor="none"
                disableTouchRipple
                containerElement={<Link to="/"/>}
                icon={<HomeIcon/>}
            />

            <FlatButton
                label="register"
                hoverColor="none"
                disableTouchRipple
                containerElement={<Link to="/register"/>}
                icon={<PersonAddIcon/>}
            />

            <FlatButton
                label="feedback"
                hoverColor="none"
                disableTouchRipple
                containerElement={<Link to="/feedback"/>}
                icon={<FeedbackIcon/>}
            />

        </div>

    )


}


// export
export default Navigation
