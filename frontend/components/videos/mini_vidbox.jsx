import React from "react";
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle } from '@fortawesome/free-solid-svg-icons';


class MiniVidBox extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchUsers();
    }

    getTime(createdAt){
        let timeStamp = "";
        let now = new Date();
        createdAt = new Date(createdAt);
        let year = now.getYear() - createdAt.getYear();
        let month = now.getMonth() - createdAt.getMonth();
        let day = now.getDate() - createdAt.getDate();
        let hour = now.getHours() - createdAt.getHours();
        let minute = now.getMinutes() - createdAt.getMinutes();
        
        debugger;
        // Check for years and if rounding is needed
        if(year > 0 && month < 6 && month >= 0){
            return year === 1 ? "1 year ago" : ` ${year} years ago `;
        }
        
        if(year > 0 && month >= 6){
            return ` ${year+1} years ago `;
        }

        if(year > 0 && month < 0){
            if(year === 1) {
                month = month + 12;
            } else {
                let label = year === 2 ? "year" : "years";
                return month + 12 >= 6 ? ` ${year - 1} ${label} ago ` : ` ${year} years ago `;
            }
        }

        // Check for months
        if(month > 0 && day < 15 && day >= 0){
            return month === 1 ? "1 month ago" : ` ${month} months ago `;
        }

        if (month > 0 && day >= 15) {
            return ` ${month + 1} months ago `;
        }

        if (month > 0 && day < 0) {
            if (month === 1) {
                if (createdAt.getMonth() === 0 || createdAt.getMonth() === 2 ||
                    createdAt.getMonth() === 4 || createdAt.getMonth() === 6 ||
                    createdAt.getMonth() === 7 || createdAt.getMonth() === 29 ||
                    createdAt.getMonth() === 11) {
                    day += 31;
                } else if (createdAt.getMonth() === 3 || createdAt.getMonth() === 5 ||
                    createdAt.getMonth() === 8 || createdAt.getMonth() === 10) {
                    day += 30;
                } else if (year % 4 === 0) {
                    day += 29;
                } else {
                    day += 28
                }
            } else {
                let label = month === 2 ? "month" : "months";
                return day + 30 >= 14 ? ` ${month - 1} ${label} ago ` : ` ${month} months ago `;
            }
        }

        // check for days
        if (day > 0 && hour < 12 && hour >= 0) {
            return day === 1 ? "1 day ago" : ` ${day} days ago `;
        }

        if (day > 0 && hour >= 12) {
            return ` ${day + 1} days ago  `;
        }

        if (day > 0 && hour < 0) {
            if (day === 1) {
                hour += 24;
            } else {
                let label = day === 2 ? "day" : "days"; 
                return hour + 24 >= 12 ? ` ${day - 1} ${label} ago ` : ` ${day} days ago`;
            }
        }

        // check for hours
        if (hour > 0 && minute < 30 && minute >= 0) {
            return hour === 1 ? "1 hour ago" : ` ${hour} hours ago `;
        }

        if (hour > 0 && minute >= 30) {
            return ` ${hour + 1} hours ago `;
        }

        if (hour > 0 && minute < 0) {
            if (hour === 1) {
                minute += 60;
            } else {
                let label = hourgi === 2 ? "hour" : "hours";
                return minute + 60 >= 30 ? ` ${hour - 1} ${label} ago ` : ` ${hour} hours ago `;
            }
        }

        return munute === 1 ? "1 minute ago" : ` ${minute} minutes ago `;

    }

    render() {
        let {video} = this.props;
        debugger;
        return (<div className="miniVidBox">
            <Link to={`/watch/${video.id}`}>
                <img src={video.thumbnail} />
                <div className ="side">
                    <div>
                        <Link className="profilePic" to={`/channel/${video.authorId}`}><FontAwesomeIcon size={32} icon={faUserCircle} /></Link>
                    </div>
                    <div>
                        <div className="videoTitle">{video.title}</div>
                        <Link className="miniUser" to={`/channel/${video.authorId}`}>{Object.values(this.props.users).includes( ) ? this.props.users[video.authorId].username : ""}</Link>
                        <div className="miniViews">{video.viewCount} Views • {this.getTime(video.createdAt)} </div>
                    </div>
                </div>
            </Link>
        </div>
        )
    }
}

export default MiniVidBox;