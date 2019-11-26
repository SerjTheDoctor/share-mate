import React from 'react';
import TopBar from '../components/topbar';
import HomeBody from '../components/homebody'

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            candidatesList: [],
            queryTag: "",
            watchDetails: false
        };
        fetch('/users')
            .then(response => response.json() )
            .then(data => console.log(data));
    }

    doWatchDetails = (value) => {
        this.setState({
            watchDetails: value
        });
    }

    setQueryTag = (tag) => {
        this.setState({
            queryTag: tag
        });
        if (!tag || tag.length < 2) {
            this.setState({ candidatesList: [] });
            return ;
        }
        fetch('/users')
            .then(response => response.json())
            .then(data => {
                let newCandidatesList = [];
                data.forEach(user => {
                    newCandidatesList.push({
                        firstName: user['first_name'],
                        lastName: user['last_name'],
                        shareCoins: user['shareCoins'],
                        password: user['password'],
                        mail: user['mail'],
                        location: user['location'],
                        age: user['age'],
                        image: user['image'],
                        tags: user['tags']
                    });
                });

                newCandidatesList = newCandidatesList.filter(user => {
                    let ok = false;
                    user.tags.forEach(tg => {
                        if (tg['name'].includes(this.state.queryTag)) {
                            ok = true;
                        }
                    });
                    return ok;
                });

                this.setState({ candidatesList: newCandidatesList })
            });
    }

    getWatchDetails = () => {
        return this.state.watchDetails;
    }

    render() {
        return (
            <div>
                <TopBar doWatchDetails={this.doWatchDetails} setQueryTag={this.setQueryTag}></TopBar>
                <HomeBody getWatchDetails={this.getWatchDetails} 
                        queryTag={this.state.queryTag} 
                        doWatchDetails={this.doWatchDetails} 
                        array={this.state.candidatesList} 
                />
            </div>
        );
    }
}

export default HomePage;