import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TechnicalSkills from "./TechnicalSkills";
import SoftSkills from "./SoftSkills";

export default function Skills() {
    return(
        <div className = "skillscontainer">
            <div className = "row">
            <div className = "col-md-3">
            </div>
            <div className = "col-md-6">
            <h1>Skills</h1>
            </div>
            <div className = "col-md-3">
            </div>
            </div>

            <div className = "row">
            <div className = "col-md-6">
            <Link to = "/basicwebsite/technicalskills"><h1>Technical Skills</h1></Link>
            </div>
            <div className = "col-md-6">
            <Link to = "/basicwebsite/softskills"><h1>Soft Skills</h1></Link>
            </div>
            </div>

        </div>
    );
}