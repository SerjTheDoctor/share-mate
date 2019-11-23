import React from 'react';
import './currentuser.scss'

class CurrentUser extends React.Component {
    render() {
        return (
            <div id="current-user">
                <div className="user-photo">
                    <img src="https://scontent.fclj1-1.fna.fbcdn.net/v/t1.0-9/56806503_2501344919936366_6239265756442263552_o.jpg?_nc_cat=102&_nc_oc=AQmtHiNdd0gq65pzViZoPHGi0MaWN_TbaZT5vbMdHacIsznRME-wiW7vEHjmV8OF3gc&_nc_ht=scontent.fclj1-1.fna&oh=45a12c858981675275d515ae98f3fb92&oe=5E8B17A1" alt=""></img>
                </div>
                <p className="current-user-name">Raul Mogoș</p>
                <div className="notifications">
                    <i className="bell icon outline"></i>
                </div>
            </div>
        );
    }
}

export default CurrentUser;