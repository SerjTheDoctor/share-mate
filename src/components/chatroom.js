import React from 'react';
import { MATCH_USER } from '../logic';
import './chatroom.scss'

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            newMsg: '',
        }
        this.fetchDta();
    }

    addMsg = () => {
        const msg = {
            id: (this.state.messages.length+1).toString(),
            mail1: 'sergiu.apostu25@gmail.com',
            mail2: MATCH_USER.mail,
            who: 0,
            message: this.state.newMsg
        }
        fetch('/addmessage', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(msg)
        }).then(resp => {
            this.setState({newMsg: ''});
            this.fetchDta();
        });
    }

    fetchDta = () => {
        fetch('/getmessage').then(response => response.json())
        .then(data => {
            let newMessages = [];
            data.forEach(msg => {
                newMessages.push({
                    id: msg['id'],
                    user1: msg['mail1'],
                    user2: msg['mail2'],
                    sender: msg['who'],
                    message: msg['text']
                });
            });
            this.setState({messages: newMessages});
        });
    }

    renderMessages = () => {
        let copyMessages = [...this.state.messages];
        return copyMessages.map((msg, index) =>
            <div className={(msg.sender === 1) ? "msg-line-left" : "msg-line-right"} key={index}>
                <div className="msg-photo">
                    <img src={(msg.sender === 1) ? MATCH_USER.image : "http://www.cs.ubbcluj.ro/wp-content/uploads/Mircea-Gabriel-small.jpg"} alt="avatar"/>
                </div>
                <div className="msg">
                    <p className="text">{msg.message}</p>
                </div>
            </div>
        , this);
        
    }

    render() {
        return (
            <div id="chat-room">
                <div className="chat-inside">
                    <div className="messages">
                        {this.renderMessages()}
                    </div>
                    <div className="input-area">
                        <input type="text" className="input-message" alt="Input Message" placeholder="Type a message..."
                            value={this.state.newMsg} onChange={(event) => {
                                this.setState({newMsg: event.target.value});
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    this.addMsg();
                                }
                            }}
                        />
                        <div className="send-button">
                            <img src="images/send-button.svg" height="25px" width="25px" alt=""
                                onClick={() => this.addMsg()}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatRoom;