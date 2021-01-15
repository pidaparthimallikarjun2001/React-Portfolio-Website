import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ProgressBar from '@ramonak/react-progress-bar';
import "./style.css";


export default function SoftSkills() {
    return (
        <div className = "skillscontainer">
            <div className = "row">
                <div className = "col-md-3">
                </div>
                <div className = "col-md-6">
                <h1>Soft Skills</h1>
                </div>
                <div className = "col-md-3">
                </div>
            </div>
            <div className = "row">
        <div className = "col-md-3">
            </div>
            <div className = "col-md-5">
            <h5>Clear Communication</h5>
            <h5>Listening Skills</h5>
            <h5>Self Control</h5>
            <h5>Optimistic</h5>
            </div>
            <div className = "col-md-4">
            <h5>Conflict Resolution</h5>
            <h5>Taking Responsibility</h5>
            <h5>Leadership Qualities</h5>
            <h5>Team Work</h5>
            </div>
        </div>
    </div>
    );
}