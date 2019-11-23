import React from 'react';
import Menu from '../components/menu';
import CandidatesList from '../components/candidateslist';
import CandidateDetails from '../components/candidatedetails';
import './homebody.scss';
import Register from './register';
import CompleteProfile from './complete-page';

class HomeBody extends React.Component {
    
    constructor() {
        super()
        this.state = {
            watchDetails: false,
            hasCompletedProfile: false
        }
    }

    doWatchDetails = () => {
        this.setState({
            watchDetails: true
        });
    }

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    render() {
        return (
            <div id="home-body">
                <Menu className="menu"></Menu>
                {   
                    this.state.hasCompletedProfile ?
                    (<div>hasCompletedProfile = true</div>) :
                    (<div className="hb-complete-profile">
                        <CompleteProfile ></CompleteProfile>
                    </div>)
                    // ({
                    //     !this.props.getWatchDetails() ? 
                    //     (<CandidatesList
                    //         queryTag={this.props.queryTag}
                    //         filterList={this.props.array} 
                    //         className="candidates-list"
                    //         doWatchDetails={() => this.props.doWatchDetails(true)}
                    //     >
                    //     </CandidatesList>) :
                    //     (<CandidateDetails>

                    //     </CandidateDetails>)

                    // })
                }
            </div>
        );
    }

}

export default HomeBody;