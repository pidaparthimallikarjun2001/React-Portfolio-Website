import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProgressBar from '@ramonak/react-progress-bar';
import "./style.css";

export default function TechnicalSkills() {
    return (

        <div className = "skillscontainer">
            <div className = "row">
                <div className = "col-md-3">
                </div>
                <div className = "col-md-6">
                <h1>Technical Skills</h1>
                </div>
                <div className = "col-md-3">
                </div>
            </div>
        <div className = "row">
        <div className = "col-md-3">
            </div>
            <div className = "col-md-5">
            <h5>Python</h5>
            <ProgressBar className = "bar" completed={80} width = "50%" height = "10px" bgcolor = "#007bff"/>
            <h5>SQL</h5>
            <ProgressBar className = "bar" completed={90} width = "50%" height = "10px" bgcolor = "#007bff"/>
            <h5>Data Structures</h5>
            <ProgressBar className = "bar" completed={95} width = "50%" height = "10px" bgcolor = "#007bff"/>
            <h5>C/C++</h5>
            <ProgressBar className = "bar" completed={95} width = "50%" height = "10px" bgcolor = "#007bff"/>
            </div>
            <div className = "col-md-4">
            <h5>JavaScript</h5>
            <ProgressBar className = "bar" completed={95} width = "50%" height = "10px" bgcolor = "#007bff"/>
            <h5>React</h5>
            <ProgressBar className = "bar" completed={90} width = "50%" height = "10px" bgcolor = "#007bff"/>
            <h5>HTML/CSS</h5>
            <ProgressBar className = "bar" completed={90} width = "50%" height = "10px" bgcolor = "#007bff"/>
            <h5>C#</h5>
            <ProgressBar className = "bar" completed={70} width = "50%" height = "10px" bgcolor = "#007bff"/>
            </div>
        </div>
    </div>
     
    );
}