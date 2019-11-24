import React from 'react';
import { setMatchUser } from '../logic';
import './candidatemini.scss'

class CandidateMini extends React.Component {
    renderTagsList = () => {
        return this.props.candidate.tags.map((tag, index) => 
            <div className={tag['name'].includes(this.props.queryTag) ? "tag searched" : "tag"} key={index} >
                {tag.name}  <span className="rating">{tag.rating}</span>
            </div>
        , this);
    }

    render() {
        return (
            <div id="candidate-mini">
                <div className="informations">
                    <div className="image">
                        <div className="user-photo">
                            <img src={this.props.candidate.image} alt=""></img>
                        </div>
                    </div>
                    <div className="details">
                        <p className="name">
                            {this.props.candidate.firstName + " " + this.props.candidate.lastName}
                        </p>
                        <div className="tags">
                            {this.renderTagsList()}
                        </div>
                    </div>
                </div>
                <div className="action-buttons" onClick={() => {
                        setMatchUser(this.props.candidate); 
                        this.props.doWatchDetails();
                }}>
                    <button to='/candidate-page' className="view-more">View more</button>
                </div>
            </div>
        )
    }
}

export default CandidateMini;