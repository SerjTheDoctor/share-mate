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
            .then(response => response.json())
            .then(data => {
                this.setState({ candidatesList: data })
                console.log(this.state.candidatesList);
            });
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
    }

    getWatchDetails = () => {
        return this.state.watchDetails;
    }

    filterByQueryTag = () => {
        console.log('Filtering...');
        fetch('/users')
            .then(response => response.json())
            .then(data => this.setState({ candidatesList: data }));
        console.log('Fetched');
    }

    render() {
        return (
            <div>
                <TopBar doWatchDetails={this.doWatchDetails} setQueryTag={this.setQueryTag}></TopBar>
                <HomeBody getWatchDetails={this.getWatchDetails} 
                        queryTag={this.state.queryTag} 
                        doWatchDetails={this.doWatchDetails} 
                        array={this.candidatesList} 
                        />
            </div>
        );
    }
}

export default HomePage;