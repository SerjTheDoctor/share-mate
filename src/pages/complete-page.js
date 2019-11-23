import React from 'react';
import './complete-page.scss';

class CompleteProfile extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            skill: '',
            allSkills: []
        }
    }

    addSkill = () => {
        
        
        let newList = this.state.allSkills;
        
        let indexOfSkill = newList.indexOf(this.state.skill);

        if (indexOfSkill === -1)
        {   
            newList.push(this.state.skill);
        }
        this.setState({allSkills: newList });
        this.setState({skill: ""});

    }

    listSkills = () =>
    {
        let list;
        list = this.state.allSkills.map( 
            ( skl , index) =>
        <div className="sep"> {skl}</div>

         );
        return list;
    }
    
    render() {
        return (
            <div id="complete-page">
                <p className="complete-profile">
                    Complete your profile
                </p>
                
                <input type="text" className="field field-Location"  placeholder="Location" alt="Location"/>
                <input type="number" className="field field-Age" placeholder="Age" alt="Age"/>
                <input type="number" className="field field-Linkedin" placeholder="Linkedin" alt="Linkedin"/>
                <input type="text" className="field field-Skills" value={this.state.skill}
                    placeholder="Enter skills" alt="Skills"

                onChange={(event) => this.setState({skill: event.target.value})}
                onKeyPress={event => 
                    {
                        if (event.key === "Enter")
                            this.addSkill()
                    }
                }
                />

                <div className="skill-box">
                    {this.listSkills()}
                </div>
 
            </div>
        );
    }
}

export default CompleteProfile;