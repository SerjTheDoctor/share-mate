import React from 'react';
import CandidateMini from '../components/candidatemini';

class CandidatesList extends React.Component {
    
    renderFilterList = () => {
        console.log('Filterlist:' + this.props.filterList);
        if (!this.props.filterList)
            return <p onClick={() => console.log(this.props.filterList)}>No results</p>;

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