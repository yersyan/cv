import React from "react";
import "./timeline.css";
import cn from "classnames"
import {TimelineItem} from "./timelineItem";

export const Timeline = ({timelineData}) => {


    return <div className={cn("timeline", "timelineSecondStyle", "clearfix")}>
        {timelineData.map(t => {
            return <TimelineItem period={t.period} company={t.company} title={t.title} text={t.text}/>
        })}
    </div>
}