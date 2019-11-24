import React from 'react';
import CandidateMini from '../components/candidatemini';
import './candidateslist.scss'

class CandidatesList extends React.Component {
    
    renderFilterList = () => {
        if (!this.props.filterList)
            return <p>No results</p>;

        return this.props.filterList.map((candidate, index) => 
            <CandidateMini className="item" key={index} 
                doWatchDetails={() => this.props.doWatchDetails()}
                candidate={candidate} queryTag={this.props.queryTag}
            />
        );
    }

    render() {
        return (
            <div id="candidates-list">
                { this.renderFilterList() }
            </div>
        );
    }
}

export default CandidatesList;