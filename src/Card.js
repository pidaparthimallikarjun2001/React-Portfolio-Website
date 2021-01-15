import React from "react";
import "./Card.css";
import GitHubIcon from '@material-ui/icons/GitHub';
function Card({image, project, about}) {


    return (
        <div className = "Card">
            <div className = "upper-container">
                <div className = "img-container">
                    <img src = {image} height = "100%" width = "100%" />
                </div>
            </div>
            <div className = "lower-container">
                <h4>{project}</h4>
                <h6>{about}</h6>
                <button className = "button1"><GitHubIcon/> Clone Poject</button>
                <button className = "button2"><GitHubIcon/> Repo</button>
            </div>
        </div>
    )
}

export default Card;