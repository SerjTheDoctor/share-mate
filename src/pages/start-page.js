import React from 'react';
import './start-page.scss';
import Auth from '../components/auth';

class StartPage extends React.Component {
    render() {
        return (
            <div id="start-page">
                <div className="bg-image"></div>
                <Auth></Auth>
            </div>
        );
    }
}

export default StartPage;