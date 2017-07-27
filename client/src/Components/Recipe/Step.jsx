import React, {Component} from 'react';
import styled from 'styled-components';

const StepHolder = styled.div `
    margin-bottom: 3em;
`

class Step extends Component {
    constructor(props){
        super(props);
        this.state = {
            step: this.props.step
        }
    }
    render() {
        const StepText = styled[this.props.isEditing
                ? "textarea"
                : "div"]`
            font-family: 'Open Sans', sans-serif;
            font-size: 22px;
            color: #4A4A4A;
            margin-bottom: 1em;
            border: none;
            
            ${this.props.isEditing
            ? `
                min-height: 300px;
                width: 100%;
            `
            : null}  
        `
        const StepImage = styled.div `
            width: 100%;
            height: 400px;
            background-size: cover;
            border: none;
            background: url('${this.state.step.img}') no-repeat;
        `
        return (this.props.isEditing
            ? (
                <StepHolder className="list-group">
                    <div className="container list-group-item">
                        <StepText defaultValue={this.state.step.desc}
                        onChange={(e)=>{
                            let {step} = this.state;
                            step.desc = e.target.value;
                            this.props.handleEditEntry("steps", this.props.index, step)
                        }}
                        />
                        <StepImage img={this.state.step.img} className="align-items-center">
                            <input type="text" defaultValue={this.state.step.img}/>
                        </StepImage>
                    </div>
                </StepHolder>
            )
            : (
                <StepHolder>
                    <StepText className="container">{this.state.step.desc}</StepText>
                    <StepImage img={this.state.step.img}/>
                </StepHolder>
            ));
    }
}

export default Step;