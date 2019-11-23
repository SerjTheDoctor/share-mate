import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div style={{padding: "0px 20px"}}>
                <div className="ui fluid category search" align="center" >
                    <div
                        className="ui icon input"
                        // onKeyDown={(event) => {
                        //     if (event.keyCode === 13) {
                        //         this.props.setQueryTag(event.target.value.toLowerCase());
                        //     }
                        // }}
                        onChange={(event)=>this.props.setQueryTag(event.target.value.toLowerCase())}
                    >
                        <input className="prompt" type="text" 
                                placeholder="Today, I feel like..." style={{ height: "50px", width:"600px" }}>
                        </input>
                        <i 
                            className="search icon" style={{marginRight: "10px"}}
                        />
                    </div>
                </div>
            </div>
        );
    }

}

export default SearchBar;