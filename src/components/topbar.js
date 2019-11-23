import React from 'react';
import Logo from '../components/logo';
import SearchBar from '../components/searchbar';
import CurrentUser from './currentuser';
import './topbar.scss';

class TopBar extends React.Component {
    render() {
        return (
            <div id="top-bar">
                <div className="logo">
                    <Logo></Logo>
                </div>
                <div className="search-bar" onClick={() => this.props.doWatchDetails(false)}>
                    <SearchBar setQueryTag={this.props.setQueryTag}></SearchBar>
                </div>
                <div className="tiny-profile">
                    <CurrentUser></CurrentUser>
                </div>
            </div>
        );
    }
}

export default TopBar;