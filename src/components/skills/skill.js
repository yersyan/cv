import React from "react";
import "./skills.css";

export const Skill = ({title, level}) => {
    return <div>
        <div className="skill clearfix">
            <h4>{title}</h4>
            <div className="skill-value">{level}</div>
        </div>
        <div style={{width: level}} className="skill-container">
            <div className="skill-percentage"/>
        </div>
    </div>
}
