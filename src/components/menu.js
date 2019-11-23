import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';

class Menu extends React.Component {
    render() {
        return (
            <div id="menu">
                <div className="menu-item">
                    <i className="custom-icon home icon"></i>
                    <Link to="/home">
                    <p className="item-text">Home</p>
                    </Link>
                </div>
                <div to="/manage-coins" className="menu-item">
                    <i className="custom-icon bitcoin icon"></i>
                    <Link to="/manage-coins">
                    <p className="item-text">Manage ShareCoins</p>
                    </Link>
                </div>
                <div className="menu-item">
                    <i className="custom-icon braille icon"></i>
                    <Link to="/settings-page">
                    <p className="item-text">Settings</p>
                    </Link>
                </div>

                <div className="space"></div>

                <div className="menu-item">
                    <i className="custom-icon envelope icon"></i>
                    <p className="item-text">Send feedback</p>
                </div>
                <div className="menu-item">
                    <i className="custom-icon question circle icon"></i>
                    <p className="item-text">Help</p>
                </div>
            </div>
        );
    }
}

export default Menu;