import React from 'react';
import './complete-page.scss';

class CompleteProfile extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            skill: '',
            img: '',
            allSkills: [],
            age: '',
            location: '',
            linkedin: '',
            github: '',
            sex: ''
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
                <p className="complete-profile">Complete your profile</p>
                
                <input type="number" className="field field-Age" placeholder="Age" alt="Age" onChange={(event) => this.setState({Age: event.target.value})} />
                <input type="text" className="field field-Location"  placeholder="Location" alt="Location" onChange={(event) => this.setState({Location: event.target.value})} />
                <div className="fi fi-Sex">
                    <input className="radio" type="radio" name="radio" onChange = { (event) => 
                        {if( event.checked === true) this.setState({sex: 'Male'})}} />
                    <label>Male</label>

                    <input className="radio" type="radio" name="radio" 
                    onChange = { (event) => 
                        {if( event.checked === true) this.setState({sex: 'Female'})}} />
                    <label>Female</label>

                    <input className="radio" type="radio" name="radio" 
                    onChange = { (event) => 
                        {if( event.checked === true) this.setState({sex: 'Other'})}} />
                    <label>Other</label>
                </div>
                <input type="text" className="field field-Linkedin" placeholder="Linkedin" alt="Linkedin" onChange={(event) => this.setState({linkedin: event.target.value})} />
                <input type="text" className="field field-Github" placeholder="Github" alt="Github" onChange={(event) => this.setState({github: event.target.value})} />
                
                <input type="file" className="field field-Appearance" onChange={(event) => this.setState({img: event.target.value})} />

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

                <div className="finish-button">
                    <button className="submit-cp">Done</button>
                </div>
            </div>
        );
    }
}

export default CompleteProfile;