import React from 'react';
import { getNotification } from '../logic';
import './currentuser.scss'

class CurrentUser extends React.Component {
    render() {
        return (
            <div id="current-user">
                <div className="user-photo">
                    <img src="http://www.cs.ubbcluj.ro/wp-content/uploads/Mircea-Gabriel-small.jpg" alt=""></img>
                </div>
                <p className="current-user-name">Gabi Mircea</p>
                <div className="notifications">
                    <i className="bell icon outline"></i>
                </div>
                {
                    getNotification() === true ?
                    (<div className="notification-box">
                        <p className="notif-text">You have a new connection with  <span className="bold">Jon Ionel</span> !</p>
                    </div>) :
                    <div></div>
                }
            </div>
        );
    }
}

export default CurrentUser;