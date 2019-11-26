import React from 'react';
import { MATCH_USER } from '../logic';
import './candidatedetails.scss';
import ChatRoom from './chatroom';

class CandidateDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            receiveNotification: false,
            chatState: false
        }
    }

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    renderCandTags = () => {
        return MATCH_USER.tags.map((tag, index) =>
            <div className="cand-review" key={index}>
                <div className="cand-rating">{tag.rating}/5</div>
                <div className="cand-tag">{tag.name}</div>
            </div>
        , this);
    }

    toggleReceiveNotification = () => {
        this.setState({
            receiveNotification: !this.state.receiveNotification,
            chatState: true
        });
    }

    render() {
        return (
            <div id="candidate-details">
                <div id="cand-profile-space">
                    <div className="cand-picture">
                        <div className="cand-user-photo">
                            <img src={ MATCH_USER.image } alt=""></img>
                        </div>
                    
                        <div className="cand-details">
                            <p className="cand-name">{ MATCH_USER.firstName + " " + MATCH_USER.lastName }</p>
                            <div className="cand-tags">
                                {this.renderCandTags()}
                            </div>
                        
                            <div className="cand-connect" onClick={() => this.toggleReceiveNotification()}>
                                <i className="custom-shake handshake icon"></i>
                                Connect !
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.chatState ?
                    <ChatRoom toggleReceiveNotification={this.toggleReceiveNotification}></ChatRoom> :
                    <div></div>
                }
                {
                    this.state.receiveNotification === true ?
                    (<div className="notification-box">
                        <p className="notif-text">You have a new connection with  <span className="bold">{ MATCH_USER.firstName + ' ' + MATCH_USER.lastName }</span> !</p>
                    </div>) :
                    <div></div>
                }

            </div>
        );
    }
}

export default CandidateDetails;